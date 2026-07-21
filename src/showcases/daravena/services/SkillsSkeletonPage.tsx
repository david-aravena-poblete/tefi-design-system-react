/* ======================================
   IMPORTS
====================================== */

import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { Card } from "@/components/card";

import { Heading, Text } from "@/components/typography";

import { Image } from "@/primitives/image";

import { Container } from "@/layouts/container";
import { Grid } from "@/layouts/grid";
import { Stack } from "@/layouts/stack";

/* ======================================
     SKILLS PAGE
  ====================================== */

export function SkillsSkeletonPage() {
  /* ======================================
       STATE
    ====================================== */

  const [loading, setLoading] = useState(true);

  /* ======================================
       EFFECTS
    ====================================== */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  /* ======================================
       RENDER
    ====================================== */

  return (
    <Container>
      <Grid gap="lg">
        {/* ======================================
              CARD 1
          ====================================== */}

        <Card>
          <Card.Media>
            <Image
              skeleton={loading}
              src="https://images.unsplash.com/photo-1658243762577-d781c4726412?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Spec Driven Development"
              aspect="16:9"
            />
          </Card.Media>

          <Card.Body>
            <Stack gap="lg">
              <Heading skeleton={loading} as="h3">
                Spec Driven Development
              </Heading>

              <Text skeleton={loading} expandable lines={4}>
                Documento y organizo toda la información de tu proyecto para que una IA la use como
                memoria de largo plazo. Así podrá trabajar todos los días bajo los mismos criterios,
                prácticas, ideas y decisiones. Técnicamente, estructuro y desarrollo contexto para
                inteligencia artificial mediante la metodología Spec-Driven Development.
              </Text>
            </Stack>
          </Card.Body>

          <Card.Footer>
            <Button skeleton={loading} fullWidth>
              Contáctame
            </Button>
          </Card.Footer>
        </Card>

        {/* ======================================
              CARD 2
          ====================================== */}

        <Card>
          <Card.Media>
            <Image
              skeleton={loading}
              src="https://images.unsplash.com/photo-1658243762588-bbe78d88f4aa?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Fine Tuning"
              aspect="16:9"
            />
          </Card.Media>

          <Card.Body>
            <Stack gap="lg">
              <Heading skeleton={loading} as="h3">
                Fine Tuning
              </Heading>

              <Text skeleton={loading} expandable lines={4}>
                El Fine-Tuning me permite enseñarle a una IA las distintas situaciones que pueden
                producirse en tu proyecto, para que sea capaz de reconocer intenciones, razonar y
                ejecutar acciones o utilizar software según el contexto. Técnicamente, preparo
                ejemplos de tus tareas y métodos de trabajo para enseñárselos a una IA, de modo que
                aprenda los patrones detrás de tus decisiones y pueda reproducirlos de forma
                consistente en situaciones similares.
              </Text>
            </Stack>
          </Card.Body>

          <Card.Footer>
            <Button skeleton={loading} fullWidth>
              Contáctame
            </Button>
          </Card.Footer>
        </Card>

        {/* ======================================
              CARD 3
          ====================================== */}

        <Card>
          <Card.Media>
            <Image
              skeleton={loading}
              src="https://images.unsplash.com/photo-1658243766433-0144532e850c?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Desarrollo de Skills"
              aspect="16:9"
            />
          </Card.Media>

          <Card.Body>
            <Stack gap="lg">
              <Heading skeleton={loading} as="h3">
                Desarrollo de Skills
              </Heading>

              <Text skeleton={loading} expandable lines={4}>
                Desarrollo skills para que una inteligencia artificial pueda utilizar archivos,
                código de programación y procesos específicos para resolver tareas concretas. Las
                respuestas tendrán siempre una estructura consistente y podrán incorporar tus
                propios archivos y conocimientos según el contexto en que se ejecute la skill.
                Técnicamente, aíslo y transformo en componentes reutilizables las prácticas,
                criterios y patrones de tu proyecto para que una IA genere resultados consistentes y
                alineados con tu forma de trabajar.
              </Text>
            </Stack>
          </Card.Body>

          <Card.Footer>
            <Button skeleton={loading} fullWidth>
              Contáctame
            </Button>
          </Card.Footer>
        </Card>
      </Grid>
    </Container>
  );
}
