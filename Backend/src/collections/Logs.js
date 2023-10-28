/** @type {import('payload/types').CollectionConfig} */
const Logs = {
    slug : "logs",
    access : {
      create : () => false,
      read : () => true,
      update: () => false,
      delete: () => true,
    },
    fields : [
      {
        name: 'type',
        label: 'Type',
        required: true,
        type: 'text',
      },
      {
        name: 'Name',
        label: 'Title',
        type: 'text',
        required : true,
      },
      {
        name: 'Action',
        type: 'text',
        required: true,
      }
    ]
  }
  
  export default Logs