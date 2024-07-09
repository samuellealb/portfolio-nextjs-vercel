import { jobs } from "../mocks";
import { NextRequest, NextResponse } from "next/server";
import { Jobs } from "../types";

export async function GET(_request: NextRequest): Promise<NextResponse> {

  // TODO: replace with Contentful API
  const jobsList = await new Promise<Jobs[] | undefined>((resolve) => {
    setTimeout(() => {
      resolve(jobs);
    }, 1000);
  });

  if (!jobsList) {
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
      message: "Jobs Lists",
      data: jobsList,
    },
    {
      status: 200,
    }
  );
}
