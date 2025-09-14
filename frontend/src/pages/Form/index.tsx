import type { FC } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { hotelSchema } from "../../utils/schema";
import { initialValues, inputFields } from "../../utils/constants";
import type { HotelFormValues } from "../../types";
import { useCreatePlace } from "../../utils/service";

const HotelForm: FC = () => {
  const { mutate, isPending } = useCreatePlace();

  const handeleSubmit = (values: HotelFormValues) => {
    mutate(values);
  };

  return (
    <div className="container">
      <Formik
        validationSchema={hotelSchema}
        initialValues={initialValues}
        onSubmit={handeleSubmit}
      >
        <Form className="maw-2-2xl mx-auto grid gap-10">
          {inputFields.map((i, key) => (
            <div key={key} className="field relative">
              <label htmlFor={i.name}>{i.label}</label>
              <Field
                id={i.name}
                type={i.type}
                name={i.name}
                className="input"
                placeholder={i.placeholder}
              />
              <ErrorMessage
                name={i.name}
                component="div"
                className="text-red-500 absolute text-sm -bottom-7"
              />
            </div>
          ))}
          <button
            disabled={isPending}
            className="my-5 bg-blue-500 py-2 px-6 text-white transition hover:bg-blue-600 rounded-md cursor-pointer"
            type="submit"
          >
            {isPending ? "Sending..." : "Send"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default HotelForm;
