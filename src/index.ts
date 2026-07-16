"use client";

/* ======================================
   FOUNDATIONS
====================================== */

import "./foundations/tokens.css";

import "./foundations/themes/light.css";
import "./foundations/themes/dark.css";

import "./foundations/brands/default.css";
import "./foundations/brands/daravena.css";

import "./foundations/states.css";
import "./foundations/base.css";
import "./foundations/typography.css";


/* ======================================
   CONSTANTS
====================================== */

export {
  STATES as FIELD_STATES,
  SIZES as FIELD_SIZES,
} from "./shared/constants";


/* ======================================
   PRIMITIVES
====================================== */

export { Spinner } from "./primitives/spinner";
export { Icon } from "./primitives/icon";
export { Control } from "./primitives/control";
export { Image } from "./primitives/image";
export { Skeleton } from "./primitives/skeleton";


/* ======================================
   COMPONENTS
====================================== */

export { Avatar } from "./components/avatar";
export { Button } from "./components/button";
export { Card } from "./components/card";
export { Chip } from "./components/chip";
export { Divider } from "./components/divider";
export { QuantityStepper } from "./components/quantity-stepper";
export { Typewriter } from "./components/typewriter";

export {
  Heading,
  Text,
} from "./components/typography";


/* ======================================
   FIELD
====================================== */

export {
  Field,
  Label,
  HelperText,
  ErrorMessage,
} from "./components/field";


/* ======================================
   INPUT
====================================== */

export {
  Input,
  NumberField,
  PasswordField,
  SearchField,
} from "./components/input";


/* ======================================
   TEXTAREA
====================================== */

export {
  Textarea,
} from "./components/textarea";


/* ======================================
   FORM
====================================== */

export {
  Form,
  FormActions,
  FormField,
  FormRow,
  FormSection,
} from "./components/form";


/* ======================================
   OVERLAY
====================================== */

export {
  FloatingSurface,
} from "./components/overlay";


/* ======================================
   SELECTION
====================================== */

export {
  Checkbox,
  CheckboxGroup,
  Combobox,
  OptionItem,
  OptionList,
  Radio,
  Select,
  Switch,
} from "./components/selection";


/* ======================================
   LAYOUTS
====================================== */

export {
  Container,
  Grid,
  Inline,
  Section,
  Stack,
} from "./layouts";


/* ======================================
   PROVIDERS
====================================== */

export {
  DesignSystemProvider,
} from "./providers/design-system-provider";


/* ======================================
   TYPES
====================================== */

export type {
  Theme,
  Brand,
} from "./shared/design-system.types";