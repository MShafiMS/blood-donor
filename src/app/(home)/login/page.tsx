"use client";

import { Container } from "@mantine/core";
import { AuthenticationForm } from "@modules/authentication";

const Login = () => {
  return (
    <Container size="xs" mt="8vh" mb="24vh">
      <AuthenticationForm type="login" />
    </Container>
  );
};

export default Login;
