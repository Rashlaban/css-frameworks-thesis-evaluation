# Bootstrap 5.3 Prototype - AdminPanel X

This repository contains the Bootstrap 5.3 standardized implementation of the `AdminPanel X` prototype, converted from the vanilla HTML/CSS reference code. It serves as a visual and functional replica for standardized CSS framework comparisons (comparing Bootstrap 5.3 against Tailwind CSS, Bulma, and Foundation).

## How to Open or Preview the Page Locally

Since the implementation is entirely static, you can open and preview it in any modern browser without needing to run a build step or server:

1. **Direct File System Access**: 
   Double-click the `index.html` file in your operating system's file manager to open it directly in your default browser.
2. **Local HTTP Server (Optional)**:
   If you prefer running a local server to avoid `file://` protocol limitations:
   - Python: Run `python -m http.server 8000` in this directory and open `http://localhost:8000`.
   - Node.js: Run `npx http-server .` and open the URL provided in your console.

## Bootstrap CDN Files Used

The prototype loads Bootstrap 5.3 statically from the official jsDelivr CDN:

* **Bootstrap 5.3.3 CSS**:
  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  ```
* **Bootstrap 5.3.3 JavaScript Bundle**:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  ```
  *(Note: JavaScript is limited exclusively to handling the responsive navbar collapse toggle behavior.)*

## Custom CSS Usage and Purpose

Custom CSS is enabled and kept minimal. It is placed inside a clearly marked `<style>` block:
`/* Framework-specific custom CSS required for visual parity under the shared prototype requirements */`

### Purpose of Custom CSS
1. **Indigo Color System Overrides**: Overrides `--bs-primary`, `--bs-primary-rgb`, and button properties to match the reference prototype's primary Indigo color (`#4f46e5` and hover `#4338ca`).
2. **Interactive Navbar Border States**: Implements the desktop bottom-border indicators and mobile left-border indicators with background highlights on active/hovered links.
3. **Minor Visual Parity Adjustments**: Includes custom shadow values, a custom secondary white button style matching vanilla `.btn-secondary`, precise button spacing/padding, and container width alignment.

*Standard layout, navbar toggling, responsive grid systems, card, form, and spacing behaviors are controlled entirely by Bootstrap 5.3 classes, not replaced by custom CSS.*

## Bootstrap Layout Mechanisms

The implementation relies on documented standard Bootstrap components and utilities:
* **Grid & Columns**: Uses `.row` and responsive column sizing classes (`col-12 col-md-6 col-lg-3`) for layout and card responsiveness.
* **Containers**: Uses `.container-xl` for page width alignment.
* **Navbar**: Utilizes standard `.navbar`, `.navbar-expand-sm`, `.navbar-collapse`, and `.navbar-toggler` classes for seamless responsive collapse.
* **Cards & Lists**: Uses `.card` and `.list-group` for layout cards and recent activity groups.
* **Forms**: Implements standard `.form-control`, `.form-select`, and `.form-label` to style contact form elements.
