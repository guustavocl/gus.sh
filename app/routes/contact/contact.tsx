import { data } from "react-router";
import { Route } from "../+types/_layout";
import { AccountFormProvider } from "./hooks/ContactFormProvider";
import ContactForm from "./ui/ContactForm";

export function meta({ matches }: Route.MetaArgs) {
  const rootMeta = matches[0]?.meta || [];
  const titleDescriptor = rootMeta.find((meta) => "title" in meta);
  const existingTitle = titleDescriptor && "title" in titleDescriptor ? titleDescriptor.title : "";

  return [...rootMeta.filter((meta) => !("title" in meta)), { title: `${existingTitle} - Contact` }];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const response = await fetch(process.env.WEBHOOK_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            color: 3108090,
            title: email,
            author: {
              name: request.headers.get("x-forwarded-for") ?? "unknown!?",
            },
            description: message,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return data({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to send message:", error);
    return data({ success: false, error: "Failed to send message" }, { status: 500 });
  }
}

export default function Contact() {
  return (
    <AccountFormProvider>
      <ContactForm />
    </AccountFormProvider>
  );
}
