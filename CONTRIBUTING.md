# Guida: Come Aggiungere una Nuova Destinazione

Aggiungere una nuova guida o destinazione al sito è semplice e richiede solo pochi passaggi.

---

## Passaggio 1: Aggiungi le immagini
Crea una cartella dedicata in `src/assets/images/<slug-destinazione>/` e inserisci la copertina e le foto principali.

*Esempio:* `src/assets/images/tokyo/cover.jpg`

---

## Passaggio 2: Aggiorna il file JSON delle destinazioni
Apri `src/data/destinations.json` e aggiungi la nuova voce al listone:

```json
{
  "slug": "tokyo",
  "name": "Tokyo",
  "country": "Giappone",
  "continent": "Asia",
  "coverImage": "/assets/images/tokyo/cover.jpg",
  "description": "Una guida immersiva tra tradizione, tecnologia e quartieri iconici.",
  "status": "published",
  "tags": ["metropoli", "tecnologia", "cibo", "cultura"]
}
```

---

## Passaggio 3: Crea la pagina della guida
Crea una nuova sottocartella in `src/destinations/<slug-destinazione>/` con un file `index.html`:

```
src/destinations/tokyo/index.html
```

Assicurati di includere i segnaposto per Navbar e Footer nel file HTML:

```html
<div id="nav-placeholder"></div>

<main>
  <!-- Contenuto della guida -->
</main>

<div id="footer-placeholder"></div>

<script src="../../js/components.js"></script>
<script src="../../js/scroll-animations.js"></script>
```

---

## Passaggio 4: Commit e Push
Esegui il commit e fai il push su `main`:

```bash
git add .
git commit -m "feat: aggiunta guida per Tokyo"
git push origin main
```

Il workflow di GitHub Actions aggiornerà automaticamente il sito live!
