const Asw01 = () => {
  return (
    <>
      <h1 className="mx-auto py-1 text-center bg-green-100 text-xl">
        ASW01_背景画像をどこから取得するかの実験_01<br/>
        <span className="text-lg">画像ファイルは/public直下に配置</span>
      </h1>
      <section> 
        <div>
          <div className="w-full xl:bg-cover bg-contain h-screen bg-no-repeat"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/asw_01_top.jpg'})`}}>
            <p className="text-white text-3xl p-12">白い文字をのせました</p>
            <div className=" bg-black rounded-xl opacity-50 w-96 mx-auto p-3">
              <p className="text-red-300 opacity-100 ">className="w-full bg-contain xl:bg-cover h-screen bg-no-repeat"<br/>
                  style={'{{ backgroundImage: `url(${process.env.PUBLIC_URL + '}{"'/asw_01_top.jpg'})`}}"}
              </p>
            </div>
          </div>
          <div className="mx-auto py-1 text-center bg-green-100 text-xl">
              ASW01_背景画像をどこから取得するかの実験_02<br/>
              <span className="text-lg">画像ファイルは外部Wordpressにある</span>
            </div>
            {/* https://dev-01.adsignweb.com/wp-content/uploads/2022/12/asw_01_mission.jpg */}
            <div className="w-full xl:bg-cover bg-contain h-screen bg-no-repeat"  style={{ backgroundImage: `url("https://dev-01.adsignweb.com/wp-content/uploads/2022/12/asw_01_mission.jpg")`}}>

            </div>
            
        </div> 
      </section>

      <section>
     </section>
    </>
  );
};

export default Asw01;
