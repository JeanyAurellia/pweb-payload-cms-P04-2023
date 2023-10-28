/** @type {import('payload/types').CollectionConfig} */

const Category = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Category Name',
    },
  ],
}

export default Category