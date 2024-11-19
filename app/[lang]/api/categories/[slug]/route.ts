import { NextRequest, NextResponse } from 'next/server';
import { TGetCategoriesProps, TJob } from '@/src/lib/types';
import { getCategory } from '@/src/lib/categories';

export async function GET(
  _request: NextRequest,
  { params }: TGetCategoriesProps,
): Promise<NextResponse> {
  const job: TJob[] = await getCategory(params.slug, params.lang);

  const response = NextResponse.json(
    {
      success: true,
      message: job.length ? 'Detail Data Job' : 'Job Not Found!',
      data: job.length ? job : null,
    },
    {
      status: job.length ? 200 : 404,
    },
  );

  return response;
}
