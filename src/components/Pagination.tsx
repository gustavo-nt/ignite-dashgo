import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      mt="8"
      align="center"
      direction="row"
      justify="space-between"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          disabled
          width="4"
          size="sm"
          fontSize="xs"
          colorSchme="pink"
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </Button>
        <Button
          width="4"
          size="sm"
          fontSize="xs"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          2
        </Button>
        <Button
          width="4"
          size="sm"
          fontSize="xs"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  )
}