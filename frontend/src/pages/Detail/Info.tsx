import type { FC } from "react";
import type { Place } from "../../types";
import Rating from "../../components/Card/Rating";

interface Props {
  place: Place;
}

const Info: FC<Props> = ({ place }) => {
  return (
    <>
      <div className="flex my-6 justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">{place.name}</h1>
          <p className="text-zinc-600">{place.description}</p>
        </div>

        <div>
          <Rating rating={place.rating} expand />
        </div>
      </div>

      <div>
        <div className="border-b border-zinc-300 pb-2 flex gap-6 text-zinc-500">
          <span className="cursor-pointer text-blue-500">General</span>
          <span className="cursor-pointer">Rooms</span>
          <span className="cursor-pointer">Properties</span>
          <span className="cursor-pointer">Rules</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          <div>
            <h1 className="text-xl font-semibold mb-2">Properties</h1>

            <div className="grid grid-cols-2 gap-5">
              {place.amenities.map((item, key) => (
                <span
                  key={key}
                  className="border border-gray-300 rounded-md p-2 line-clamp-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <iframe
            className="w-full h-full rounded-md"
            src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBsIeyT619QHjkdSUcn_A0c1Bqy0X8yn8s&q=${place.location}`}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Info;
