"use client";

import Link from "next/link";

import External from "@/assets/icons/external.svg";
import { Flipper, FlipperContent } from "@/components/animation/flipper";
import {
  NavBarAction,
  NavBarContent,
  NavBarHeader,
  NavBarItem,
  NavBar as NavBarRoot,
  NavBarTrigger,
} from "@/components/nav-bar";

import { AppLogo } from "./logo";

export function NavBar() {
  return (
    <NavBarRoot>
      <NavBarHeader>
        <Link href="/" className="block h-full">
          <AppLogo className="h-full" />
        </Link>

        <NavBarTrigger />
      </NavBarHeader>

      <NavBarContent>
        <NavBarItem>
          <Link href="#why-us">Dlaczego my</Link>
        </NavBarItem>
        <NavBarItem>
          <Link href="#mission">Misja</Link>
        </NavBarItem>
        <NavBarItem>
          <Link href="#works">Realizacje</Link>
        </NavBarItem>
        <NavBarItem>
          <Link href="#services">Oferta</Link>
        </NavBarItem>
        <NavBarItem>
          <Link href="#contact">Kontakt</Link>
        </NavBarItem>
      </NavBarContent>


    </NavBarRoot>
  );
}
