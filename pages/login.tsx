const Login = () => {
  return (
    <main className="w-full mt-10">
      <div className="container flex justify-center items-center">
        <div className="border bg-white border-primary shadow-lg rounded-lg p-12">
          <h1 className="text-accent text-4xl text-center mb-4 border-b border-b-primary pb-2">Welcome!</h1>
          <div className="mb-4">
            <input className="px-6 py-2 w-full rounded-lg border border-primary" type="text" placeholder="username" />
          </div>
          <div className="mb-4">
            <input className="px-6 py-2 w-full rounded-lg border border-primary" type="password" placeholder="password" />
          </div>
          <div className="mb-4 border-b border-b-primary pb-8">
            <button className="btn-primary w-full py-3">Login</button>
            <a href="#" className="desc"><span className="text-gray-600">Not registered?</span> Sign Up</a>
          </div>
          <div className="text-gray-600 text-center">
            <p className="mb-4">
              Enjoy <span className="text-primary">exclusive deals</span> by becoming a member!
            </p>
            <div className="w-full h-56 overflow-scroll flex snap-x snap-mandatory rounded-lg">
              <img src="https://picsum.photos/600/1306" className="w-full h-full object-cover shrink-0 snap-center" alt="Deals" />
              <img src="https://picsum.photos/600/1307" className="w-full h-full object-cover shrink-0 snap-center" alt="Deals" />
              <img src="https://picsum.photos/600/1308" className="w-full h-full object-cover shrink-0 snap-center" alt="Deals" />
              <img src="https://picsum.photos/600/1309" className="w-full h-full object-cover shrink-0 snap-center" alt="Deals" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
