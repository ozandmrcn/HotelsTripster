import type { FC } from "react";
import Hero from "./Hero";
import Filter from "./Filter";
import List from "./List";

const Home: FC = () => {
  return (
    <div className="container my-5 mx-auto">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-4 max-lg:mt-10 gap-5">
        <div>
          <Filter />
        </div>
        <div className="lg:col-span-3 w-full">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
