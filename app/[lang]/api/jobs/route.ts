import { NextResponse, NextRequest } from 'next/server';
import { TJob } from '@/src/lib/types';
import { getJobs } from '@/src/lib/jobs';
import { Locale } from '@/i18n-config';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<NextResponse> {
  const { lang } = await params;
  const jobsList: TJob[] | undefined = await getJobs(lang as Locale);

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
