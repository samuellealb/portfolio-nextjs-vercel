import { NextRequest, NextResponse } from "next/server";
import { GetCategoriesProps, Job } from "@/src/lib/types";
import { getCategory } from "@/src/lib/categories";

export async function GET(
  _request: NextRequest,
  { params }: GetCategoriesProps
): Promise<NextResponse> {
  const job: Job[] = await getCategory(params.slug);

  if (!job.length) {
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
