import React from "react";

import { Form } from "./Form";

import { Button } from "../../button";

import { FormField } from "../form-field";

import { Input } from "../../field/input";
import { Label } from "../../field/label";

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

        <Label>
          Nombre
        </Label>

        <Input
          placeholder="Escribe tu nombre"
        />

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