/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormContainer } from "../shadcn/form";

type FormProps = React.ComponentPropsWithoutRef<"form"> & {
  children: ReactNode;
  hookForm: UseFormReturn<any, any, any>;
};

export default function Form({ children, hookForm, ...props }: FormProps) {
  return (
    <FormContainer {...hookForm}>
      <form {...props}>{children}</form>
    </FormContainer>
  );
}
