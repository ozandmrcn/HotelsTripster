import type { FC } from "react";
import { Link } from "react-router-dom";
import { usePlaces } from "../../utils/service";

const Header: FC = () => {
  const { data } = usePlaces();

  return (
    <header className="border-b border-zinc-300">
      <div className="container flex justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="font-bold text-xl md:2xl">Tripster</h1>

          <nav className="flex gap-5 items-center">
            <Link to="/">Hotels ({data?.length || 0})</Link>
            <Link to="/" className="max-md:hidden">
              Popullar
            </Link>
            <Link to="/form/create">Create</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">
            Sign In
          </button>
          <button className="bg-blue-500 text-white rounded-full py-1 px-5">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
