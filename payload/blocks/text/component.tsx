"use client";

import { createContext, use } from "react";

import { EnterAnimationBlurText } from "@/components/animation/enter-animation";
import { Text as BaseText } from "@/components/text";
import type { Text as TextProps } from "@/payload-types";

export interface TextState {
  className?: string;
}

const TextContext = createContext<TextState | undefined>(undefined);

export function TextProvider({
  children,
  ...value
}: Readonly<{ children: React.ReactNode }> & Readonly<TextState>) {
  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
}

export function Text({ text, variant }: TextProps) {
  const context = use(TextContext);

  return (
    <BaseText variant={variant} className={context?.className}>
      <EnterAnimationBlurText>{text ?? ""}</EnterAnimationBlurText>
    </BaseText>
  );
}
