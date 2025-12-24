"use client";

import { TextField, Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SigninPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) router.push("/dashboard");
  };

  return (
    <Container maxWidth="sm">
      <h2>Sign In</h2>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button fullWidth variant="contained" onClick={submit}>
        Sign In
      </Button>
    </Container>
  );
};

export default SigninPage;
