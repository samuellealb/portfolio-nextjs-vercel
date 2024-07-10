import { NextRequest, NextResponse } from "next/server";
import { GetJobsProps, Job } from "../../types";

export async function GET(
  _request: NextRequest,
  { params }: GetJobsProps
): Promise<NextResponse> {
  const response = await fetch(
    process.env.CONTENTFUL_CND_URL +
      `/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?content_type=job&fields.slug=${params.slug}&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  const job = await response.json();

  if (!job.items.length) {
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
      data: job.items[0].fields as Job,
    },
    {
      status: 200,
    }
  );
}
