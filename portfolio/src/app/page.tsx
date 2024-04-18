"use client";

import Container from "@/components/Container";
import Screen from "@/components/Screen";
import { useEffect } from "react";

export default function Home() {
  const fetchUser = async () => {
    const user = await fetch("http://localhost:8000/v1/user/isLoggedIn")
      .then((res) => res.json())
      .then((data) => data);
    console.log({ user });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Screen>
      <Container />
    </Screen>
  );
}
