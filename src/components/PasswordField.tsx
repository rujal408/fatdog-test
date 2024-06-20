"use client";

import { Box, Input, InputProps } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";

const PasswordField: React.FC<InputProps> = (props) => {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <Box position="relative">
      <Input
        {...props}
        type={isPassword ? "password" : "text"}
        variant="filled"
        mb={6}
      />
      <Box
        position="absolute"
        top="10px"
        left="100%"
        cursor="pointer"
        onClick={() => setIsPassword(!isPassword)}
      >
        {isPassword ? <AiTwotoneEye /> : <AiTwotoneEyeInvisible />}
      </Box>
    </Box>
  );
};

export default PasswordField;
