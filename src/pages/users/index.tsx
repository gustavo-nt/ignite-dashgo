import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  });

  return (
    <Box>
      <Header />

      <Flex
        px="6"
        my="6"
        w="100%"
        mx="auto"
        maxWidth={1480}
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th width={["2", "auto"]}>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th width={["6", "8"]}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td maxWidth={["4", "auto"]}>
                  <Box>
                    <Text
                      fontWeight="bold"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                    >
                      Gustavo Teixeira
                    </Text>
                    <Text 
                      fontSize="sm" 
                      color="gray.300"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                    >
                      teste@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td textAlign="end">
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      cursor="pointer"
                      colorScheme="pink"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <Button
                      width="4"
                      size="sm"
                      fontSize="xs"
                      bgColor="pink.500"
                      cursor="pointer"
                      _hover={{
                        bgColor: 'pink.600'
                      }}
                    >
                      <Icon as={RiPencilLine} fontSize="16" />
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}