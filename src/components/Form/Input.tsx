import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputPros } from "@chakra-ui/react";

interface InputProps extends ChakraInputPros {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest}: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

      <ChakraInput
        size="lg"
        name={name}
        variant="filled"
        bgColor="gray.900"
        focusBorderColor="pink.500"
        _hover={{
          bgColor: 'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  )
}