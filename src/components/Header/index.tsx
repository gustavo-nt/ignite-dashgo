import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { NotificationsNav } from "./NotificationsNav";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

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
      <Logo />

      {isWideVersion && (
        <SearchBox />
      )}

      <Flex
        ml="auto"
        align="center"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}