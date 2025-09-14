import type { FC } from "react";
import { usePlaces } from "../../utils/service";
import Card from "./../../components/Card/index";
import { useSearchParams } from "react-router-dom";
import type { FilterParams } from "../../types";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const List: FC = () => {
  const [searchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());

  const { data, isLoading, error, refetch } = usePlaces(
    paramsObject as FilterParams
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error.message} refetch={refetch} />;
  }

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Near Locations</h1>

      <div className="grid gap-5 mt-5">
        {data?.length === 0 || !data ? (
          <div>
            <p>We couldn’t find any results for your search criteria</p>
          </div>
        ) : (
          data?.map((place) => <Card key={place.id} place={place} />)
        )}
      </div>
    </div>
  );
};

export default List;
