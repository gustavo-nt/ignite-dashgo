import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ 
  number, 
  isCurrent, 
  onPageChange 
}: PaginationItemProps) {
  return (
    <>
      {isCurrent ? (
        <Button
          disabled
          width="4"
          size="sm"
          fontSize="xs"
          colorschme="pink"
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
          }}
          _hover={{
            bgColor: 'pink.600'
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
          onClick={() => onPageChange(number)}
        >
          {number}
        </Button>
      )}
    </>
  )
}