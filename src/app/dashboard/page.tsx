import { Box, Flex } from "@chakra-ui/react";
import { AddTodoForm } from "./_components/AddTodoForm";
import TodoList from "./_components/TodoList";
import dynamic from "next/dynamic";
import Logout from "./_components/Logout";

const TodoContextProvider = dynamic(
  () => import("@/providers/TodoContextProvider"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const Dashboard = () => {
  return (
    <TodoContextProvider>
      <Logout />
      <Box maxW="27rem" mx="auto" py={12} w="100%" px={3}>
        <Flex align="center" h="100%" justify="flex-start" direction="column">
          <AddTodoForm />
          <TodoList />
        </Flex>
      </Box>
    </TodoContextProvider>
  );
};

export default Dashboard;
