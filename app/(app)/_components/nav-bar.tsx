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
          <Link href="#services">Usługi</Link>
        </NavBarItem>
        <NavBarItem>
          <Link href="#contact">Kontakt</Link>
        </NavBarItem>
      </NavBarContent>

      <Flipper asChild>
        <NavBarAction>
          <span>{"Napisz do nas"}</span>

          <FlipperContent className="h-6 w-6" itemClassName="h-5 w-5">
            <External />
          </FlipperContent>
        </NavBarAction>
      </Flipper>
    </NavBarRoot>
  );
}
