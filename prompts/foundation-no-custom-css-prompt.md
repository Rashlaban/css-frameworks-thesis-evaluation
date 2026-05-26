# Foundation No-Custom-CSS Control Variant Prompt

Convert the provided vanilla reference prototype into a Foundation for Sites 6 implementation without custom CSS for a bachelor thesis comparison of CSS frameworks.

## Goal

Reproduce the same prototype structure as closely as possible using only standard Foundation for Sites 6 classes. This version is a control variant used to evaluate what Foundation can reproduce without custom CSS.

## Preserve

- Same section order: navigation, header, summary cards, recent activity, form, footer.
- Same text content.
- Same number of cards, form fields, buttons, and links.
- Same semantic structure where possible: `nav`, `header`, `main`, `section`, `form`, `footer`.
- Same responsive goals:
  - mobile: stacked layout;
  - tablet: two-column card layout where appropriate;
  - desktop: four-column card layout.

## Measurement Hooks

Add the following attributes to the relevant sections:

- `data-section="navigation"`
- `data-section="header"`
- `data-section="summary-cards"`
- `data-section="activity"`
- `data-section="form"`
- `data-section="footer"`

## Strict Constraints

- Do not use custom CSS.
- Do not use `<style>` blocks.
- Do not use inline `style` attributes.
- Do not create an external custom CSS file.
- Use only Foundation classes and semantic HTML.
- Do not add external icons, images, animations, or extra libraries.
- Do not change text content.
- Do not add or remove sections.
- Keep JavaScript limited to required Foundation menu/top-bar behaviour if needed.

## Output

Return one complete standalone HTML file.

Add this comment at the top:

```html
<!--
Implementation: Foundation for Sites 6 no-custom-CSS control
Reference prototype: AdminPanel X
Purpose: standardized CSS framework comparison control variant
Custom CSS used: no
JavaScript used: Foundation menu/top-bar behaviour only if required
Sections preserved: navigation, header, summary-cards, activity, form, footer
-->