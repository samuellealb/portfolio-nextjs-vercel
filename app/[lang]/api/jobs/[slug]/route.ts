import { NextRequest, NextResponse } from 'next/server';
import { getJob } from '@/src/lib/jobs';
import { TGetJobsProps, TJob } from '@/src/lib/types';

export async function GET(
  _request: NextRequest,
  { params }: TGetJobsProps,
): Promise<NextResponse> {
  const job: TJob | undefined = await getJob(params.slug, params.lang);

  if (!job) {
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
      message: 'Detail Data Job',
      data: job,
    },
    {
      status: 200,
    },
  );
}