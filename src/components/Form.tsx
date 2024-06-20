"use client";

import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import PasswordField from "./PasswordField";

interface IProps {
  loginUser: (d: FormData) => void;
}

const Form: React.FC<IProps> = ({ loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email) ? "" : "Invalid email address";
  };

  const validatePassword = (password: string) => {
    return password.length >= 6
      ? ""
      : "Password must be at least 6 characters long";
  };

  const handleSubmit = (formData: FormData) => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      loginUser(formData);
    }
  };

  return (
    <form action={handleSubmit}>
      <Input
        name="email"
        placeholder="example@example.com"
        type="email"
        variant="filled"
        mb={3}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors?.email}
      <PasswordField
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors?.password}
      <Button type="submit" colorScheme="teal" mb={8}>
        Log In
      </Button>
    </form>
  );
};

export default Form;
