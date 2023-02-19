import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  return (
    <footer className="w-full bg-secondary fixed bottom-0 z-0">
      <div className="container text-white py-6">
        <p>
          Unofficial King Delivery App
        </p>
        <div className="flex justify-between mt-3 flex-col md:flex-row">
          <div>
            <div>
              <LocalPhoneOutlinedIcon />
              <a href="tel:+628112143000" className="text-lg ml-3">+62 811 - 214 - 3000</a>
            </div>
            <div>
              <EmailOutlinedIcon />
              <a href="mailto:brian@madeit.cool" className="text-lg ml-3">brian@madeit.cool</a>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="https://brian.madeit.cool/" rel="noreferrer" target="_blank">© 2023 | Brian Harianja</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
