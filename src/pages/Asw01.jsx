const Asw01 = () => {
  return (
    <>
      <h1 className="my-4 mx-auto text-center bg-green-100 text-2xl">
        ASW01_背景画像の実験1_幅変化に対応し背景も追従
      </h1>
      <section> 
        <div>
          <div className="w-full bg-contain xl:bg-cover h-screen bg-no-repeat"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/asw_01_top.jpg'})`}}>
            <p className="text-white text-3xl p-12">白い文字をのせました</p>
            <div className=" bg-black rounded-xl opacity-50 w-6/12 mx-auto p-3">
              <p className="text-red-300 opacity-100 ">className="w-full bg-contain xl:bg-cover h-screen bg-no-repeat"<br/>
                  style={'{{ backgroundImage: `url(${process.env.PUBLIC_URL + '}{"'/asw_01_top.jpg'})`}}"}
              </p>
            </div>
          </div>
    
        </div>
      </section>
    </>
  );
};

export default Asw01;
