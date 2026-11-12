#!/usr/bin/env python3
"""Allume / éteint une lumière Zigbee branchée sur une passerelle Tuya, en local.

Utilise le fichier devices.json créé par `python -m tinytuya wizard`.

Exemples :
    python lumiere.py --liste
    python lumiere.py on  "Salon" --ip 192.168.1.50
    python lumiere.py off "Salon" --ip 192.168.1.50
    python lumiere.py etat "Salon" --ip 192.168.1.50
"""
import argparse
import json
import sys
from pathlib import Path

import tinytuya


def charger_appareils(chemin):
    fichier = Path(chemin)
    if not fichier.exists():
        sys.exit(f"Fichier {fichier} introuvable. Lance d'abord : python -m tinytuya wizard")
    return json.loads(fichier.read_text(encoding="utf-8"))


def trouver_lumiere(appareils, nom):
    nom = nom.lower()
    exacts = [a for a in appareils if a.get("name", "").lower() == nom]
    trouves = exacts or [a for a in appareils if nom in a.get("name", "").lower()]
    if not trouves:
        sys.exit(f"Aucun appareil ne s'appelle « {nom} ». Utilise --liste pour voir les noms.")
    if len(trouves) > 1:
        noms = ", ".join(a["name"] for a in trouves)
        sys.exit(f"Plusieurs appareils correspondent : {noms}. Sois plus précis.")
    return trouves[0]


def trouver_passerelle(appareils, lumiere):
    parent = lumiere.get("parent")
    for a in appareils:
        if parent and a.get("id") == parent:
            return a
    # Ancien format de devices.json : on prend la seule passerelle connue.
    passerelles = [a for a in appareils if not a.get("node_id") and not a.get("sub")]
    if len(passerelles) == 1:
        return passerelles[0]
    sys.exit("Impossible de trouver la passerelle de cette lumière dans devices.json.")


def ouvrir(appareils, nom, ip, version):
    lumiere = trouver_lumiere(appareils, nom)
    if not lumiere.get("node_id"):
        sys.exit(f"« {lumiere['name']} » n'est pas un appareil Zigbee (pas de node_id).")
    gw = trouver_passerelle(appareils, lumiere)
    ip = ip or gw.get("ip")
    if not ip:
        sys.exit("Donne l'adresse IP de la passerelle avec --ip 192.168.x.x")
    version = version or float(gw.get("version") or 3.3)

    passerelle = tinytuya.Device(gw["id"], ip, gw["key"], persist=True, version=version)
    appareil = tinytuya.Device(lumiere["id"], cid=lumiere["node_id"], parent=passerelle)
    return lumiere, appareil


def dp_interrupteur(appareil, dp_force):
    """DP 20 pour la plupart des ampoules Tuya, DP 1 pour les interrupteurs/modules."""
    if dp_force:
        return str(dp_force)
    dps = (appareil.status() or {}).get("dps", {})
    if "20" in dps:
        return "20"
    if "1" in dps:
        return "1"
    return "20"


def main():
    p = argparse.ArgumentParser(description="Contrôle d'une lumière Zigbee via une passerelle Tuya")
    p.add_argument("action", nargs="?", choices=["on", "off", "etat"])
    p.add_argument("nom", nargs="?", help="nom de la lumière dans l'appli Tuya / Smart Life")
    p.add_argument("--ip", help="adresse IP locale de la passerelle Zigbee")
    p.add_argument("--version", type=float, help="version du protocole (3.3, 3.4 ou 3.5)")
    p.add_argument("--dp", help="numéro du DP marche/arrêt, si la détection auto se trompe")
    p.add_argument("--devices", default="devices.json", help="chemin de devices.json")
    p.add_argument("--liste", action="store_true", help="liste les appareils connus")
    args = p.parse_args()

    appareils = charger_appareils(args.devices)

    if args.liste:
        for a in appareils:
            genre = "zigbee" if a.get("node_id") else "wifi/passerelle"
            print(f"- {a.get('name', '?'):30} {genre:16} id={a.get('id')}")
        return

    if not args.action or not args.nom:
        p.error("indique une action (on/off/etat) et le nom de la lumière")

    lumiere, appareil = ouvrir(appareils, args.nom, args.ip, args.version)

    if args.action == "etat":
        print(json.dumps(appareil.status(), indent=2, ensure_ascii=False))
        return

    dp = dp_interrupteur(appareil, args.dp)
    resultat = appareil.set_value(dp, args.action == "on")
    if isinstance(resultat, dict) and resultat.get("Error"):
        sys.exit(f"Erreur : {resultat['Error']} ({resultat.get('Payload')})")
    print(f"{lumiere['name']} : {'allumée' if args.action == 'on' else 'éteinte'} (DP {dp})")


if __name__ == "__main__":
    main()
