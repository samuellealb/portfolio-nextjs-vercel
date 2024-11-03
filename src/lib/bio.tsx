import { TGetBioProps } from '@/src/lib/types';
import { client } from '@/src/lib/client';
import { gql } from 'graphql-tag';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export async function getBio(id: string): Promise<TGetBioProps> {
  return client
    .query({
      query: gql`
        query GetBio($id: String!) {
          splitPage(id: $id) {
            text {
              json
            }
            image {
              url
              title
              width
              height
            }
            description
            title
          }
        }
      `,
      variables: {
        id: id,
      },
    })
    .then((response) => {
      const profile = response.data.splitPage;
      let modifiedProfile = { ...profile };

      if (profile.text) {
        modifiedProfile.text = documentToHtmlString(profile.text.json);
      }

      return modifiedProfile;
    });
}
