"use client";

import { TextField, Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });
    router.push("/dashboard");
  };

  return (
    <Container maxWidth="sm">
      <h2>Sign Up</h2>
      <TextField
        label="First Name"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />
      <TextField
        label="Last Name"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button fullWidth variant="contained" onClick={submit}>
        Create Account
      </Button>
    </Container>
  );
};

export default SignupPage;
