Teammitglieder: Elias Tilgant

---

# Aufgabenblatt: B2
=================

--------------------
## zum Starten der Webseite:

-   in den Ordner "ipr" Navigieren (index.html! muss vorhanden sein!)

-   via python3 (<- Es muss Python 3 sein) mit dem Modul http.server simplen http server starten.
-   im browser localhost:8000 aufrufen und jegliche Blocker (uBlock...) deaktivieren!

```bash
python -m http.server 433 #optional kann 433 weggelassen werden, dann ist der port 8000
```
Achtung, je nach ENV Deklaration kann dieser befehl auch python3 heißen!
Eine VENV ist nicht notwendig

Begründung für diesen Weg: CORS-Probleme umgehen

---------------

Die OpenStreetMap taucht nicht in der Api-Dokumentation auf, da wir für diese das "leaflet" Framework genutzt haben.