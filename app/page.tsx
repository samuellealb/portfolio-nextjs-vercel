import { Metadata } from "next";
import { Header } from "@/src/features/Header";

import { data } from "@/src/features/Header/Header.mocks";
const { homeLogo, mobileLogo } = data;

export const metadata: Metadata = {
  title: "Jeanne Dosse Portfolio",
  description: "Checkout Jeanne Dosse's work",
};

export default function Home() {
  return (
    <>
      <Header homeLogo={homeLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <div>Home Page</div>
      </main>
    </>
  );
}
