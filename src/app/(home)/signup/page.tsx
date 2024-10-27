"use client";

import { Container } from "@mantine/core";
import { AuthenticationForm } from "@modules/authentication";

const Signup = () => {
  return (
    <Container size="xs" my="8vh">
      <AuthenticationForm type="register" />
    </Container>
  );
};

export default Signup;
