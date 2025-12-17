"use client";

import Link from "next/link";

import External from "@/assets/icons/external.svg";
import { Flipper, FlipperContent } from "@/components/animation/flipper";
import {
  NavBarContent,
  NavBarHeader,
  NavBarItem,
  NavBar as NavBarRoot,
  NavBarTrigger,
  useNavBar,
} from "@/components/nav-bar";

import { AppLogo } from "./logo";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { toggle } = useNavBar();
  return (
    <Link href={href} onClick={toggle}>
      {children}
    </Link>
  );
}

export function NavBar() {
  return (
    <NavBarRoot>
      <NavBarHeader>
        <Link href="/" className="block h-full">
          <AppLogo className="h-full scale-150 origin-left" />
        </Link>
        <NavBarTrigger />
      </NavBarHeader>

      <NavBarContent>
        <NavBarItem>
          <NavLink href="#why-us">Dlaczego my</NavLink>
        </NavBarItem>
        <NavBarItem>
          <NavLink href="#mission">Misja</NavLink>
        </NavBarItem>
        <NavBarItem>
          <NavLink href="#works">Realizacje</NavLink>
        </NavBarItem>
        <NavBarItem>
          <NavLink href="#services">Oferta</NavLink>
        </NavBarItem>
        <NavBarItem>
          <NavLink href="#contact">Kontakt</NavLink>
        </NavBarItem>
      </NavBarContent>


    </NavBarRoot>
  );
}
