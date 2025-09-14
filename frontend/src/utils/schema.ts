import * as yup from "yup";

const nameRegex = /^[A-Za-z\s]+$/;

const hotelSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(40, "Name must be at most 40 characters")
    .matches(nameRegex, "Name can only contain letters and spaces"),

  location: yup
    .string()
    .required("Location is required")
    .min(3, "Location must be at least 3 characters")
    .max(40, "Location must be at most 40 characters"),

  address: yup
    .string()
    .required("Address is required")
    .min(3, "Address must be at least 3 characters")
    .max(40, "Address must be at most 40 characters"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description must be at most 200 characters"),

  amenities: yup.string().required("Amenities are required"),

  rating: yup
    .number()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),

  price_per_night: yup
    .number()
    .required("Price per night is required")
    .min(1, "Price per night must be at least 1$")
    .max(90000, "Price per night must be at most 90000$"),

  availability: yup.boolean(),
});

export { hotelSchema };
