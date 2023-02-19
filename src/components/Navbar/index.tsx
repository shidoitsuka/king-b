import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <nav className="w-full py-3 bg-secondary">
      <div className="container text-3xl flex justify-between items-center">
        <div className="flex gap-6">
          <div className="my-auto cursor-pointer" onClick={() => location.href = "/"}>
            <img className="w-16 invert" src="/logo.png" alt="Logo" />
          </div>
          <div className="hidden md:flex gap-6">
            <div>
              <p className="desc text-primary text-lg">Delivery</p>
              <a className="text-white" href="#">Order</a>
            </div>
            <div>
              <p className="desc text-primary text-lg">Check Out</p>
              <a className="text-white" href="#">Our Menu</a>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <a className="text-white text-2xl my-auto" href="/login">Login</a>
          <button className="btn-primary"><ShoppingCartOutlinedIcon /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
