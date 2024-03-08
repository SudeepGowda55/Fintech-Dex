import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-[99vw] top-0 left-0 right-0 z-10 ">
        <div className="justify-between px-4 md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image
                  width={20}
                  height={20}
                  className="min-w-[125px] h-[15vh] w-[8vw] rounded-3xl inline-block"
                  title="MatCrypt Logo"
                  src="/vercel.svg"
                  alt="Logo"
                />
                <h1 className="invisible sm:visible text-white ml-2 text-2xl font-bold inline-block border-orange-600  md:hover:text-orange-600">
                  FinTech
                </h1>
              </Link>
              <div className="md:hidden outline-none">
                <button className="p-2 text-gray-700 rounded-md outline-none focus:outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                  {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "p-12 md:p-0 block" : "hidden"}`}>
              <ul className="h-screen md:h-auto items-center font-semibold justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="https://www.matcrypt.live/dev/" onClick={() => setNavbar(!navbar)}> Developer Resources </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="https://www.matcrypt.live/news" onClick={() => setNavbar(!navbar)}> Crypto News </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="https://dex.matcrypt.live/" onClick={() => setNavbar(!navbar)}> Decentralized Exchange </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="https://dao.matcrypt.com/" onClick={() => setNavbar(!navbar)}> Multi Chain Wallet </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
