import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({ number, isCurrent }: PaginationItemProps) {
  return (
    <>
      {isCurrent ? (
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
          {number}
        </Button>
      ) : (
        <Button
          width="4"
          size="sm"
          fontSize="xs"
          bgColor="gray.700"
          cursor="pointer"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          {number}
        </Button>
      )}
    </>
  )
}