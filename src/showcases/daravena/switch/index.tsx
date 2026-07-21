"use client";

import { useState } from "react";

import { Icon } from "../../../primitives/icon";
import { Inline } from "../../../layouts/inline";
import { Switch } from "../../../components/selection/switch";

export default function SwitchShowcase() {
  const [dark, setDark] = useState(false);

  return (
    <Inline align="center" gap="md">
      <Switch
        size="lg"
        checked={dark}
        thumb={<Icon name={dark ? "moon" : "sun"} size="sm" />}
        onChange={(event) => setDark(event.target.checked)}
      />
    </Inline>
  );
}
