import { categories } from "../mocks";
import { NextRequest, NextResponse } from "next/server";
import { Category } from "../types";

export async function GET(_request: NextRequest): Promise<NextResponse> {

  // TODO: replace with Contentful API
  const CategoriesList = await new Promise<Category[] | undefined>((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1000);
  });

  if (!CategoriesList) {
    return NextResponse.json(
      {
        success: true,
        message: "Category Not Found!",
        data: null,
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Categories Lists",
      data: CategoriesList,
    },
    {
      status: 200,
    }
  );
}
