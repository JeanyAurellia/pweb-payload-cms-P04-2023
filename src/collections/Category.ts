import { CollectionConfig } from 'payload/types'

const Category: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'category',
      type: 'radio',
      options: [
          {
              label: 'Urgent',
              value: 'urgent',
          },
          {
              label: 'Not Urgent',
              value: 'not_urgent',
          },
      ],
      defaultValue: 'not_urgent',
      admin: {
          layout: 'horizontal',
      },
    },
  ],
}

export default Category
