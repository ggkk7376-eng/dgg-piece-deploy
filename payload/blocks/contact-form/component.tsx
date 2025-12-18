import { useState } from "react";
import { ModalAction, ModalClose } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { useAppForm } from "@/lib/form";
import { sendContactEmail } from "@/app/(app)/_actions/send-contact";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      setError(null);
      try {
        await sendContactEmail(value);
        setIsSuccess(true);
      } catch (e) {
        console.error(e);
        setError("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.");
      }
    },
  });

  if (isSuccess) {
    return (
      <div className="flex flex-col gap-4 py-8 text-center">
        <h3 className="text-xl font-bold text-green-500">Wiadomość wysłana!</h3>
        <p className="text-light-200">Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.</p>
        <ModalClose asChild>
          <Button variant="outline">Zamknij</Button>
        </ModalClose>
      </div>
    );
  }

  return (
    <form.Form
      onSubmit={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await form.handleSubmit();
      }}
    >
      {error && <div className="rounded bg-red-500/10 p-2 text-sm text-red-500">{error}</div>}

      <form.AppField name="name" validators={{ onChange: ({ value }) => !value ? "Imię jest wymagane" : undefined }}>
        {(field) => <field.Text label="Imię" />}
      </form.AppField>

      <form.AppField name="email" validators={{ onChange: ({ value }) => !value ? "Email jest wymagany" : undefined }}>
        {(field) => <field.Text label="Email" type="email" />}
      </form.AppField>

      <form.AppField name="message" validators={{ onChange: ({ value }) => !value ? "Wiadomość jest wymagana" : undefined }}>
        {(field) => <field.Textarea label="Wiadomość" />}
      </form.AppField>

      <div className="flex justify-end gap-2 pt-4">
        <ModalClose asChild>
          <Button variant="outline" type="button" disabled={form.state.isSubmitting}>Anuluj</Button>
        </ModalClose>

        <Button type="submit" disabled={form.state.isSubmitting}>
          {form.state.isSubmitting ? "Wysyłanie..." : "Wyślij"}
        </Button>
      </div>
    </form.Form>
  );
}
