import { NextResponse, NextRequest } from 'next/server';
import { TCategory, TGetCategoriesProps } from '@/src/lib/types';
import { getCategories } from '@/src/lib/categories';

export async function GET(
  _request: NextRequest,
  { params }: TGetCategoriesProps,
): Promise<NextResponse> {
  const CategoriesList: TCategory[] | undefined = await getCategories(
    params.lang,
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
