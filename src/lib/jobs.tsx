import { Job } from "@/src/lib/types";
import { client } from "@/src/lib/client";
import { gql } from "graphql-tag";

export async function getJobs(): Promise<Job[]> {
  return client
    .query({
      query: gql`
        query GetAllJobs {
          jobCollection {
            items {
              slug
              cover {
                url
                title
              }
              sys {
                id
                locale
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
    })
    .then((response) => {
      return response.data.jobCollection.items;
    });
}

export async function getJob(slug: string): Promise<Job> {
  return client
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
        slug: slug,
      },
    })
    .then((response) => {
      return response.data.jobCollection.items[0];
    });
}
