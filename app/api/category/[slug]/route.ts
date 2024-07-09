import { jobs } from "../../mocks";
import { NextRequest, NextResponse } from "next/server";
import { GetCategoriesProps, Jobs } from "../../types";

export async function GET(_request: NextRequest, { params }: GetCategoriesProps): Promise<NextResponse> {

  // TODO: replace with Contentful API
  const job = await new Promise<Jobs[] | undefined>((resolve) => {
    setTimeout(() => {
      resolve(jobs.filter((job) => job.category.label === params.slug));
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
