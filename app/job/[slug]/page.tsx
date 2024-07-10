import { data } from "@/src/features/Header/Header.mocks"; // TODO: replace this with actual data
import { Metadata } from "next";
import { Header } from "@/src/features/Header";
import { JobPanel } from "@/src/features/JobPanel";

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const slug = params.slug;
  const response = await fetch(process.env.URL + `/api/jobs/${slug}`);
  const { data } = await response.json();

  if (data) {
    return {
      title: data.title,
      description: data.sinopsis ? data.sinopsis : data.title,
    };
  }

  return {
    title: "Job not found",
    description: "Job not found",
  };
}

export type JobPageProps = { params: { slug: string } };

export default function Page({ params }: JobPageProps) {
  const { pagesLogo, mobileLogo } = data;

  return (
    <>
      <Header pagesLogo={pagesLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <JobPanel slug={params.slug} />
      </main>
    </>
  );
}
