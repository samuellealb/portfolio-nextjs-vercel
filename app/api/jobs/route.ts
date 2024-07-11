import { NextRequest, NextResponse } from "next/server";
import { client } from "@/src/lib/client";
import { gql } from "graphql-tag";

export async function GET(_request: NextRequest): Promise<NextResponse> {

  let jobsList

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
      jobsList = response.data.jobCollection.items
    });

  if (!jobsList) {
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
      message: "Jobs Lists",
      data: jobsList,
    },
    {
      status: 200,
    }
  );
}
