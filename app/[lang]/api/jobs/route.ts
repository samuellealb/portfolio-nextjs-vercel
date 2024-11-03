import { NextResponse, NextRequest } from 'next/server';
import { TJob, TGetJobsProps } from '@/src/lib/types';
import { getJobs } from '@/src/lib/jobs';

export async function GET(
  _request: NextRequest,
  { params }: TGetJobsProps,
): Promise<NextResponse> {
  const jobsList: TJob[] | undefined = await getJobs(params.lang);

  if (!jobsList) {
    return NextResponse.json(
      {
        success: true,
        message: 'Job Not Found!',
        data: null,
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: 'Jobs Lists',
      data: jobsList,
    },
    {
      status: 200,
    },
  );
}
