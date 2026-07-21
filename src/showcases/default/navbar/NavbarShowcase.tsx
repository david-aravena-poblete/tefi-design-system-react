import { Avatar } from "../../../components/avatar";
import { Button } from "../../../components/button";
import { Navbar } from "../../../components/navigation/navbar";

import { Heading } from "../../../components/typography/heading";

export function NavbarShowcase() {
  return (
    <Navbar>
      <Navbar.Brand>
        <Avatar>TD</Avatar>

        <Heading level={5}>Design System Tefi</Heading>
      </Navbar.Brand>

      <Navbar.Navigation>
        <Button variant="link">Home</Button>

        <Button variant="link">Components</Button>

        <Button variant="link">Documentation</Button>
      </Navbar.Navigation>

      <Navbar.Actions>
        <Button variant="ghost">Sign In</Button>

        <Button>Get Started</Button>
      </Navbar.Actions>
    </Navbar>
  );
}
