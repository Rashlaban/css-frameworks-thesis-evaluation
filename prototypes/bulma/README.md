# AdminPanel X - Bulma CSS Prototype

This repository contains the Bulma CSS framework conversion of the standardized `AdminPanel X` reference prototype for comparison.

## How to Open or Preview the Page Locally

Since the implementation is standard, client-side, and static, you can open and preview it locally in any web browser without needing a development server or compiler:

1. Locate the `index.html` file on your filesystem.
2. Double-click `index.html` or drag and drop it into your preferred web browser (e.g. Chrome, Firefox, Safari, Edge).
3. Alternatively, you can use any static server extension such as VS Code's "Live Server" or run a simple local Python server in the directory:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

## Bulma CDN Used

The prototype loads Bulma 1.0.2 via the official jsDelivr CDN link:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
```

## Custom CSS Usage

- **Custom CSS used**: yes
- Custom CSS is kept minimal and is strictly encapsulated inside a `<style>` block.
- It is limited to:
  - Limiting the max-width of the search input in the Recent Activity section to `300px` (as in the reference prototype).
  - Styling the list items in the Recent Activity list with borders and hover transitions for visual parity (since Bulma does not have a dedicated generic hoverable list-group component).
  - Fine-tuning the focus state colors for inputs, select, and textareas to use the matching indigo theme (`#4f46e5`).
  - Small typographic family definitions and custom footer link hover effects.
- It does **not** replace or bypass Bulma’s standard columns grid, box system, form inputs, buttons, responsive behaviors, or navbar layout.

## Bulma Layout & Styling Mechanisms Used

The conversion heavily utilizes standard Bulma 1.0.2 components and CSS variables:
1. **Grid & Columns System**: Uses Bulma’s `.columns` container with `.column`, `.is-multiline`, `.is-half-tablet`, and `.is-one-quarter-desktop` column width modifiers to meet the exact multi-device grid goals (vertical stack on mobile, 2 columns on tablet, 4 columns on desktop).
2. **Navbar**: Leverages Bulma’s `.navbar`, `.navbar-brand`, `.navbar-burger`, `.navbar-menu`, `.navbar-start`, and `.navbar-end` to handle desktop horizontal layouts and responsive mobile menus.
3. **Content Cards**: Uses Bulma's `.box` utility to cleanly box and pad metrics cards.
4. **Form Controls**: Built completely using `.field`, `.control`, `.input`, `.select`, `.textarea`, and `.button` classes to ensure accessible form structures.
5. **Helpers**: Employs Bulma spacing helper classes like `.mb-1`, `.mb-3`, `.mb-4`, `.mt-5`, `.py-5`, `.has-text-grey`, `.has-text-right-tablet`, `.has-text-centered-mobile`, and text size helpers to keep spatial layouts responsive and consistent.

## Minimal JavaScript Toggle

Bulma is completely CSS-only. JavaScript is limited exclusively to a 5-line event listener that toggles the native Bulma `is-active` class on the `.navbar-burger` and `.navbar-menu` to make the responsive navigation menu expand and collapse on mobile viewports.
