import { Form } from "@/components/form/form";

import { Button } from "@/components/button";

import { FormField } from "@/components/form/form-field";

import { Input } from "@/components/input";
import { Label } from "@/components/field/label";

/* ======================================
   META
====================================== */

export default {
  title: "Components/Form/Form",
  component: Form,
};

/* ======================================
   DEFAULT
====================================== */

export function Default() {
  return (
    <Form>
      <FormField>
        <Label>Nombre</Label>

        <Input placeholder="Escribe tu nombre" />
      </FormField>

      <Button
        type="submit"
        style={{
          marginTop: "16px",
        }}
      >
        Enviar
      </Button>
    </Form>
  );
}
