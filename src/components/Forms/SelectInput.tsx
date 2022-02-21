import {
  FormControl,
  FormLabel,
  Select,
  SelectProps as ChakraSelectProps,
  Text,
} from '@chakra-ui/react';

interface SelectInputProps extends ChakraSelectProps {
  name: string;
  label?: string;
  optSelect: string[];
}

export function SelectInput({
  name,
  label,
  optSelect,
  ...rest
}: SelectInputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Select
        name={name}
        id={name}
        focusBorderColor="teal.500"
        color="gray.400"
        bgColor="blue.900"
        variant="filled"
        _hover={{
          bgColor: 'blue.900',
        }}
        size="lg"
        {...rest}
      >
        <option style={{ background: '#1A365D' }}>Selecione</option>
        {optSelect.map((opt, idx) => (
          <option key={idx} value={opt} style={{ background: '#1A365D' }}>
            {opt}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
