import { client } from '@/src/lib/client';
import { gql } from 'graphql-tag';
import { TCategory, TJob } from '@/src/lib/types';

export async function getCategories(
  locale: string,
): Promise<TCategory[] | undefined> {
  const { data } = await client.query({
    query: gql`
      query GetCategories($locale: String!) {
        categoryCollection(locale: $locale, order: sys_publishedAt_DESC) {
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
    variables: {
      locale: locale,
    },
  });

  return data.categoryCollection.items;
}

export async function getCategory(
  slug: string,
  locale: string,
): Promise<TJob[]> {
  const { data } = await client.query({
    query: gql`
      query GetJobsByCategory($slug: String!, $locale: String!) {
        jobCollection(where: { category: { slug: $slug } }, locale: $locale) {
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
      locale: locale,
    },
  });

  return data.jobCollection.items;
}
