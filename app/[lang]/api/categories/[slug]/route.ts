import { NextRequest, NextResponse } from 'next/server';
import { TGetCategoriesProps, TJob } from '@/src/lib/types';
import { getCategory } from '@/src/lib/categories';

export async function GET(
  _request: NextRequest,
  { params }: TGetCategoriesProps,
): Promise<NextResponse> {
  const job: TJob[] = await getCategory(params.slug, params.lang);

  if (!job.length) {
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
