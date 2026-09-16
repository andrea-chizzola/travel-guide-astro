# Travel Guide — Guida di Viaggio Personale

Benvenuto nella repository del sito web di guide di viaggio personali!

Questo sito è costruito come un'applicazione web statica e leggera, progettata per essere ospitata su **GitHub Pages** e facilmente migrabile verso **Astro** in futuro.

## 🚀 Struttura del Progetto

```
.
├── .github/workflows/deploy.yml   # Deploy automatico su GitHub Pages
├── src/                           # Codice sorgente del sito statico
│   ├── assets/                    # Immagini ed icone locali
│   ├── components/                # Frammenti HTML condivisi (Navbar, Footer)
│   ├── data/                      # Dati JSON per le destinazioni
│   ├── destinations/              # Guide dettagliate per ciascuna città/meta
│   ├── js/                        # Script client-side condivisi
│   ├── styles/                    # Fogli di stile CSS modulari
│   └── index.html                 # Homepage del sito
├── old_page/                      # Archivio/backup delle pagine storiche
└── CONTRIBUTING.md                # Guida per aggiungere nuove destinazioni
```

## 🛠️ Sviluppo Locale

Puoi visualizzare l'anteprima del sito in locale avviando un semplice server web nella cartella `src`:

```bash
# Con Python
python3 -m http.server --directory src 8000

# Con Node / npx
npx serve src
```

Apri `http://localhost:8000` nel browser per vedere il sito.

## 🚢 Deployment

Il deployment è automatizzato via **GitHub Actions**. Ogni push sul ramo `main` compila ed invia la cartella `src/` al ramo `gh-pages`.
