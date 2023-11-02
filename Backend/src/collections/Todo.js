import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: 'todos',
  admin: {
    useAsTitle: 'title',
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
              type: 'Todo',
              Name: args.result.title,
              Activity: 'Create',
            },
          });
        }
      },
    ],
    afterChange: [
      async (args) => {
        if (args.operation == 'update') {
          payload.create ({
            collection: 'logs',
            data: {
              type: 'Todo',
              Name: args.doc.title,
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
            type: 'Todo',
            Name: args.doc.title,
            Activity: 'Delete',
          },
        });
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'deadlineDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'category',
      type: 'relationship',
      label: 'Category',
      relationTo: 'Category',
    },
  ],
};

export default Todo;