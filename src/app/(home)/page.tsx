"use client";

import { TextLogoVert } from "@lib/logo";
import {
  Button,
  Container,
  em,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container size="lg">
      <Flex
        justify={isMobile ? "center" : "space-between"}
        h="76vh"
        align="center"
        direction={isMobile ? "column" : "row"}
      >
        {isMobile ? (
          <TextLogoVert
            size={104}
            style={{ marginBottom: 32 }}
            colorScheme={colorScheme}
          />
        ) : (
          <Image src="/images/heart.png" alt="heart" height={360} width={360} />
        )}
        <Flex
          maw={isMobile ? "100%" : "50%"}
          direction="column"
          align={isMobile ? "center" : "end"}
          gap={24}
        >
          <Title ta={isMobile ? "center" : "end"} order={isMobile ? 2 : 1}>
            Save
            <span style={{ color: "#D81D48" }}> Life </span>
            Donate
            {!isMobile && <br />}
            <span style={{ color: "#D81D48" }}> Blood</span>
          </Title>
          <Text ta={isMobile ? "center" : "end"}>
            Donate blood and be a hero – your generosity can save lives. Join a
            proud tradition that has made a difference for centuries. Make an
            impact today with a simple, lifesaving act
          </Text>
          <Button variant="outline" size="lg" radius={12}>
            Donate Now
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
