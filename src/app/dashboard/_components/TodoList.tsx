"use client";

import { useTodo } from "@/providers/TodoContextProvider";
import { Actions } from "@/providers/TodoContextProvider/actions";
import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";

const TodoList = () => {
  const {
    state: { todos },
    dispatch,
  } = useTodo();

  return (
    <Stack>
      {todos.map((text) => (
        <Box
          key={text}
          p={3}
          mt={1}
          border="1px"
          borderColor="inherit"
          borderRadius="md"
          display="flex"
          gap="5px"
          alignItems="center"
        >
          {text}{" "}
          <Button
            onClick={() =>
              dispatch({ type: Actions.removeTodo, payload: text })
            }
          >
            Delete
          </Button>
        </Box>
      ))}
    </Stack>
  );
};

export default TodoList;
