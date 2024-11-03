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

  if (!CategoriesList) {
    return NextResponse.json(
      {
        success: true,
        message: 'Category Not Found!',
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
      message: 'Categories Lists',
      data: CategoriesList as TCategory[],
    },
    {
      status: 200,
    },
  );
}
