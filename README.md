# Allumer une lumière Zigbee via une passerelle Tuya

Le script `lumiere.py` parle directement à la passerelle Tuya Zigbee sur ton réseau local
(sans passer par le cloud une fois configuré). Il doit tourner sur un ordinateur
connecté au même réseau Wi-Fi/box que la passerelle.

## 1. Installer

```bash
pip install tinytuya
```

## 2. Récupérer les clés de tes appareils (une seule fois)

Tuya chiffre les échanges locaux avec une « local key » propre à chaque appareil.
On la récupère via un compte développeur Tuya gratuit :

1. Crée un compte sur <https://platform.tuya.com> (Tuya IoT Platform).
2. **Cloud → Development → Create Cloud Project** : choisis le data center de ta région
   (Europe centrale pour la France).
3. Dans le projet, onglet **Devices → Link App Account** : scanne le QR code avec
   l'appli **Tuya Smart** ou **Smart Life** (Profil → icône de scan en haut à droite).
4. Note l'**Access ID** et l'**Access Secret** (onglet Overview).
5. Dans le dossier du script, lance :

   ```bash
   python -m tinytuya wizard
   ```

   Colle l'Access ID, l'Access Secret, l'ID d'un de tes appareils et la région (`eu`).
   Le wizard crée `devices.json`. Ce fichier contient tes clés : ne le partage pas
   (il est ignoré par git).

## 3. Allumer la lumière

```bash
python lumiere.py --liste                              # voir les noms des appareils
python lumiere.py on   "Salon" --ip 192.168.1.50       # allumer
python lumiere.py off  "Salon" --ip 192.168.1.50       # éteindre
python lumiere.py etat "Salon" --ip 192.168.1.50       # voir l'état
```

`--ip` est l'adresse IP de la passerelle (visible dans l'appli Tuya/Smart Life →
passerelle → ⋯ → Informations, ou dans l'interface de ta box).

## En cas de souci

- **Erreur 901/914 ou pas de réponse** : essaie `--version 3.4` (ou `3.5`).
- **La lumière ne réagit pas mais pas d'erreur** : force le DP marche/arrêt avec
  `--dp 1` ou `--dp 20`. `python lumiere.py etat ...` montre les DP disponibles.
- **L'appli Tuya ouverte sur le téléphone** peut monopoliser la connexion locale :
  ferme-la pendant le test.
