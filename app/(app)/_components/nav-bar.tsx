"use client";

import Link from "next/link";

import External from "@/assets/icons/external.svg";
import { Flipper, FlipperContent } from "@/components/animation/flipper";
import { DynamicDialog } from "@/components/dynamic-dialog";
import {
  NavBarContent,
  NavBarHeader,
  NavBarItem,
  NavBarAction,
  NavBar as NavBarRoot,
  NavBarTrigger,
  useNavBar,
} from "@/components/nav-bar";
import type { Dialog } from "@/payload-types";

import { AppLogo } from "./logo";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { toggle } = useNavBar();
  return (
    <Link href={href} onClick={toggle}>
      {children}
    </Link>
  );
}

export function NavBar({ contactDialog }: { contactDialog?: Dialog | number | null }) {
  return (
    <NavBarRoot>
      <NavBarHeader>
        <Link href="/" className="block h-full">
          <AppLogo className="h-20 w-auto origin-left" />
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

      {typeof contactDialog === "object" && contactDialog ? (
        <DynamicDialog {...contactDialog} asChild>
          <NavBarAction className="mt-6 w-full">
            Napisz email <External className="size-4" />
          </NavBarAction>
        </DynamicDialog>
      ) : (
        <NavBarAction
          className="mt-6 w-full"
          onClick={() => {
            window.location.href = "mailto:kontakt@dggpiece.pl";
          }}
        >
          Napisz email <External className="size-4" />
        </NavBarAction>
      )}
    </NavBarRoot>
  );
}
