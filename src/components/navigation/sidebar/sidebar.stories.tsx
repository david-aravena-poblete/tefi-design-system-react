import React from "react";

import { Sidebar } from "./Sidebar";
import { Heading } from "../../typography/heading";
import { Button } from "../../button";

/* ======================================
   META
====================================== */

export default {

  title: "Navigation/Sidebar",

  component: Sidebar,

};

/* ======================================
   DEFAULT
====================================== */

export function Default() {

  return (

    <Sidebar>

      <Sidebar.Header>

        <Heading level={2}>

          Tefi Design System

        </Heading>

      </Sidebar.Header>

      <Sidebar.Content>

        <Sidebar.Section
          heading="General"
        >

          <Sidebar.Item>

            Dashboard

          </Sidebar.Item>

          <Sidebar.Item>

            Contactos

          </Sidebar.Item>

          <Sidebar.Item>

            Proyectos

          </Sidebar.Item>

        </Sidebar.Section>

        <Sidebar.Section
          heading="Administración"
        >

          <Sidebar.Group
            heading="Usuarios"
          >

            <Sidebar.Item>

              Clientes

            </Sidebar.Item>

            <Sidebar.Item>

              Equipos

            </Sidebar.Item>

            <Sidebar.Item>

              Permisos

            </Sidebar.Item>

          </Sidebar.Group>

          <Sidebar.Group
            heading="Configuración"
          >

            <Sidebar.Item>

              General

            </Sidebar.Item>

            <Sidebar.Item disabled>

              Seguridad

            </Sidebar.Item>

          </Sidebar.Group>

        </Sidebar.Section>

      </Sidebar.Content>

      <Sidebar.Footer>

        <Button
          variant="secondary"
          fullWidth
        >

          Cerrar sesión

        </Button>

      </Sidebar.Footer>

    </Sidebar>

  );

}

/* ======================================
   LONG NAVIGATION
====================================== */

export function LongNavigation() {

  return (

    <Sidebar>

      <Sidebar.Header>

        <Heading level={2}>

          Tefi Design System

        </Heading>

      </Sidebar.Header>

      <Sidebar.Content>

        <Sidebar.Section
          heading="General"
        >

          {Array.from({ length: 30 }).map((_, index) => (

            <Sidebar.Item
              key={index}
              active={index === 0}
            >

              Elemento {index + 1}

            </Sidebar.Item>

          ))}

        </Sidebar.Section>

      </Sidebar.Content>

      <Sidebar.Footer>

        <Button
          variant="secondary"
          fullWidth
        >

          Cerrar sesión

        </Button>

      </Sidebar.Footer>

    </Sidebar>

  );

}

/* ======================================
   WITHOUT GROUPS
====================================== */

export function WithoutGroups() {

  return (

    <Sidebar>

      <Sidebar.Header>

        <Heading level={2}>

          Tefi Design System

        </Heading>

      </Sidebar.Header>

      <Sidebar.Content>

        <Sidebar.Section
          heading="General"
        >

          <Sidebar.Item active>

            Dashboard

          </Sidebar.Item>

          <Sidebar.Item>

            Contactos

          </Sidebar.Item>

          <Sidebar.Item>

            Proyectos

          </Sidebar.Item>

        </Sidebar.Section>

        <Sidebar.Section
          heading="Cuenta"
        >

          <Sidebar.Item>

            Perfil

          </Sidebar.Item>

          <Sidebar.Item>

            Seguridad

          </Sidebar.Item>

        </Sidebar.Section>

      </Sidebar.Content>

      <Sidebar.Footer>

        <Button
          variant="secondary"
          fullWidth
        >

          Cerrar sesión

        </Button>

      </Sidebar.Footer>

    </Sidebar>

  );

}