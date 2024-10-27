"use client";

import { TextLogo } from "@lib/logo";
import { Link } from "@lib/router-events";
import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Flex,
  Group,
  NavLink,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Moon, Sun } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { Footer } from "./components";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About us", url: "/about" },
  { name: "Find blood", url: "/signup" },
  { name: "Become a donor", url: "/signup" },
];

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const pathName = usePathname();
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Flex justify="space-between" align="center" style={{ flex: 1 }}>
            <Link href="/">
              <TextLogo size={30} colorScheme={colorScheme} />
            </Link>
            <Group ml="xl" gap={8} visibleFrom="sm">
              {navLinks.map(({ url, name }, idx) => (
                <Button
                  key={idx}
                  variant="transparent"
                  color={
                    url !== pathName || pathName === "/signup"
                      ? "current"
                      : undefined
                  }
                  component={Link}
                  href={url}
                >
                  {name}
                </Button>
              ))}
            </Group>
            <Group ml="xl" gap={8} visibleFrom="sm">
              <ActionIcon
                variant="default"
                size="lg"
                radius={8}
                onClick={toggleColorScheme}
              >
                {colorScheme === "light" ? (
                  <Sun size={24} />
                ) : (
                  <Moon size={24} />
                )}
              </ActionIcon>
              <Button
                variant="default"
                radius={8}
                component={Link}
                href="/login"
              >
                Log in
              </Button>
              <Button radius={8} component={Link} href="/signup">
                Sign up
              </Button>
            </Group>
            <ActionIcon
              variant="default"
              size="lg"
              radius={8}
              onClick={toggleColorScheme}
              hiddenFrom="sm"
            >
              {colorScheme === "light" ? <Sun size={24} /> : <Moon size={24} />}
            </ActionIcon>
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {navLinks.map(({ url, name }, idx) => (
          <NavLink
            key={idx}
            label={name}
            component={Link}
            href={url}
            active={url === pathName && pathName !== "/signup"}
          />
        ))}
        <Flex mt={8} gap={8}>
          <Button
            variant="default"
            radius={8}
            component={Link}
            href="/login"
            fullWidth
          >
            Log in
          </Button>
          <Button radius={8} component={Link} href="/signup" fullWidth>
            Sign up
          </Button>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};
