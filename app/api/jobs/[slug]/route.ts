import { NextRequest, NextResponse } from "next/server";
import { client } from "@/src/lib/client";
import { gql } from "graphql-tag";
import { GetJobsProps, Job } from "../../types";

export async function GET(
  _request: NextRequest,
  { params }: GetJobsProps
): Promise<NextResponse> {
  const job: Job | undefined = await client
    .query({
      query: gql`
        query GetJobBySlug($slug: String!) {
          jobCollection(where: { slug: $slug }, limit: 1) {
            items {
              sys {
                id
              }
              title
              slug
              genre
              duration
              location
              year
              categoryCollection(limit: 10) {
                items {
                  slug
                  label
                }
              }
              cover {
                url
                title
              }
              trailer {
                json
              }
              galleryCollection(limit: 10) {
                items {
                  title
                  url
                }
              }
              sinopsis {
                json
              }
              crew {
                json
              }
              awardsAndExhibitions {
                json
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
      return response.data.jobCollection.items[0];
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
