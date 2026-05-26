# Foundation for Sites 6 Prototype - AdminPanel X

This project is a high-fidelity implementation of the **AdminPanel X** reference prototype using **Foundation for Sites 6**. It has been developed as part of a bachelor thesis comparing popular CSS frameworks under standardized layout, content, and responsiveness constraints.

## How to Preview Locally

Since this is a static, self-contained HTML implementation, no local build system or server setup is required. You can preview the page in one of the following ways:

1. **Direct file open**:
   - Double-click `index.html` in your file explorer to open it directly in any modern web browser.
   - Alternatively, drag and drop the `index.html` file into an open browser window.

2. **Using a static local dev server**:
   - If you have Node.js installed, you can start a simple local server using `npx`:
     ```bash
     npx serve .
     ```
     Or using Python:
     ```bash
     python -m http.server 8000
     ```
   - Open your browser and navigate to `http://localhost:8000` or the URL printed by the server tool.

---

## Foundation 6 CDN Files & Dependencies

This prototype loads Foundation for Sites 6 and its required dependencies directly from JSDelivr CDN:

*   **Stylesheets**:
    *   `foundation.min.css` (v6.9.0): Contains the global styles, components, utility classes, and XY Grid framework.
*   **Javascripts**:
    *   `jquery.min.js` (v3.7.1): Core dependency for Foundation dynamic plugins.
    *   `what-input.min.js` (v5.2.12): Focus tracking utility required for Foundation accessibility patterns.
    *   `foundation.min.js` (v6.9.0): Compiled JS plugins for dynamic/responsive navigation.

---

## Custom CSS Declaration

*   **Custom CSS required**: **Yes**
*   **Rationale**: Minor custom CSS overrides were added in a single clearly marked `<style>` block:
    ```css
    /* Framework-specific custom CSS required for visual equivalence */
    ```
    This CSS does not replace or bypass Foundation's XY Grid, responsive navbar, cards, forms, or button systems. Instead, it aligns details like background colors, borders, shadows, focus rings, hover transition colors, and active borders to ensure pixel-perfect comparability with the reference vanilla CSS design.

---

## Framework Integration Notes

This prototype utilizes the following idiomatic Foundation for Sites 6 features:

1. **Grid & Layout**:
   *   Implemented Foundation's **XY Grid** framework (`grid-container`, `grid-x`, `grid-margin-x`, `cell`) for general page structure and form layout.
   *   Utilized Foundation's responsive column classes on the Summary Cards and Quick Contact form to seamlessly transition between:
       *   `small-12` (1 column full-width on mobile / `< 640px`)
       *   `medium-6` (2 columns on tablet / `640px` to `1023px`)
       *   `large-3` (4 columns on desktop / `>= 1024px`)

2. **Navigation Area**:
   *   Utilized the Foundation **Top Bar** component (`top-bar`, `top-bar-left`, `top-bar-right`) integrated with dynamic responsive toggle attributes (`data-responsive-toggle="responsive-menu"`, `data-toggle="responsive-menu"`).
   *   Supports touch/click hamburger interactions on mobile and transforms into an inline horizontal navbar on tablet/desktop.

3. **Content Containers**:
   *   Leveraged Foundation's **Card** component (`card`, `card-section`, `box-header`) to structure the summary cards, recent activity timeline, and quick contact form container.

4. **Forms**:
   *   Re-styled standard Foundation form inputs, selects, and textareas using classes, connected explicitly to `<label>` tags with standard `for` accessibility hooks.

5. **Buttons**:
   *   Used Foundation's standard `.button` element wrapper along with color modifiers (`primary`, `secondary`) to match primary theme colors and interactive border behaviors.

---

## JavaScript Dependency Note

Foundation for Sites utilizes standard dynamic bindings (via jQuery) to manage interactive behaviors. The responsive mobile top-bar menu uses Foundation's responsive toggle API, which triggers via the click handler on the hamburger button on screens smaller than 640px. No custom or framework-unrelated JS scripts were introduced.
