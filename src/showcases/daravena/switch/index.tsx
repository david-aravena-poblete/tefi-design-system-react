/* ======================================
   IMPORTS
====================================== */

import { useState } from "react";

import { Switch } from "@/components/selection/switch";
import { Icon } from "@/primitives/icon";

/* ======================================
   SHOWCASE
====================================== */

export default function SwitchShowcase() {
  const [dark, setDark] = useState(false);

  return (
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
        thumb={<Icon name={dark ? "moon" : "sun"} size="sm" />}
        onChange={(event) => setDark(event.target.checked)}
      />
    </div>
  );
}
