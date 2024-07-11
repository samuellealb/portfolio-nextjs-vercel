import { NextRequest, NextResponse } from "next/server";
import { getJob } from "@/src/lib/jobs";
import { GetJobsProps, Job } from "../../types";

export async function GET(
  _request: NextRequest,
  { params }: GetJobsProps
): Promise<NextResponse> {
  const job: Job | undefined = await getJob(params.slug);

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
