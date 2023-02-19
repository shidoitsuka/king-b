const Home = () => {
  return (
    <main className="burger-bg bg-gray-200 relative z-10 mb-52 md:mb-44">
      <section className="banner">
        <img src="https://picsum.photos/1200/1305" />
        <img src="https://picsum.photos/1200/1306" />
        <img src="https://picsum.photos/1200/1307" />
        <img src="https://picsum.photos/1200/1308" />
      </section>
      <section className="container">
        <h1 className="text-5xl mb-5">Our Menus</h1>
        <div className="grid grid-cols-2 gap-6">
          {[...Array(5).keys()].map((i) => (
            <div key={i} className="w-full flex h-full p-5 border border-primary bg-glass text-gray-700 col-span-2 shadow-xl rounded-xl gap-6 flex-col xl:flex-row lg:col-span-1">
              <div className="h-56 w-full xl:w-1/3">
                <img src={`https://picsum.photos/200/50${i}`} className="responsive" />
              </div>
              <div className="w-full h-full flex flex-col justify-between lg:w-2/3">
               <div className="mb-4">
                  <h1 className="text-3xl text-primary">Food Title</h1>
                  <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div>
               <div className="flex gap-3 items-center">
                <button className="btn-primary">Order Now</button>
                <span className="text-sm">Rp. 50,000</span>
               </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
