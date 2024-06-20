"use client";

import { logOut } from "@/utils/actions";
import { Button } from "@chakra-ui/react";
import React from "react";

const Logout = () => {
  return (
    <form action={logOut}>
      <Button type="submit">Logout</Button>
    </form>
  );
};

export default Logout;
