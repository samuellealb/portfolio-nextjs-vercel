import { NextResponse, NextRequest } from 'next/server';
import { TCategory } from '@/src/lib/types';
import { getCategories } from '@/src/lib/categories';
import { Locale } from '@/i18n-config';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
): Promise<NextResponse> {
  const { lang } = await params;
  const CategoriesList: TCategory[] | undefined = await getCategories(
    lang as Locale,
  );

  const response = NextResponse.json(
    {
      success: true,
      message: CategoriesList ? 'Categories Lists' : 'Category Not Found!',
      data: CategoriesList || null,
    },
    {
      status: CategoriesList ? 200 : 404,
    },
  );

  return response;
}
