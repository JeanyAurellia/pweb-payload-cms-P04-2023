import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */

const Category = {
  slug: 'Category',
  admin: {
    useAsTitle: 'name',
  },

  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },

  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == 'create'){
          payload.create ({
            collection: 'logs',
            data: {
              type: 'Category',
              Name: args.result.name,
              Activity: 'Create',
            },
          });
        }
      },
    ],

    afterChange: [
      async (args) => {
        if (args.operation == 'update'){
          payload.create ({
            collection: 'logs',
            data: {
              type: 'Category',
              Name: args.doc.name,
              Activity: 'Update',
            },
          });
        }
      },
    ],

    afterDelete: [
      async (args) => {
        payload.create ({
          collection: 'logs',
          data: {
            type: 'Category',
            Name: args.doc.name,
            Activity: 'Delete',
          },
        });
      },
    ],
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