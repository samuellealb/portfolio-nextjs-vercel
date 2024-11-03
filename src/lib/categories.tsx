import { client } from '@/src/lib/client';
import { gql } from 'graphql-tag';
import { TCategory, TJob } from '@/src/lib/types';

export async function getCategories(): Promise<TCategory[] | undefined> {
  const { data } = await client.query({
    query: gql`
      query {
        categoryCollection(order: sys_publishedAt_DESC) {
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

export async function getCategory(slug: string): Promise<TJob[]> {
  const { data } = await client.query({
    query: gql`
      query GetJobsByCategory($slug: String!) {
        jobCollection(where: { category: { slug: $slug } }) {
          items {
            slug
            title
            thumbnail {
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
