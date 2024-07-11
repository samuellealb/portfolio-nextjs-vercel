import { client } from "@/src/lib/client";
import { gql } from "graphql-tag";
import { NextRequest, NextResponse } from "next/server";
import { GetCategoriesProps, Job } from "../../types";

export async function GET(
  _request: NextRequest,
  { params }: GetCategoriesProps
): Promise<NextResponse> {
  const job: Job[] = await client
    .query({
      query: gql`
        query GetJobsByCategory($slug: String!) {
          jobCollection(where: { category: { slug: $slug } }) {
            items {
              slug
              title
              cover {
                url
                title
              }
              sys {
                id
              }
              categoryCollection {
                items {
                  slug
                }
              }
            }
          }
        }
      `,
      variables: {
        slug: params.slug,
      },
    })
    .then((response) => {
      return response.data.jobCollection.items;
    });

  if (!job.length) {
    return NextResponse.json(
      {
        success: true,
        message: "Job Not Found!",
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
      message: "Detail Data Job",
      data: job,
    },
    {
      status: 200,
    }
  );
}
