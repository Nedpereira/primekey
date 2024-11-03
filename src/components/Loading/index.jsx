import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" color="blue.500" />
    </Flex>
  );
};
