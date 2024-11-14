import { NextRequest, NextResponse } from 'next/server';
import { getJob } from '@/src/lib/jobs';
import { TGetJobsProps, TJob } from '@/src/lib/types';

export async function GET(
  _request: NextRequest,
  { params }: TGetJobsProps,
): Promise<NextResponse> {
  const job: TJob | undefined = await getJob(params.slug, params.lang);

  const response = NextResponse.json(
    {
      success: true,
      message: job ? 'Detail Data Job' : 'Job Not Found!',
      data: job || null,
    },
    {
      status: job ? 200 : 404,
    },
  );

  response.headers.set('Cache-Control', 'no-store');
  return response;
}
