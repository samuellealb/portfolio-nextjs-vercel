import { TJob } from '@/src/lib/types';
import { client } from '@/src/lib/client';
import { gql } from 'graphql-tag';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Locale } from '@/i18n-config';

export async function getJobs(locale: Locale): Promise<TJob[]> {
  return client
    .query({
      query: gql`
        query GetAllJobs($locale: String!) {
          jobCollection(locale: $locale) {
            items {
              slug
              thumbnail {
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
      variables: {
        locale: locale,
      },
    })
    .then((response) => {
      return response.data.jobCollection.items;
    });
}

export async function getJob(slug: string, locale: Locale): Promise<TJob> {
  return client
    .query({
      query: gql`
        query GetJobBySlug($slug: String!, $locale: String!) {
          jobCollection(where: { slug: $slug }, limit: 1, locale: $locale) {
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
                width
                height
              }
              videoEmbedCode
              galleryCollection(limit: 10) {
                items {
                  sys {
                    id
                  }
                  title
                  url
                  width
                  height
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
        locale: locale,
      },
    })
    .then((response) => {
      const job = response.data.jobCollection.items[0];
      let modifiedJob = { ...job };

      if (job?.sinopsis) {
        modifiedJob.sinopsis = documentToHtmlString(job.sinopsis.json);
      }

      if (job?.crew) {
        modifiedJob.crew = documentToHtmlString(job.crew.json);
      }

      if (job?.awardsAndExhibitions) {
        modifiedJob.awardsAndExhibitions = documentToHtmlString(
          job.awardsAndExhibitions.json,
        );
      }

      return modifiedJob;
    });
}

export async function getAllJobSlugs(): Promise<string[]> {
  return client
    .query({
      query: gql`
        query GetAllJobSlugs {
          jobCollection {
            items {
              slug
            }
          }
        }
      `,
    })
    .then((response) => {
      return response.data.jobCollection.items.map(
        (item: { slug: string }) => item.slug,
      );
    });
}
