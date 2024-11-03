import { TGetSocialIconsProps } from '@/src/lib/types';
import { client } from '@/src/lib/client';
import { gql } from 'graphql-tag';

export async function getSocialIcons(): Promise<TGetSocialIconsProps> {
  return client
    .query({
      query: gql`
        query GetSocialIcons {
          socialIconsCollection {
            items {
              title
              icon {
                url
                width
                height
              }
              url
            }
          }
        }
      `,
    })
    .then((response) => {
      return response.data.socialIconsCollection;
    });
}
