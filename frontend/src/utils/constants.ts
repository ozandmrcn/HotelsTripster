export const sortOptions = [
  {
    label: "Select an option",
    value: "",
  },
  {
    label: "Cheapest",
    value: "price-asc",
  },
  {
    label: "Most Expensive",
    value: "price-desc",
  },
  {
    label: "Best Score",
    value: "rating-desc",
  },
  {
    label: "Worst Score",
    value: "rating-asc",
  },
];

export const initialValues = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  rating: "",
  price_per_night: "",
  availability: false,
};

export const inputFields = [
  { label: "Name", name: "name", placeholder: "Seaside Villa" },
  { label: "Location", name: "location", placeholder: "Miami, FL" },
  {
    label: "address",
    name: "address",
    placeholder: "123 Main St, Miami, FL 33131",
  },
  {
    label: "Description",
    name: "description",
    placeholder: "A beautiful villa",
  },
  { label: "Amenities", name: "amenities", placeholder: "Wifi, Park" },
  { label: "Score", name: "rating", placeholder: "5" },
  { label: "Price per night", name: "price_per_night", placeholder: "$100" },
  {
    label: "Availability (Is there any free room/s?)",
    name: "availability",
    type: "checkbox",
  },
];
