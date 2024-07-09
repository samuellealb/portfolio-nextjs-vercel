import { data } from "@/src/features/Header/Header.mocks"; // TODO: replace this with actual data
import { Header } from "@/src/features/Header";
import { Metadata } from "next";
import { JobsList } from "@/src/features/JobsList";

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const slug = params.slug;
  const response = await fetch(process.env.URL + `/api/categories/${slug}`);
  const { data } = await response.json();

  if (data.length) {
    return {
      title: "Jeanne Dosse works on " + slug,
      description: slug + " Jobs",
    };
  }

  return {
    title: "Category not found",
    description: "Category not found",
  };
}

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
