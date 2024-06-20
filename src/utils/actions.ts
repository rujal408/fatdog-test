"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateRandomString } from "./random";

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (email && password) {
    cookies().set({
      name: "token",
      value: generateRandomString(),
    });
  }

  redirect("/dashboard");

  //
}

export async function logOut() {
  cookies().delete("token");
  redirect("/");
}
