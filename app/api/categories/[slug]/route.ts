import { jobs } from "../../mocks";
import { client } from "@/src/lib/client";
import { gql } from "graphql-tag";
import { NextRequest, NextResponse } from "next/server";
import { GetCategoriesProps, Job } from "../../types";

export async function GET(
  _request: NextRequest,
  { params }: GetCategoriesProps
): Promise<NextResponse> {
  let job

  await client
    .query({
      query: gql`
        query GetAllJobs {
          jobCollection {
            items {
              slug
              title
              cover {
                url
                title
              }
              sys {
                id
                locale
              }
            }
          }
        }
      `,
    })
    .then((response) =>{
      job = response.data.jobCollection.items
    });

  if (!job) {
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
