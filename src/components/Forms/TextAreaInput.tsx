import {
  FormControl,
  FormLabel,
  TextareaProps as ChakraTextAreaInputProps,
  Textarea as ChakraTextAreaInput,
} from '@chakra-ui/react';

interface InputProps extends ChakraTextAreaInputProps {
  name: string;
  label?: string;
}

export function TextAreaInput({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
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
        {...rest}
      />
    </FormControl>
  );
}
