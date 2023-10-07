import Header from "./components/Header";
import ChatBubble from "./components/ChatBubble";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat GPT UI Demo",
  description: "Chat GPT UI Demo",
};

import AppIcon from "./components/icons/AppIcon";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: 'rgb(21, 32, 43)'}}>        
        <main className="w-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}
