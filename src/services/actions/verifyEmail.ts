"use server";

import { string } from "zod";

export const verifyEmail = async (verifyInfo: any) => {
  console.log("verifyInfo", verifyInfo);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/verify-email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verifyInfo),
      cache: "no-store",
    }
  );

  return await response.json();
};
