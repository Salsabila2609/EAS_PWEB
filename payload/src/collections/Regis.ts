/** @type {import('payload/types').CollectionConfig} */
const regis = {
    slug: "regis",
    access: {
      read: () => true,
      update: () => true,
      delete: () => true,
      create: () => true,
    },
    fields: [
      {
        name: "nama",
        type: "text",
        required: true,
      },
      {
        name: "email",
        type: "text",
        required: true,
        unique: true,
      },
      {
        name: "sekolah",
        type: "text",
        required: true,
      },
      {
        name: "status",
        type: "select",
        options: ["Waiting", "Rejected", "Accepted"],
        defaultValue: "Waiting",
        required: true,
      },
      {
        name: "tanggal",
        type: "date",
        admin: {
          date: {
            pickerAppearance: "dayOnly",
            displayFormat: "d MMM yyy",
          },
        },
        required: true,
      },
    ],
  };
  
  export default regis;
  