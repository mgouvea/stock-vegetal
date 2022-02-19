import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

interface SwitchInputProps {
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
      <Switch id={name} />
    </FormControl>
  );
}
