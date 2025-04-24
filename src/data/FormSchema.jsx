const formSchema = [
    {
      sectionTitle: "Personal Details",
      fields: [
        {
          label: "Name",
          type: "text",
          name: "name",
          required: true,
        },
        {
          label: "Gender",
          type: "radio",
          name: "gender",
          options: ["Male", "Female", "Other"],
        }
      ]
    },
    {
      sectionTitle: "Location",
      fields: [
        {
          label: "Country",
          type: "dropdown",
          name: "country",
          options: ["India", "USA", "UK"],
        },
        {
          label: "State",
          type: "text",
          name: "state"
        }
      ]
    },
    {
      sectionTitle: "Feedback",
      fields: [
        {
          label: "Comments",
          type: "textarea",
          name: "comments"
        }
      ]
    }
  ];
  
  export default formSchema;
  