/* ======================================
   IMPORTS
====================================== */


import { Navbar } from "./Navbar";

import { Button } from "../../button";

/* ======================================
   META
====================================== */

export default {

  title: "Navigation/Navbar",

  component: Navbar,

};

/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (

    <Navbar>

      <Navbar.Brand>

        <strong>

          TEFI

        </strong>

      </Navbar.Brand>

      <Navbar.Navigation>

        <Button
          variant="ghost"
        >

          Inicio

        </Button>

        <Button
          variant="ghost"
        >

          Productos

        </Button>

        <Button
          variant="ghost"
        >

          Contacto

        </Button>

      </Navbar.Navigation>

      <Navbar.Actions>

        <Button
          variant="secondary"
        >

          Registrarse

        </Button>

        <Button
          variant="primary"
        >

          Iniciar Sesion

        </Button>

      </Navbar.Actions>

    </Navbar>

  );

}