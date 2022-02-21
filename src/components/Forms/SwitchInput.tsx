import {
  FormControl,
  FormLabel,
  Switch,
  SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react';

interface SwitchInputProps extends ChakraSwitchProps {
  name: string;
  label?: string;
}

export function SwitchInput({ name, label, ...rest }: SwitchInputProps) {
  return (
    <FormControl alignItems="center">
      {!!label && (
        <FormLabel htmlFor={name} mb="3" mt="1">
          {label}
        </FormLabel>
      )}
      <Switch id={name} {...rest} />
    </FormControl>
  );
}
