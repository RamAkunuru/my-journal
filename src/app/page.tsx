"use client";

import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [user] = useState<string | null>(() => {
    // Initialize user state by reading cookie on mount
    if (typeof window === "undefined") return null;
    const userCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user="));
    if (userCookie) {
      return userCookie.split("=")[1];
    }
    return null;
  });

  useEffect(() => {
    // If the user is set, redirect to the dashboard
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]); // Dependency on `user`, so redirection occurs when the user is set

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <h1>Welcome to the Journal App</h1>
      <p>Your personal space to write and organize thoughts</p>

      {!user ? (
        <>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => router.push("/signin")}
            style={{ marginBottom: "10px" }}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => router.push("/signup")}
          >
            Create an Account
          </Button>
        </>
      ) : (
        <p>Redirecting to your dashboard...</p>
      )}
    </Container>
  );
}
