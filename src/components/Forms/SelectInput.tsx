import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface SelectInputProps extends ChakraSelectProps {
  name: string;
  label?: string;
  optSelect: string[];
  error?: FieldError;
}

const SelectInputBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectInputProps
> = ({ name, label, optSelect, error, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
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
        ref={ref}
        size="lg"
        placeholder={'Selecione'}
        _placeholder={{ bg: 'blue.900' }}
        {...rest}
      >
        {/* <option style={{ background: '#1A365D' }}>Selecione</option> */}
        {optSelect.map((opt, idx) => (
          <option key={idx} value={opt} style={{ background: '#1A365D' }}>
            {opt}
          </option>
        ))}
      </Select>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const SelectInput = forwardRef(SelectInputBase);
