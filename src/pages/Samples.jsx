import { Link } from "react-router-dom";

const Samples = () => {
  return (
    <>
      <h1 className="container my-4 text-center text-2xl">サンプル一覧</h1>
      <div className="container p-2 mx-auto text-center text-xl bg-red-200">
        ここでは、AdSignWebサイトのサンプル一覧を記述します
      </div>
      <div className="container w-4/5 m-2 py-2 mx-auto rounded-lg text-center text-xl bg-violet-200">
         <Link
            to={"/asw01/"}
            className="mr-4 p-2 hover:bg-violet-200 transition duration-300"
          >
            Sample01
          </Link>

      </div>
    </>
  );
};

export default Samples;
