import { Button } from "~/components/shadcn/button";
import { Card } from "~/components/ui/Card";
import Form from "~/components/ui/Form";
import InputForm from "~/components/ui/InputForm";
import TextAreaForm from "~/components/ui/TextAreaForm";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";
import { useContactFormContext } from "../hooks/useContactFormContext";

export default function ContactForm() {
  const { hookForm, handleSubmit } = useContactFormContext();
  const { lightsOffClass } = useLightsContext();

  return (
    <Card className="col-span-12 p-6">
      <Form
        hookForm={hookForm}
        onSubmit={hookForm.handleSubmit(handleSubmit)}
        className={cn("flex flex-col gap-2 w-full", lightsOffClass)}
      >
        <InputForm
          id="email"
          label="EMAIL"
          hookForm={hookForm}
          placeholder="your@email.com"
          type="email"
        />
        <TextAreaForm
          id="message"
          label="MESSAGE"
          hookForm={hookForm}
          placeholder="Hi Gustavo, what's up?"
          rows={6}
        />
        <Button
          type="submit"
          disabled={hookForm.formState.isSubmitting}
          className="ml-auto w-32 bg-accent/10 hover:bg-accent/20 text-white"
        >
          {hookForm.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </Form>
    </Card>
  );
}
