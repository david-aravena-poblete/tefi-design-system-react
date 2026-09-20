/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import { DesignSystemProvider } from "@/providers/design-system-provider";
import { Switch } from "@/components/selection/switch";
import { Icon } from "@/primitives/icon";


/* ======================================
   SHOWCASE
====================================== */

export default function SwitchShowcase() {
  const [dark, setDark] = useState(false);
  const [brand, setBrand] = useState<
    "default" | "tefi" | "daravena"
  >("default");

  const theme = dark ? "dark" : "light";

  return (
    <DesignSystemProvider
      theme={theme}
      brand={brand}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-lg)",
          padding: "var(--space-xl)",
          background: "var(--color-background)",
          color: "var(--color-text-primary)",
          minHeight: "300px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-md)",
          }}
        >
          <Switch
            size="lg"
            checked={dark}
            thumb={
              <Icon
                name={dark ? "moon" : "sun"}
                size="sm"
              />
            }
            onChange={(event) =>
              setDark(event.target.checked)
            }
          />

          <span>
            {theme}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "var(--space-sm)",
          }}
        >
          {(["default", "tefi", "daravena"] as const).map(
            (option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBrand(option)}
                style={{
                  padding: "var(--space-sm) var(--space-md)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  background:
                    brand === option
                      ? "var(--color-primary)"
                      : "var(--color-surface)",
                  color:
                    brand === option
                      ? "var(--color-text-inverse)"
                      : "var(--color-text-primary)",
                  cursor: "pointer",
                }}
              >
                {option}
              </button>
            ),
          )}
        </div>

        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "var(--radius-lg)",
            background: "var(--color-primary)",
          }}
        />

        <div
          style={{
            color: "var(--color-primary)",
            fontWeight: "var(--font-weight-semibold)",
          }}
        >
          Primary: {brand}
        </div>
      </div>
    </DesignSystemProvider>
  );
}