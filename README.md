# 📚 MyLibrary – Bücherverwaltung mit HTML/CSS/JavaScript

**Projektstatus:** ✅ Abgeschlossen (Refactoring mit Klassen abgeschlossen)

**Beschreibung:**  
MyLibrary ist eine Webanwendung zur Verwaltung einer digitalen Bibliothek. Nutzer können Bücher hinzufügen, anzeigen, den Lesestatus ändern und Bücher löschen. Die Anwendung ist vollständig in **Vanilla JavaScript** geschrieben und verwendet **JavaScript-Klassen** zur Modellierung der Bücher. HTML und CSS sorgen für die Benutzeroberfläche.

## 🔧 Funktionen

### `class Book`

Definiert ein Buchobjekt mit folgenden Eigenschaften:

*   `id`: automatisch generierte UUID
*   `title`: Titel des Buches
*   `author`: Autor des Buches
*   `pages`: Seitenanzahl
*   `read`: Boolean, ob das Buch gelesen wurde

#### `toggleReadStatus()`

Instanzmethode, die den `read`-Status eines Buches umschaltet (`true` ⇄ `false`).

### `addBookToLibrary(title, author, pages, read)`

Erstellt ein neues Buch-Objekt und fügt es dem Array `myLibrary` hinzu.

### `displayBooks()`

Rendert alle Bücher aus `myLibrary` im HTML-Element mit der ID `library`. Jedes Buch erhält:

*   Eine Schaltfläche zum Entfernen („Löschen“)
*   Eine Schaltfläche zum Ändern des Lesestatus („Lesestatus ändern“)
*   Beide Buttons sind über ein `data-id`-Attribut mit dem jeweiligen Buchobjekt verknüpft

## 🖥️ Benutzeroberfläche

*   Dialog zur Eingabe neuer Bücher
*   Formular zum Hinzufügen eines Buches
*   Dynamische Anzeige aller Bücher mit Interaktionsmöglichkeiten

## 🧪 Git-Branch-Workflow

Die Umstellung auf Klassen erfolgte in einem separaten Branch:

```bash
git checkout -b refactor/classes
```

Nach Abschluss der Änderungen wurde ein Pull Request erstellt und erfolgreich in den Hauptbranch integriert.

## 📁 Projektstruktur

    my-library/
     ┣ index.html
     ┣ style.css
     ┣ script.js
     ┗ README.md

## 👨‍💻 Mitwirkende

*   Behlül Samil Selcuk – Projektleitung & Entwicklung