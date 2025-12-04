import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";
import { errorToast, successToast } from "~/lib/toast";
import { ContactFormContext } from "./useContactFormContext";

const ContactFormSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export type ContactFormContextType = {
  hookForm: UseFormReturn<ContactFormData, ContactFormData, ContactFormData>;
  handleSubmit: (values: ContactFormData) => Promise<void>;
};

export const AccountFormProvider = (props: { children: React.ReactNode }) => {
  const hookForm = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const initializeForm = useCallback(async () => {
    hookForm.reset({
      email: "",
      message: "",
    });
  }, [hookForm]);

  useEffect(() => {
    initializeForm();
  }, [initializeForm]);

  const handleSubmit = useCallback(
    async (values: ContactFormData) => {
      try {
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("message", values.message);

        const response = await fetch("/contact", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        successToast("Message sent successfully");
        hookForm.reset();
      } catch (error) {
        console.error("Failed to send message:", error);
        errorToast("Failed to send message");
      }
    },
    [hookForm],
  );

  return (
    <ContactFormContext.Provider
      value={{
        hookForm,
        handleSubmit,
      }}
    >
      {props.children}
    </ContactFormContext.Provider>
  );
};
