import {
  FormControl,
  FormLabel,
  TextareaProps as ChakraTextAreaInputProps,
  Textarea as ChakraTextAreaInput,
  FormErrorMessage,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

import { FieldError } from 'react-hook-form';

interface TextAreaInputProps extends ChakraTextAreaInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const TextAreaInputBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaInputProps
> = ({ name, label, error, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraTextAreaInput
        name={name}
        id={name}
        focusBorderColor="teal.500"
        bgColor="blue.900"
        variant="filled"
        _hover={{
          bgColor: 'blue.900',
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const TextAreaInput = forwardRef(TextAreaInputBase);
