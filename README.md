# 📚 MyLibrary – Bücherverwaltung mit HTML/CSS/JavaScript

**Projektstatus:** ✅ Abgeschlossen

**Beschreibung:**  
MyLibrary ist eine Webanwendung zur Verwaltung einer digitalen Bibliothek. Nutzer können Bücher hinzufügen, anzeigen, den Lesestatus ändern und Bücher löschen. Die Anwendung ist vollständig in Vanilla JavaScript geschrieben und nutzt HTML und CSS für die Benutzeroberfläche.

## 🔧 Funktionen

### `Book(title, author, pages, read)`
Erstellt ein Buchobjekt mit folgenden Eigenschaften:
- `id`: automatisch generierte UUID
- `title`: Titel des Buches
- `author`: Autor des Buches
- `pages`: Seitenanzahl
- `read`: Boolean, ob das Buch gelesen wurde

### `Book.prototype.toggleReadStatus()`
Prototyp-Methode, die den `read`-Status eines Buches umschaltet (`true` ⇄ `false`).

### `addBookToLibrary(title, author, pages, read)`
Erstellt ein neues Buch und fügt es dem Array `myLibrary` hinzu.

### `displayBooks()`
Rendert alle Bücher aus `myLibrary` im HTML-Element mit der ID `library`. Jedes Buch erhält:
- Eine Schaltfläche zum Entfernen („Löschen“)
- Eine Schaltfläche zum Ändern des Lesestatus („Lesestatus ändern“)
- Beide Buttons sind über ein `data-id`-Attribut mit dem jeweiligen Buchobjekt verknüpft

## 🖥️ Benutzeroberfläche

- Öffnen eines Dialogs zur Eingabe neuer Bücher
- Hinzufügen eines Buches über das Formular
- Schließen des Dialogs
- Dynamische Anzeige aller Bücher mit Interaktionsmöglichkeiten

## 📋 HTML-Grundstruktur

```html
<header>
    <h1 id="heading">Library</h1>
</header>

<!-- Formular in einem Dialog -->
<dialog id="new-book-dialog">
    <form method="dialog">
        <div>
            <label for="title">
                <input type="text" name="title" id="title" placeholder="Titel" required>
            </label>
            <label for="author">
                <input type="text" name="author" id="author" placeholder="Autor" required>
            </label>
            <label for="pages">
                <input type="text" name="pages" id="pages" placeholder="Seitenanzahl" required>
            </label>
            <label for="read">
                <input type="checkbox" name="read" id="read">
                Bereits gelesen?
            </label>
        </div>
        <div>
            <input type="submit" id="add-button" value="Hinzufügen">
            <input type="submit" name="close-dialog" id="close-dialog" value="Schließen">
        </div>
    </form>
</dialog>

<div id="button-div">
    <button id="add-new-book">+ Neues Buch hinzufügen</button>
</div>

<output></output>
```

## 📁 Projektstruktur (geplant)

my-library/
 ┣ index.html
 ┣ style.css
 ┣ script.js
 ┗ README.md

## 👨‍💻 Mitwirkende

- Behlül Samil Selcuk – Projektleitung & Entwicklung

## 📄 Lizenz
Dieses Projekt steht unter der MIT-Lizenz. Siehe `LICENSE`-Datei für Details.