import { client } from '@/src/lib/client';
import { gql } from 'graphql-tag';
import { Locale } from '@/i18n-config';

export async function getMaintenanceModeStatus(
  locale: Locale,
): Promise<boolean> {
  return client
    .query({
      query: gql`
        query GetMaintenanceMode($locale: String) {
          maintenanceModeCollection(locale: $locale) {
            items {
              isEnabled
            }
          }
        }
      `,
      variables: {
        locale: locale,
      },
    })
    .then((response) => {
      const hasMaintenanceConfigItem =
        response.data.maintenanceModeCollection.items.length > 0;
      if (hasMaintenanceConfigItem) {
        return response.data.maintenanceModeCollection.items[0].isEnabled;
      } else {
        return false;
      }
    });
}
