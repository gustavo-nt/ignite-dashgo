import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      h="20"
      mt="4"
      px="6"
      w="100%"
      as="header"
      align="center"
      marginX="auto"
      maxWidth="1480"
    >
      <Text
        w="64"
        fontSize="3xl" 
        fontWeight="bold"
        letterSpacing="tight"
      >
        dashgo
        <Text color="pink.500" as="span" ml="1">.</Text>
      </Text>

      <Flex
        py="4"
        px="8"
        ml="6"
        flex="1"
        as="label"
        bg="gray.800"
        maxWidth={400}
        alignSelf="center"
        position="relative"
        borderRadius="full"
      >
        <Input 
          mr="4"
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400 '}}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex
        ml="auto"
        align="center"
      >
        <HStack 
          mx="8"
          pr="8"
          py="1"
          spacing="8"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Gustavo Teixeira</Text>
            <Text color="gray.300" fontSize="small">
              teste@gmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Gustavo Teixeira" src="https://avatars.githubusercontent.com/u/69424667?s=400&u=c7e0a7e194a6cb6ad0144e4b1619a9c04ccbe9c7&v=4" />
        </Flex>
      </Flex>
    </Flex>
  )
}