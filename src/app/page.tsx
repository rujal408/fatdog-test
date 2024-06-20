import Form from "@/components/Form";
import { loginUser } from "@/utils/actions";
import { Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex flexDirection="column" p={12} borderRadius={8} boxShadow="lg">
        <Heading mb={6}>Log In</Heading>
        <Form loginUser={loginUser} />
      </Flex>
    </Flex>
  );
}
