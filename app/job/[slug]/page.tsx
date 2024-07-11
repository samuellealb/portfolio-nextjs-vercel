import { data as HeaderData } from "@/src/features/Header/Header.mocks"; // TODO: replace this with actual data
import { Metadata } from "next";
import { Header } from "@/src/features/Header";
import { JobPanel } from "@/src/features/JobPanel";

const getJobData = async (slug: string) => {
  const response = await fetch(process.env.URL + `/api/jobs/${slug}`);
  const { data } = await response.json();
  return data;
};

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const data = await getJobData(params.slug);
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

export default async function Page({ params }: JobPageProps) {
  const { pagesLogo, mobileLogo } = HeaderData; // TODO: replace this with actual data
  const jobData = await getJobData(params.slug);

  return (
    <>
      <Header pagesLogo={pagesLogo} mobileLogo={mobileLogo} />
      <main role="main">
        <JobPanel {...jobData} />
      </main>
    </>
  );
}
