"use client";

import { createContext, use } from "react";

import { EnterAnimationBlurText } from "@/components/animation/enter-animation";
import { RichText } from "@/components/rich-text";
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

export function Text({ text, richTextContent, variant }: TextProps & { richTextContent?: any }) {
  const context = use(TextContext);

  if (richTextContent) {
    return (
      <div className={context?.className}>
        <RichText content={richTextContent} />
      </div>
    );
  }

  return (
    <BaseText variant={variant} className={context?.className}>
      <EnterAnimationBlurText>{text ?? ""}</EnterAnimationBlurText>
    </BaseText>
  );
}
