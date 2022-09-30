import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Teixeira</Text>
          <Text color="gray.300" fontSize="small">
            gustavont.dev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Gustavo Teixeira" src="https://avatars.githubusercontent.com/u/69424667?s=400&u=c7e0a7e194a6cb6ad0144e4b1619a9c04ccbe9c7&v=4" />
    </Flex>
  )
}