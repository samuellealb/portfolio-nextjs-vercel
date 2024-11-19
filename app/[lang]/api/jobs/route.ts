import { NextResponse, NextRequest } from 'next/server';
import { TJob, TGetJobsProps } from '@/src/lib/types';
import { getJobs } from '@/src/lib/jobs';

export async function GET(
  _request: NextRequest,
  { params }: TGetJobsProps,
): Promise<NextResponse> {
  const jobsList: TJob[] | undefined = await getJobs(params.lang);

  const response = NextResponse.json(
    {
      success: true,
      message: jobsList ? 'Jobs Lists' : 'Job Not Found!',
      data: jobsList || null,
    },
    {
      status: jobsList ? 200 : 404,
    },
  );

  return response;
}
