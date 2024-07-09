import { Metadata } from "next";
import { Header } from "@/src/features/Header";
import { JobsList } from "@/src/features/JobsList";

import { data } from "@/src/features/Header/Header.mocks";

export const metadata: Metadata = {
  title: "Jeanne Dosse Portfolio",
  description: "Checkout Jeanne Dosse's work",
};

export default function Home() {
  const { homeLogo, mobileLogo } = data;

  return (
    <>
      <Header homeLogo={homeLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <JobsList />
      </main>
    </>
  );
}
