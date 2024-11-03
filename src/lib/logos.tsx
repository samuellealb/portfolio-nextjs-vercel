import { client } from '@/src/lib/client';
import { gql } from 'graphql-tag';
import { IGetLogoProps } from '@/src/lib/types';

export async function getLogos(): Promise<IGetLogoProps> {
  return client
    .query({
      query: gql`
        query GetLogos {
          brandImagesCollection {
            items {
              headerDesktop {
                url
                title
              }
              headerListPage {
                url
                title
              }
              headerMobile {
                url
                title
              }
              footerDesktop {
                url
                title
              }
              footerMobile {
                url
                title
              }
            }
          }
        }
      `,
    })
    .then((response) => {
      return response.data.brandImagesCollection.items[0];
    });
}
