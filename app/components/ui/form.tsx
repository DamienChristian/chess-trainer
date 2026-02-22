'use client';

import {
  createContext,
  useContext,
  useId,
  type ReactNode,
  type HTMLAttributes,
  type LabelHTMLAttributes,
} from 'react';
import {
  useFormContext,
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

// --- Form wrapper (just passes through react-hook-form's FormProvider) ---
import { FormProvider } from 'react-hook-form';
const Form = FormProvider;

// --- FormField ---
type FormFieldContextValue = { name: string };
const FormFieldContext = createContext<FormFieldContextValue>({ name: '' });

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

// --- FormItem ---
type FormItemContextValue = { id: string };
const FormItemContext = createContext<FormItemContextValue>({ id: '' });

function FormItem({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const id = useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={`space-y-2 ${className}`} {...props} />
    </FormItemContext.Provider>
  );
}

// --- useFormField hook ---
function useFormField() {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);

  return {
    id: itemContext.id,
    name: fieldContext.name,
    formItemId: `${itemContext.id}-form-item`,
    formDescriptionId: `${itemContext.id}-form-item-description`,
    formMessageId: `${itemContext.id}-form-item-message`,
    ...fieldState,
  };
}

// --- FormLabel ---
function FormLabel({
  className = '',
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  const { formItemId, error } = useFormField();
  return (
    <label
      htmlFor={formItemId}
      className={`text-sm font-medium leading-none ${error ? 'text-error' : 'text-foreground'} ${className}`}
      {...props}
    />
  );
}

// --- FormControl ---
function FormControl({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const { formItemId, formDescriptionId, formMessageId, error } =
    useFormField();

  // Pass aria attributes to the child
  return (
    <div
      id={formItemId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

// --- FormMessage ---
function FormMessage({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) return null;

  return (
    <p
      id={formMessageId}
      className={`text-xs font-medium text-error ${className}`}
      {...props}
    >
      {body}
    </p>
  );
}

// --- FormDescription ---
function FormDescription({
  className = '',
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { children?: ReactNode }) {
  const { formDescriptionId } = useFormField();
  return (
    <p
      id={formDescriptionId}
      className={`text-xs text-foreground-muted ${className}`}
      {...props}
    />
  );
}

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
  useFormField,
};
