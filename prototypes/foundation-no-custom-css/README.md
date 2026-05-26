# Foundation for Sites 6 (No Custom CSS Control Version)

This folder contains a control version of the **AdminPanel X** prototype built using **Foundation for Sites 6**, with **strictly zero custom CSS**, zero `<style>` blocks, and zero inline style attributes.

---

## 1. Purpose of This Control Version

1.  **Exploratory Comparison**: This is **not** the main evaluated Foundation prototype. It serves as a control baseline to compare default, uncustomized framework styling against customized layout parities.
2.  **CSS Necessity Proof**: By stripping away all 327 lines of active custom CSS overrides, we can visually demonstrate how much of the main Foundation prototype’s custom CSS was required to achieve visual parity rather than structural grid layout.
3.  **Visual Parity Benchmark**: It isolates the default out-of-the-box appearance (fonts, buttons, inputs, headers, margins, borders, backgrounds) of Foundation 6.

---

## 2. Visual Deviations (Baseline Defaults vs. Parity Overrides)

Removing custom styling reveals several clear visual deviations from the reference prototype design:

### A. Color & Branding (Indigo Theme)
*   **Default CSS**: Foundation uses its classic blue theme for primary buttons (`#1779ba`) and plain gray elements. Visual accents are missing.
*   **Parity Overrides**: In the main prototype, a `:root` variable block and custom classes overrode these to match the **Indigo `#4f46e5`** palette and modern hover states.

### B. Typography & Fonts
*   **Default CSS**: Reverts to the system font stack (`Helvetica Neue, Helvetica, Roboto, Arial, sans-serif`) with default browser margins. Page titles are very large and lack letter-spacing refinement.
*   **Parity Overrides**: The main prototype imported and applied **Inter / Outfit** with specific weights and refined line-heights.

### C. Spacing & Layout Alignment
*   **Default CSS**: Spacing in headers, cards, and sections is determined solely by default Foundation components. Cards have large default padding, and the margins between sections are uneven. The header lacks the clean bottom border divider.
*   **Parity Overrides**: Overrides specified precise flex margins, section height alignments, and refined borders (`border-bottom: 1px solid #e5e7eb`).

### D. Component Refinement
*   **Default CSS**:
    *   **Navbar**: The `top-bar` has the default solid light-gray background with flat dark link buttons. The brand title has default text alignment.
    *   **Summary Cards**: Cards use standard gray borders and flat corners. The description tags (`<dl>`, `<dt>`, `<dd>`) have default margins, losing the neat inline layout.
    *   **Recent Activity**: The search input has default browser borders, and the list group items (`<li>`) appear as plain, unstyled vertical list texts.
    *   **Contact Form**: Inputs and select boxes use Foundation's default high-contrast gray borders and box-shadow focus rings, rather than modern thin-gray borders with subtle indigo transitions.
*   **Parity Overrides**: Overrides implemented modern card shadows (`box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1)`), thin clean input fields, rounded corners (`border-radius: 0.375rem`), and custom hover transitions.

---

## 3. Structural & Responsive Parity

*   **Responsive Layout Grid**: The layout still scales correctly! The grid cells use standard Foundation XY Grid layout classes (`small-12 medium-6 large-3`), proving that Foundation handles structural column collapsing out of the box (4 columns on desktop, 2 on tablet, 1 on mobile).
*   **Semantic Integrity**: Nav, header, card, form, and footer semantic tags remain identical, preserving identical SEO hooks and structure.
