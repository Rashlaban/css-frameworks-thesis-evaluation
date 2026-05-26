
---

## `prompts/integration-validation-prompt.md`

```markdown
# Front-End Framework Integration Validation Prompt

Create lightweight integration validation fragments for React, Angular, and Vue across Tailwind CSS, Bootstrap, Bulma, and Foundation.

## Goal

Validate how the selected CSS frameworks integrate into component-based front-end development environments. Do not create full applications. Create small, readable component fragments that can be used as thesis evidence.

## CSS Frameworks

Create fragments for:

1. Tailwind CSS
2. Bootstrap 5.3
3. Bulma
4. Foundation for Sites 6

## Front-End Environments

Create fragments for:

1. React
2. Angular
3. Vue

## Components Required

For each CSS framework and each front-end environment, create:

1. SummaryCard
2. FormInput
3. ButtonGroup
4. NavStateExample

## Shared Content Requirements

Use the same content in every framework and front-end environment.

### SummaryCard

- Label: Active Users
- Value: 1,248

### FormInput

- Label: Full Name
- Placeholder: Enter full name

### ButtonGroup

- Buttons:
  - Submit
  - Cancel

### NavStateExample

- Brand title: AdminPanel X
- Navigation items:
  - Dashboard
  - Reports
  - Users
  - Settings
- Action button:
  - Create New

## React Requirements

For each CSS framework, create:

- `SummaryCard.jsx`
- `FormInput.jsx`
- `ButtonGroup.jsx`
- `NavStateExample.jsx`

Use:
- functional React components;
- `className` for static classes;
- conditional class expressions for active states;
- minimal JavaScript logic only where needed.

## Angular Requirements

For each CSS framework, create:

- `summary-card.component.html`
- `summary-card.component.ts`
- `form-input.component.html`
- `form-input.component.ts`
- `button-group.component.html`
- `button-group.component.ts`
- `nav-state-example.component.html`
- `nav-state-example.component.ts`

Use:
- standalone Angular components;
- `class` for static classes;
- `[ngClass]` or `[class.active]` for conditional classes;
- minimal TypeScript logic only where needed.

## Vue Requirements

For each CSS framework, create:

- `SummaryCard.vue`
- `FormInput.vue`
- `ButtonGroup.vue`
- `NavStateExample.vue`

Use:
- Vue single-file component structure;
- `class` for static classes;
- `:class` binding for conditional styling;
- minimal script logic only where needed.

## Constraints

- Do not create full React, Angular, or Vue applications.
- Do not add unnecessary boilerplate.
- Do not change shared content between frameworks.
- Keep fragments readable and suitable for thesis repository evidence.
- Focus on how CSS framework classes appear inside component-based files.