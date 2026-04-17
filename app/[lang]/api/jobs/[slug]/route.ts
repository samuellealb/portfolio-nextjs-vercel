import { NextRequest, NextResponse } from 'next/server';
import { getJob } from '@/src/lib/jobs';
import { TGetJobsProps, TJob } from '@/src/lib/types';
import { Locale } from '@/i18n-config';

export async function GET(
  _request: NextRequest,
  { params }: TGetJobsProps,
): Promise<NextResponse> {
  const { slug, lang } = await params;
  const job: TJob | undefined = await getJob(slug, lang as Locale);

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

  return response;
}
