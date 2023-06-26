import { navLinks } from '../../constants/index';
import { logoblack, instagram, githubfooter, linkedinfooter } from '../../assets/assets/index';

const Footer = () => {
  const handleScrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <footer className="text-center bg-primary mt-20 text-white py-16 border-t-4 border-white">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/4 mb-4">
          <div className="flex flex-col items-center mb-5 mt-8">
            <a
              href="/"
              onClick={handleScrollToTop}
              className="flex items-center gap-2"
            >
              <img
                src={logoblack}
                alt="logo"
                className="w-12 h-12 object-contain rounded-full"
              />
              <p className="text-white text-[22px] font-bold cursor-pointer">
                Jann Fanzun
              </p>
            </a>
          </div>
          <ul className="flex justify-center p-4 gap-2 flex-wrap sm:flex-nowrap">
            {navLinks.map((link) => (
              <li key={link.id} className="mr-8">
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4 p-4 gap-4">
  <a href="https://www.instagram.com/jann.fanzun/">
    <img src={instagram} alt="Instagram" className="w-8 h-8 mx-2 cursor-pointer" />
  </a>
  <a href="https://github.com/jannfanzun">
    <img src={githubfooter} alt="GitHub" className="w-8 h-8 mx-2 cursor-pointer" />
  </a>
  <a href="https://www.linkedin.com/in/jann-fanzun-a5b5191a2/">
    <img src={linkedinfooter} alt="LinkedIn" className="w-8 h-8 mx-2 cursor-pointer" />
  </a>
</div>

        </div>
      </div>
      <div className="text-center mt-4 pb-40">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Jann Fanzun. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
