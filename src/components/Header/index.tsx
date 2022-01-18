import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { NotificationsNav } from "./NotificationsNav";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

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
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
          onClick={onOpen}
          display="flex"
          fontSize="24"
          mr="2"
        ></IconButton>
      )}
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