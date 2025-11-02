/* eslint-disable @typescript-eslint/no-explicit-any */
import { Info } from "lucide-react";
import { forwardRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/shadcn/form";
import { Input } from "~/components/shadcn/input";
import { cn } from "~/lib/utils";
import { ArrowTooltip } from "./ArrowTooltip";

type InputFormProps = React.ComponentPropsWithRef<"input"> & {
  id: string;
  label: string;
  tip?: string;
  hookForm: UseFormReturn<any, any, any>;
  containerClassName?: string;
  formatOnChange?: (val: string) => string;
};

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ id, label, tip, hookForm, formatOnChange, containerClassName, ...props }, ref) => {
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
              <Input
                type={"text"}
                {...props}
                {...field}
                ref={ref}
                onBlur={props.onBlur}
                value={field.value || ""}
                autoComplete={props.autoComplete || "off"}
                className={cn("caret-accent", props.className)}
                onChange={(e) => {
                  const val = e.target.value;
                  const formatted = formatOnChange ? formatOnChange(val) : val;
                  field.onChange(formatted);
                }}
              />
            </FormControl>
            <FormMessage className="absolute bottom-0 w-full truncate whitespace-nowrap" />
          </FormItem>
        )}
      />
    );
  },
);

InputForm.displayName = "InputForm";

export default InputForm;
