import { Job } from '@/src/lib/types';
import { client } from '@/src/lib/client';
import { gql } from 'graphql-tag';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export async function getJobs(): Promise<Job[]> {
  return client
    .query({
      query: gql`
        query GetAllJobs {
          jobCollection {
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
              videoEmbedCode
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
      const job = response.data.jobCollection.items[0];
      let modifiedJob = { ...job };

      if (job.sinopsis) {
        modifiedJob.sinopsis = documentToHtmlString(job.sinopsis.json);
      }

      if (job.crew) {
        modifiedJob.crew = documentToHtmlString(job.crew.json);
      }

      if (job.awardsAndExhibitions) {
        modifiedJob.awardsAndExhibitions = documentToHtmlString(
          job.awardsAndExhibitions.json,
        );
      }

      return modifiedJob;
    });
}
