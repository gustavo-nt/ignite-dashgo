import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      w="64"
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
    >
      dashgo
      <Text color="pink.500" as="span" ml="1">.</Text>
    </Text>
  )
}