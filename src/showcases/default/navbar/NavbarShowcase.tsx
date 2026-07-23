import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";

import { Bar } from "@/layouts/bar";
import { Region } from "@/layouts/region";

export function NavbarShowcase() {
  return (
    <Bar>
      <Region>
        <Avatar />

        <Heading>Tefi</Heading>

        <Text size="sm">Design System</Text>
      </Region>

      <Region>
        <Button variant="ghost">Inicio</Button>

        <Button variant="ghost">Componentes</Button>

        <Button variant="ghost">Documentación</Button>

        <Button>Comenzar</Button>
      </Region>
    </Bar>
  );
}