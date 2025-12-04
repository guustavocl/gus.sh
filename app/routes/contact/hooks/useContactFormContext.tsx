import { createContext, use } from "react";
import { ContactFormContextType } from "./ContactFormProvider";

export const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function useContactFormContext() {
  const context = use(ContactFormContext);
  if (context === undefined) {
    throw new Error(`useContactFormContext must be used within a ContactFormProvider`);
  }
  return context;
}
