import { NextResponse } from 'next/server';
import { Job } from '@/src/lib/types';
import { getJobs } from '@/src/lib/jobs';

export async function GET(): Promise<NextResponse> {
  const jobsList: Job[] | undefined = await getJobs();

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
