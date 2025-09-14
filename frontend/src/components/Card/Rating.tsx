import type { FC } from "react";

interface Props {
  rating: number;
  expand?: boolean;
}

const Rating: FC<Props> = ({ rating, expand = false }) => {
  const color: string =
    rating >= 4.7
      ? "bg-green-800"
      : rating >= 4
      ? "bg-green-500"
      : rating >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  const text: string =
    rating >= 4.7
      ? "Excellent"
      : rating >= 4
      ? "Good"
      : rating >= 3
      ? "Average"
      : "Poor";

  return (
    <div>
      <span className={`${color} text-white p-2 rounded-lg font-bold w-fit`}>
        {Number(rating).toFixed(1)}
      </span>

      {expand && <span className="font-semibold text-lg ms-2">{text}</span>}
    </div>
  );
};

export default Rating;
