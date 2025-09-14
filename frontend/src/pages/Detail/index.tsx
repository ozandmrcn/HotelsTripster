import type { FC } from "react";
import { useParams } from "react-router-dom";
import { usePlace } from "../../utils/service";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Container from "./Container";
import Images from "./Images";
import Info from "./Info";
import Button from "./Button";

const Detail: FC = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = usePlace(id as string);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error.message} refetch={refetch} />
      </Container>
    );

  if (!data) return null;

  return (
    <Container>
      <Images image={data?.image_url} />
      <Info place={data} />
      <Button id={id as string} />
    </Container>
  );
};

export default Detail;
