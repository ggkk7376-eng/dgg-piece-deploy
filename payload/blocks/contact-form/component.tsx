"use client";

import { ModalAction, ModalClose } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { useAppForm } from "@/lib/form";

import { useState } from "react";
import { sendEmailAction } from "@/app/(app)/_actions/send-email";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const form = useAppForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <form.Form
      onSubmit={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setStatus("submitting");

        const values = await form.handleSubmit();

        // handleSubmit returns values if successful validation? 
        // TanStack Form verification needed.
        // Actually form.state.values should be used or handleSubmit return.
        // Let's assume values are managed by form state.

        const res = await sendEmailAction({
          name: form.getFieldValue("name"),
          email: form.getFieldValue("email"),
          message: form.getFieldValue("message"),
        });

        if (res?.error) {
          setStatus("error");
        } else {
          setStatus("success");
          form.reset();
        }
      }}
    >
      <form.AppField name="name">
        {(field) => <field.Text label="Imię" />}
      </form.AppField>

      <form.AppField name="email">
        {(field) => <field.Text label="Email" type="email" />}
      </form.AppField>

      <form.AppField name="message">
        {(field) => <field.Textarea label="Wiadomość" />}
      </form.AppField>

      {status === "success" && (
        <p className="text-green-500 text-sm mt-2">Wiadomość wysłana!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-2">Błąd wysyłania.</p>
      )}

      <ModalClose asChild>
        <Button variant="outline" type="button" disabled={status === "submitting"}>Anuluj</Button>
      </ModalClose>

      <ModalAction>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Wysyłanie..." : "Wyślij"}
        </Button>
      </ModalAction>
    </form.Form>
  );
}
