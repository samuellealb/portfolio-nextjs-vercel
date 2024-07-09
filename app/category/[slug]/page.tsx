import { data } from "@/src/features/Header/Header.mocks"; // TODO: replace this with actual data
import { Header } from "@/src/features/Header";
import { Metadata } from "next";
import { JobsList } from "@/src/components/JobsList";

export const metadata: Metadata = {
  title: "Category title",
  description: "Category description",
};

export type CategoryPageProps = { params: { slug: string } };

export default function Page({ params }: CategoryPageProps) {
  const { pagesLogo, mobileLogo } = data;

  return (
    <>
      <Header pagesLogo={pagesLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <JobsList category={params.slug} />
      </main>
    </>
  );
}
