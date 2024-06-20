"use client";

import { ChakraProvider } from "@chakra-ui/react";

export function ReactChakraProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
