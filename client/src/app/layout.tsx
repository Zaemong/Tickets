import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  rem,
} from "@mantine/core";
import "@mantine/core/styles.css";
import TRPCProvider from "@/app/_trpc/provider";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Ticket",
  description: "Discord Tickets Bot",
};

const theme = createTheme({
  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={notoSansJp.className}>
        <MantineProvider theme={theme}>
          <TRPCProvider>{children}</TRPCProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
