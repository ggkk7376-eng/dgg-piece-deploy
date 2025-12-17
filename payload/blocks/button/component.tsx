import { cache, type ReactNode } from "react";

import External from "@/assets/icons/external.svg";
import { EnterAnimationBlur } from "@/components/animation/enter-animation";
import { Flipper, FlipperContent } from "@/components/animation/flipper";
import { DynamicDialog } from "@/components/dynamic-dialog";
import { Text } from "@/components/text";
import { getPayloadClient } from "@/lib/payload";
import type { Button as ButtonProps, Dialog } from "@/payload-types";

function ButtonContent({ label }: { label: string }) {
  return (
    <EnterAnimationBlur className="flex cursor-pointer items-center justify-center gap-1 rounded-lg border border-[#212121] bg-[radial-gradient(66%_93%_at_48%_0%,#262626_0%,var(--color-dark-600)_76%)] px-7 py-4 font-sans">
      <Flipper asChild>
        <Text variant="p2" asChild>
          <button type="button">
            <span>{label}</span>
            <FlipperContent
              className="h-6 w-6"
              itemClassName="h-5 w-5 rotate-90"
            >
              <External />
            </FlipperContent>
          </button>
        </Text>
      </Flipper>
    </EnterAnimationBlur>
  );
}

export function Button({ dialog, label }: ButtonProps) {
  return (
    <DialogTrigger dialog={dialog}>
      <ButtonContent label={label} />
    </DialogTrigger>
  );
}

async function DialogTrigger({
  children,
  dialog: dialogOrId,
}: Readonly<{ children: ReactNode; dialog?: number | Dialog | null }>) {
  if (dialogOrId == null) {
    return children;
  }

  const dialog =
    typeof dialogOrId === "number" ? await getDialog(dialogOrId) : dialogOrId;

  return (
    <DynamicDialog {...dialog} asChild>
      {children}
    </DynamicDialog>
  );
}

const getDialog = cache(async (id: number) =>
  (await getPayloadClient()).findByID({ collection: "dialogs", id }),
);
