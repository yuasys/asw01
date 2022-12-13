import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Asw01 from "./pages/Asw01";
import Samples from "./pages/Samples";

const homeUrl = process.env.PUBLIC_URL;

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container pb-2 mt-3 border-b mx-auto text-right text-xl">
          <Link
            to={homeUrl + "/home"}
            className="mr-4 p-2 hover:bg-violet-200 transition duration-300"
          >
            ホーム
          </Link>
          <Link
            to={homeUrl + "/samples"}
            className="mr-4 p-2 hover:bg-violet-200 transition duration-300"
          >
            Samples
          </Link>
        </div>
        <Routes>
          <Route path={homeUrl + "/home"} element={<Home />} />
          <Route path={homeUrl + "/asw01"} element={<Asw01 />} />
          <Route path={homeUrl + "/samples"} element={<Samples />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
