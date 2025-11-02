/* eslint-disable @typescript-eslint/no-explicit-any */
import { Info } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/shadcn/form";
import { Textarea } from "~/components/shadcn/textarea";
import { cn } from "~/lib/utils";
import { ArrowTooltip } from "./ArrowTooltip";

type TextAreaFormProps = React.ComponentPropsWithoutRef<"textarea"> & {
  id: string;
  label: string;
  tip?: string;
  hookForm: UseFormReturn<any, any, any>;
  containerClassName?: string;
};

export default function TextAreaForm({ id, label, tip, hookForm, containerClassName, ...props }: TextAreaFormProps) {
  return (
    <FormField
      name={id}
      control={hookForm.control}
      render={({ field }) => (
        <FormItem className={cn("relative grid grid-cols-1 items-start gap-1 pb-5 px-0.5", containerClassName)}>
          <FormLabel
            className={cn(
              "w-full whitespace-nowrap text-left overflow-hidden text-ellipsis font-semibold",
              props.disabled ? "opacity-50" : "",
            )}
          >
            {label}
            {tip ? (
              <ArrowTooltip
                tooltip={tip}
                className="ml-auto flex flex-row items-center justify-center gap-1"
                tooltipClassName="w-72"
              >
                <Info className="size-4" />
              </ArrowTooltip>
            ) : null}
          </FormLabel>
          <FormControl>
            <Textarea
              {...props}
              {...field}
              value={field.value || ""}
              className={cn("caret-accent", props.className)}
            />
          </FormControl>
          <FormMessage className="absolute bottom-0 w-full truncate whitespace-nowrap" />
        </FormItem>
      )}
    />
  );
}
