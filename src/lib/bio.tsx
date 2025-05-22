import { TGetBioProps } from '@/src/lib/types';
import { client } from '@/src/lib/client';
import { gql } from 'graphql-tag';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Locale } from '@/i18n-config';

export async function getBio(
  id: string,
  locale: Locale,
): Promise<TGetBioProps> {
  return client
    .query({
      query: gql`
        query GetBio($id: String!, $locale: String!) {
          splitPage(id: $id, locale: $locale) {
            sys {
              id
            }
            __typename
            text {
              json
            }
            image {
              url
              title
              width
              height
              sys {
                id
              }
            }
            description
            title
          }
        }
      `,
      variables: {
        id: id,
        locale: locale,
      },
    })
    .then((response) => {
      const profile = response.data.splitPage;
      return {
        ...profile,
        text: profile.text ? documentToHtmlString(profile.text.json) : '',
      };
    });
}
