import { Button } from "@/components/button";
import { Card } from "@/components/card";

import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";

import { Container } from "@/layouts/container";
import { Grid } from "@/layouts/grid";
import { Stack } from "@/layouts/stack";

export function SkillsPage() {
  return (
    <Container>

      <Grid gap="lg">

        {[1, 2, 3].map((item) => (

          <Card key={item}>

            <Card.Media>
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="Desarrollo de skills"
              />
            </Card.Media>

            <Card.Body>

              <Stack gap="lg">

                <Heading level={3}>
                  Desarrollo de skills
                </Heading>

                <Text>
                  Desarrollo skills para que una inteligencia artificial
                  pueda usar archivos, código de programación y pasos
                  específicos para tareas específicas.
                </Text>

              </Stack>

            </Card.Body>

            <Card.Footer>

              <Button fullWidth>
                Contáctame
              </Button>

            </Card.Footer>

          </Card>

        ))}

      </Grid>

    </Container>
  );
}