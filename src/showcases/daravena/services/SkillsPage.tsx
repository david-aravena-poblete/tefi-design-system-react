import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { Card } from "@/components/card";

import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";

import { Image } from "@/primitives/image";
import { Skeleton } from "@/primitives/skeleton";

import { Container } from "@/layouts/container";
import { Grid } from "@/layouts/grid";
import { Stack } from "@/layouts/stack";

export function SkillsPage() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer =
      setTimeout(() => {
        setLoading(false);
      }, 1000);

    return () =>
      clearTimeout(timer);

  }, []);

  return (
    <Container>

      <Grid gap="lg">

        {[1, 2, 3].map((item) => (

          <Card key={item}>

            <Card.Media>

              {loading ? (

                <Skeleton
                  ratio="16:9"
                />

              ) : (

                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200"
                  alt="Desarrollo de skills"
                  ratio="16:9"
                />

              )}

            </Card.Media>

            <Card.Body>

              {loading ? (

                <Stack gap="lg">

                  <Skeleton
                    variant="heading"
                  />

                  <Skeleton
                    variant="text"
                  />

                </Stack>

              ) : (

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

              )}

            </Card.Body>

            <Card.Footer>

              {loading ? (

                <Skeleton
                  variant="button"
                />

              ) : (

                <Button fullWidth>
                  Contáctame
                </Button>

              )}

            </Card.Footer>

          </Card>

        ))}

      </Grid>

    </Container>
  );
}