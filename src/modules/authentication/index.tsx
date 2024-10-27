"use client";

import { Link } from "@lib/router-events";
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst } from "@mantine/hooks";
import { GoogleButton } from "./components";

type User = {
  email: string;
  name: string;
  password: string;
  terms: boolean;
};

type AuthProps = {
  type: "login" | "register";
};

export const AuthenticationForm = ({ type }: AuthProps) => {
  const form = useForm<User>({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const onSubmit = async (user: User) => {
    console.log(user);
  };

  return (
    <Paper>
      <Title order={3} mb="lg">
        {type === "login" ? "Hi, Welcome Back!👋" : "Create an account"}
      </Title>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          {type === "register" && (
            <TextInput
              required
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>
        <Button type="submit" radius="md" fullWidth mt="xl">
          {upperFirst(type)}
        </Button>
      </form>
      <Divider label="Or continue with" labelPosition="center" my="lg" />
      <GoogleButton radius="xl" mb="md" mt="lg" fullWidth>
        Google
      </GoogleButton>
      <Anchor
        component={Link}
        type="button"
        c="dimmed"
        size="xs"
        w="100%"
        ta="center"
        href={type === "login" ? "/signup" : "/login"}
      >
        {type === "register"
          ? "Already have an account? Login"
          : "Don't have an account? Register"}
      </Anchor>
    </Paper>
  );
};
