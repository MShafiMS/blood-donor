"use client";

import { TextLogo } from "@lib/logo";
import {
  ActionIcon,
  Anchor,
  Container,
  em,
  Flex,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

export const Footer = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const { colorScheme } = useMantineColorScheme();
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Container size="xl">
      <Flex
        justify={isMobile ? "center" : "space-between"}
        direction={isMobile ? "column" : "row"}
        gap={24}
        align="center"
      >
        <TextLogo size={28} colorScheme={colorScheme} />
        <Group>{items}</Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <YoutubeLogo size={18} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <FacebookLogo size={18} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <InstagramLogo size={18} />
          </ActionIcon>
        </Group>
      </Flex>
    </Container>
  );
};
