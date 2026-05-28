/* ======================================
   IMPORTS
====================================== */

import "./form-section.css";

import type {
  FormSectionProps,
} from "./form-section.types";

/* ======================================
   FORM SECTION
====================================== */

export function FormSection({
  title,

  description,

  children,

  className = "",

  ...rest
}: FormSectionProps) {

  /* ======================================
     CLASSES
  ====================================== */

  const classes = [
    "form-section",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ======================================
     RENDER
  ====================================== */

  return (
    <section
      className={classes}

      {...rest}
    >

      {(title || description) && (
        <div className="form-section__header">

          {title && (
            <h2 className="form-section__title">
              {title}
            </h2>
          )}

          {description && (
            <p className="form-section__description">
              {description}
            </p>
          )}

        </div>
      )}

      <div className="form-section__content">
        {children}
      </div>

    </section>
  );
}