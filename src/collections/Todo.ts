import { CollectionConfig } from 'payload/types';

const Todo: CollectionConfig = {
  slug: 'todos',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
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
      name: 'deadlineTime',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'h:mm a',
        },
      },
    },
    {
      name: 'category',
      type: 'relationship',
      label: 'Category',
      relationTo: 'categories',
    },
    {
      name: 'status',
      type: 'radio',
      options: [
        {
          label: 'Not Yet',
          value: 'not_yet',
        },
        {
          label: 'Done',
          value: 'done',
        },
      ],
      defaultValue: 'not_yet',
      admin: {
        layout: 'horizontal',
      },
    },
  ],
};

export default Todo;
