import { client } from "@/src/lib/client";
import { gql } from "graphql-tag";
import { Category, Job } from "@/app/api/types";

export async function getCategories(): Promise<Category[] | undefined> {
  const { data } = await client.query({
    query: gql`
      query {
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
  });

  return data.categoryCollection.items;
}

export async function getCategory(slug: string): Promise<Job[]> {
  const { data } = await client.query({
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
      slug: slug,
    },
  });

  return data.jobCollection.items;
}
