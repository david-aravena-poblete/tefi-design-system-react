/* ======================================
   IMPORTS
====================================== */

import { Children, isValidElement } from "react";

import clsx from "clsx";

import "./navbar.css";

import { Container } from "@/layouts/container";

import type { NavbarProps, NavbarSectionProps } from "./navbar.types";

/* ======================================
   NAVBAR
====================================== */

export function Navbar({ children, className, ...props }: NavbarProps) {
  let brand = null;
  let navigation = null;
  let actions = null;

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      return;
    }

    if (child.type === Navbar.Brand) {
      brand = child;
    }

    if (child.type === Navbar.Navigation) {
      navigation = child;
    }

    if (child.type === Navbar.Actions) {
      actions = child;
    }
  });

  return (
    <header className={clsx("navbar", className)} {...props}>
      <Container>
        <div className="navbar__content">
          {brand}

          {navigation}

          {actions}
        </div>
      </Container>
    </header>
  );
}

/* ======================================
   BRAND
====================================== */

function Brand({ children, className, ...props }: NavbarSectionProps) {
  return (
    <div className={clsx("navbar__brand", className)} {...props}>
      <div className="navbar__brand-content">
        {children}
      </div>
    </div>
  );
}

/* ======================================
   NAVIGATION
====================================== */

function Navigation({ children, className, ...props }: NavbarSectionProps) {
  return (
    <nav
      className={clsx("navbar__navigation", className)}
      {...props}
    >
      {children}
    </nav>
  );
}

/* ======================================
   ACTIONS
====================================== */

function Actions({ children, className, ...props }: NavbarSectionProps) {
  return (
    <div className={clsx("navbar__actions", className)} {...props}>
      <div className="navbar__actions-content">
        {children}
      </div>
    </div>
  );
}

/* ======================================
   COMPOUND COMPONENTS
====================================== */

Navbar.Brand = Brand;
Navbar.Navigation = Navigation;
Navbar.Actions = Actions;