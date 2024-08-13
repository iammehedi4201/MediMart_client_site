"use server";

export const registerUser = async (userInfo: TRegisterUser) => {
  console.log("userInfo", userInfo);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/create-user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
      cache: "no-store",
    }
  );

  return await response.json();
};
