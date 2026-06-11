# CSS Frameworks Thesis Evaluation

This repository contains implementation artefacts and prompt documentation prepared for the bachelor thesis: **"“Evaluation of CSS Frameworks in Modern Web Design and Development"**.

The repository supports the implementation part of the thesis by providing the standardized reference prototype, equivalent CSS framework implementations, front-end integration validation fragments, and prompts used during Antigravity-assisted implementation.

The compared CSS frameworks are:

- Tailwind CSS
- Bootstrap
- Bulma
- Foundation

The standardized prototype is based on the **AdminPanel X** layout and was used to compare visual parity, responsive behaviour, implementation structure, customization effort, and integration with React, Angular, and Vue.

---

## Repository Structure

```text
css-frameworks-thesis-evaluation/
│
├── README.md
│
├── prototypes/
│   ├── vanilla/
│   │   └── vanilla.html
│   │
│   ├── tailwind/
│   │   ├── index.html
│   │   ├── input.css
│   │   ├── tailwind.config.js
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── dist/
│   │   │   └── output.css
│   │   └── README.md
│   │
│   ├── bootstrap/
│   │   ├── index.html
│   │   └── README.md
│   │
│   ├── bulma/
│   │   ├── index.html
│   │   └── README.md
│   │
│   ├── foundation/
│   │   ├── index.html
│   │   └── README.md
│   │
│   └── foundation-no-custom-css/
│       ├── index.html
│       └── README.md
│
├── integration-validation/
│   ├── react/
│   ├── angular/
│   ├── vue/
│   └── README.md
│
└── prompts/
    ├── README.md
    ├── tailwind-prompt.md
    ├── bootstrap-prompt.md
    ├── bulma-prompt.md
    ├── foundation-prompt.md
    ├── foundation-no-custom-css-prompt.md
    └── integration-validation-prompt.md
```

## How to Launch the Visual Prototypes

To inspect the implementations locally, navigate to the repository root and start a static server.

```bash
npx http-server -p 8080
```

Or:

```bash
python -m http.server 8080
```

Then open the following addresses in a browser:

*   Vanilla reference layout: [http://localhost:8080/prototypes/vanilla/vanilla.html](http://localhost:8080/prototypes/vanilla/vanilla.html)
*   Tailwind CSS: [http://localhost:8080/prototypes/tailwind/index.html](http://localhost:8080/prototypes/tailwind/index.html)
*   Bootstrap: [http://localhost:8080/prototypes/bootstrap/index.html](http://localhost:8080/prototypes/bootstrap/index.html)
*   Bulma: [http://localhost:8080/prototypes/bulma/index.html](http://localhost:8080/prototypes/bulma/index.html)
*   Foundation: [http://localhost:8080/prototypes/foundation/index.html](http://localhost:8080/prototypes/foundation/index.html)
*   Foundation no-custom-CSS control version: [http://localhost:8080/prototypes/foundation-no-custom-css/index.html](http://localhost:8080/prototypes/foundation-no-custom-css/index.html)

## Repository Purpose

This repository is used as a digital appendix for the bachelor thesis. It documents:

- the standardized vanilla reference prototype;
- the Tailwind CSS, Bootstrap, Bulma, and Foundation implementations;
- the Foundation no-custom-CSS control version;
- React, Angular, and Vue integration validation fragments;
- prompts used during Antigravity-assisted implementation.

The measurement results discussed in the thesis were collected and summarized manually by the author based on these implementations.

## Antigravity Usage Note

Antigravity was used as an implementation support tool during prototype development. The generated outputs were reviewed, corrected, and evaluated by the author. The final measurements, interpretation, comparison, and thesis conclusions were prepared by the author.

## Academic Use

These materials are provided for academic transparency and verification of the implementation artefacts used in the bachelor thesis.
