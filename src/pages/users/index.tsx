import NextLink from "next/link";
import { useState } from "react";
import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";
import { Pagination } from "../../components/Pagination";

import { queryClient } from "../../services/queryClient";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { api } from "../../services/api";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['users', userId], async () => {
      const response = await api.get(`users/${userId}`)
      return response.data;
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutes
    });
  }

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
            <Heading size="lg" fontWeight="normal">
              Usuários

              {!isLoading && isFetching && 
                <Spinner size="sm" color="gray.500" ml="4" /> 
              }
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários!</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map(user => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td maxWidth={["4", "auto"]}>
                        <Box>
                          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                            <Text
                              fontWeight="bold"
                              overflow="hidden"
                              whiteSpace="nowrap"
                              textOverflow="ellipsis"
                            >
                              {user.name}
                            </Text>
                          </Link>
                          <Text 
                            fontSize="sm" 
                            color="gray.300"
                            overflow="hidden"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis"
                          >
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
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
                  ))}
                </Tbody>
              </Table>

              <Pagination 
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}