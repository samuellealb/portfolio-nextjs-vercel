import { NextResponse } from 'next/server';
import { TCategory } from '@/src/lib/types';
import { getCategories } from '@/src/lib/categories';

export async function GET(): Promise<NextResponse> {
  const CategoriesList: TCategory[] | undefined = await getCategories();

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
