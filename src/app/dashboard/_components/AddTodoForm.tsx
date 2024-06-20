"use client";

import React, { useState, ChangeEvent } from "react";
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";
import { useTodo } from "@/providers/TodoContextProvider";
import { Actions } from "@/providers/TodoContextProvider/actions";

export const AddTodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodo();

  return (
    <Box w="100%" mb={8}>
      <form>
        <FormControl>
          <FormLabel htmlFor="text">Add todo</FormLabel>
          <Input
            type="text"
            id="text"
            aria-describedby="text-helper-text"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          />
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: Actions.addTodo, payload: text });
            setText("");
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
