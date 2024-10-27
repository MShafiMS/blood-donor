// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { ProgressComplete } from "@lib/router-events";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NavigationProgress } from "@mantine/nprogress";
import "@mantine/nprogress/styles.css";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    colors: {
      primary: [
        "#ffeaf1",
        "#fcd4dd",
        "#f3a7b9",
        "#ec7892",
        "#e55071",
        "#e2365c",
        "#e12852",
        "#c81b43",
        "#b3133b",
        "#9e0331",
      ],
    },
    white: "#FFFFFF",
    black: "#232323",
    primaryColor: "primary",
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <NavigationProgress />
          {children}
        </MantineProvider>
        <ProgressComplete />
      </body>
    </html>
  );
}
