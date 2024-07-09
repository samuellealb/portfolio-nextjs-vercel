import { data } from "@/src/features/Header/Header.mocks"; // TODO: replace this with actual data
import { Header } from "@/src/features/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category title",
  description: "Category description",
};

export default function Page({ params }: { params: { slug: string } }) {
  const { pagesLogo, mobileLogo } = data;

  return (
    <>
      <Header pagesLogo={pagesLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <div>Category page: {params.slug} </div>
      </main>
    </>
  );
}
