import { data } from "@/src/features/Header/Header.mocks"; // TODO: replace this with actual data
import { Metadata } from "next";
import { Header } from "@/src/features/Header";
import { JobPanel } from "@/src/features/JobPanel";

export const metadata: Metadata = {
  title: "Job title",
  description: "Job description",
};

export type JobPageProps = { params: { slug: string } };

export default function Page({ params }: JobPageProps ) {
  const { pagesLogo, mobileLogo } = data;

  return (
    <>
      <Header pagesLogo={pagesLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <JobPanel slug={params.slug}/>
      </main>
    </>
  );
}
