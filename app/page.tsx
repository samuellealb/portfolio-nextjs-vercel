import { Metadata } from "next";
import { Header } from "@/src/features/Header";
import { JobsList } from "@/src/features/JobsList";
import { getJobs } from "@/src/lib/jobs";
import { Job } from "@/src/lib/types";
import { data as HeaderData } from "@/src/features/Header/Header.mocks"; // TODO: replace this with actual data

export const metadata: Metadata = {
  title: "Jeanne Dosse Portfolio",
  description: "Checkout Jeanne Dosse's work",
};

export default async function Home() {
  const { homeLogo, mobileLogo } = HeaderData; // TODO: replace this with actual data

  const jobsList: Job[] = await getJobs();

  return (
    <>
      <Header homeLogo={homeLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <JobsList {...jobsList} />
      </main>
    </>
  );
}
