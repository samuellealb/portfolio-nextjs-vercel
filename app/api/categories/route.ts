import { client } from "@/src/lib/client";
import { gql } from "graphql-tag";
import { NextRequest, NextResponse } from "next/server";
import { Category } from "../types";

export async function GET(_request: NextRequest): Promise<NextResponse> {

  const CategoriesList: Category[] | undefined = await client
    .query({
      query: gql`
        query GetCategories {
          categoryCollection {
            items {
              sys {
                id
              }
              label
              slug
            }
          }
        }
      `,
    })
    .then((response) => {
      return response.data.categoryCollection.items.test;
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
      data: CategoriesList as Category[],
    },
    {
      status: 200,
    }
  );
}
