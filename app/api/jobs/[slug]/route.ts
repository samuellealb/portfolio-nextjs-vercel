import { jobs } from "../../mocks";
import { NextRequest, NextResponse } from "next/server";
import { GetJobsProps, Job } from "../../types";

export async function GET(_request: NextRequest, { params }: GetJobsProps): Promise<NextResponse> {

  // TODO: replace with Contentful API
  const job = await new Promise<Job | undefined>((resolve) => {
    setTimeout(() => {
      resolve(jobs.find((job) => job.slug === params.slug));
    }, 1000);
  });

  if (!job) {
    return NextResponse.json(
      {
        success: true,
        message: "Job Not Found!",
        data: null,
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Detail Data Job",
      data: job,
    },
    {
      status: 200,
    }
  );
}
