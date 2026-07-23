/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],

  rules: {
    /**
     * Tefi utiliza BEM.
     */
    "selector-class-pattern": null,

    /**
     * CSS moderno.
     */
    "color-function-notation": "modern",
    "length-zero-no-unit": true,

    /**
     * Preferimos claridad antes que abreviaturas.
     */
    "declaration-block-no-redundant-longhand-properties": null,

    /**
     * Estas reglas generan demasiado ruido para un Design System moderno.
     */
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "no-descending-specificity": null,
  },
};
