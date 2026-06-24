import {
  Card,
  Heading,
  Stack,
  Text,
  Typewriter,
} from "@tefi/design-system";

export function HeroShowcase() {

  const quoteText =
    "Mi filosofía es que la inteligencia debe usarse solo para lo que el usuario sea capaz de enseñarle.";
   
    console.log(Card);
    console.log(Card.Body);
  
    return (

    <Stack gap="xl">

      <Stack gap="md">

        <Heading level={1}>
          daravena
        </Heading>

        <Text>
          FINE TUNING · RAG · SKILLS ·
          SPEC DRIVEN DEVELOPMENT
        </Text>

      </Stack>

      <Card>

        <Card.Body>

          <Typewriter
            text={quoteText}
          />

        </Card.Body>

      </Card>

    </Stack>

  );

}