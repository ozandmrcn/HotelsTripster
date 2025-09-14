import type { FC } from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Detail from "./pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<Detail />} />
        <Route path="/form/create" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
