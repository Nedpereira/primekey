import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();

  const showToast = ({ status, message, duration, isClosable }) => {
    toast({
      position: "top",
      title: message,
      status: status,
      duration: duration * 1000,
      isClosable: isClosable || false,
    });
  };

  return showToast;
};

export default useCustomToast;
