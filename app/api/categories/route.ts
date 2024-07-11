import { client } from "@/src/lib/client";
import { gql } from "graphql-tag";
import { NextRequest, NextResponse } from "next/server";
import { Category } from "../types";
import { getCategories } from "@/src/lib/categories";

export async function GET(_request: NextRequest): Promise<NextResponse> {

  const CategoriesList: Category[] | undefined = await getCategories();

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
      data: CategoriesList as Category[],
    },
    {
      status: 200,
    }
  );
}
