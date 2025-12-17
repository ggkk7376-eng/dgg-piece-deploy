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

        <NavBarTrigger className="absolute right-0" />
      </NavBarHeader>

      <NavBarContent>
        <NavBarItem>
          <Link href="#why-us">Why Us</Link>
        </NavBarItem>
        <NavBarItem>
          <Link href="#mission">Mission</Link>
        </NavBarItem>
        <NavBarItem>
          <Link href="#works">Works</Link>
        </NavBarItem>
        <NavBarItem>
          <Link href="#services">Services</Link>
        </NavBarItem>
        <NavBarItem>
          <Link href="#contact">Contact</Link>
        </NavBarItem>
      </NavBarContent>

      <Flipper asChild>
        <NavBarAction>
          <span>{"Let's Talk"}</span>

          <FlipperContent className="h-6 w-6" itemClassName="h-5 w-5">
            <External />
          </FlipperContent>
        </NavBarAction>
      </Flipper>
    </NavBarRoot>
  );
}
