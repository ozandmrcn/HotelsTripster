import type { FC } from "react";
import { usePlaces } from "../../utils/service";
import { sortOptions } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Custom hook to debounce a value
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Filter: FC = () => {
  const { data } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();

  const [title, setTitle] = useState("");
  const debouncedTitle = useDebounce(title, 500);

  const handleChange = (name: string, value: string) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  const handleReset = (): void => {
    setSearchParams({});
  };

  useEffect(() => {
    if (debouncedTitle !== "") {
      handleChange("title", debouncedTitle);
    } else {
      searchParams.delete("title");
      setSearchParams(searchParams);
    }
  }, [debouncedTitle]);

  const locations = data
    ? Array.from(new Set(data.map((item) => item.location)))
    : [];

  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10">
      <div className="field">
        <label htmlFor="location">Where do you want to go?</label>
        <select
          className="input"
          name="location"
          id="location"
          onChange={(e) => handleChange("location", e.target.value)}
        >
          <option value="">Select an option</option>
          {locations?.map((i, key) => (
            <option key={key} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="title">Search for title?</label>
        <input
          className="input"
          type="text"
          name="title"
          id="title"
          placeholder="example: Bungalov"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="order">Sort</label>
        <select
          className="input"
          name="order"
          id="order"
          onChange={(e) => handleChange("order", e.target.value)}
        >
          {sortOptions?.map((i, key) => (
            <option key={key} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>

        <button
          type="reset"
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md transition mt-2 cursor-pointer"
        >
          Clear Filters
        </button>
      </div>
    </form>
  );
};

export default Filter;
