import React, { useEffect, useState } from 'react';
import Link from "next/link"
import Fa from './../public/assets/imgs/flog/fa.png'
import En from './../public/assets/imgs/flog/en.png'
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const { texts, NewsCat } = useSelector((state) => state);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const [navSize, setnavSize] = useState("6rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#404040") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("4rem") : setnavSize("6rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      dispatch({
        type: 'CHANGE_LANGUAGE',
        payload: {
          language: storedLanguage,
          texts: storedLanguage === 'fa' ? require('./locales/localFa.json') : require('./locales/localEn.json')
        },
      });
    }
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleLanguageChange = (newLanguage) => {
    if (newLanguage === 'fa') {
      dispatch({
        type: 'CHANGE_LANGUAGE',
        payload: { language: 'fa', texts: require('./locales/localFa.json') },
      });
    } else if (newLanguage === 'en') {
      dispatch({
        type: 'CHANGE_LANGUAGE',
        payload: { language: 'en', texts: require('./locales/localEn.json') },
      })
      dispatch({
        type: 'SET_NEWSCAT',
        payload: newLanguage === 'fa' ? 7 : 47,
      });;
    }
    localStorage.setItem('preferredLanguage', newLanguage);
    setDropdownOpen(false);
  };


  return (
    <header className="header-4 bg-transparent sticky-bar mt-0 wow animate__animated animate__fadeIn fix-header">
      <div className=" bg-transparent">
        <nav className="bg-transparent flex justify-between items-center py-3" style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}>

          <div className='container flex'>

            <Link href='/' className="text-3xl leading-none mx-3">
              <img
                className="h-12"
                src="../../assets/imgs/logos/logo-irnic.fa.png"
                alt=""
              />
            </Link>

            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12 ">

              <div className="dropdown dropdown-end mr-6 dropdown-hover h-6">
                <label tabIndex={0} className="text-sm  text-white hover:text-white cursor-pointer block h-8"> {texts.ProjectName} </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-md bg-base-100 rounded-box w-52">
                  <li><Link href='/rules_contracts'>{texts.Regulations_contracts}</Link></li>
                  <li><Link href='/faq'> {texts.Frequently_Questions} </Link></li>
                  <li><Link href='/'>  {texts.Online_Support}  </Link></li>
                  <li><Link href='/contact'>  {texts.Contact}  </Link></li>
                  <li><Link href='/list_resellers'>  {texts.List_Resellers}  </Link></li>
                  <li><Link href='/statistics'>  {texts.Statistics}  </Link></li>
                </ul>
              </div>

              <div className="dropdown dropdown-end dropdown-hover h-6">
                <label tabIndex={0} className="text-sm  text-white hover:text-white cursor-pointer block h-8"> {texts.Sales_representatives} </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-md bg-base-100 rounded-box w-52">
                  <li><Link href='/list_resellers'>  {texts.List_Resellers}  </Link></li>
                  <li><Link href='/'>   {texts.How_Become_Reseller}   </Link></li>
                </ul>
              </div>


              <Link href='/faq'>
                <label tabIndex={0} className="text-sm text-white hover:text-white cursor-pointer ">
                  {texts.Frequently_Asked_Questions}
                </label>
              </Link>


              <Link href='https://services.nic.ir/contact-us'>
                <label tabIndex={0} className="text-sm text-white hover:text-white cursor-pointer">
                  {texts.Suport}
                </label>
              </Link>


              <Link href='/upload_document'>
                <label tabIndex={0} className="text-sm text-white hover:text-white cursor-pointer">
                  {texts.Upload_Documents}
                </label>
              </Link>
            </ul>

            <div className='ms-auto	self-center	'>

              <Link href="/login" >
                <button className="text-white rounded-md text-sm login-btn border-white transition duration-150">
                  {texts.Login} / {texts.SignIn}
                </button>
              </Link>

              <div className="dropdown dropdown-end mx-3">
                <label
                  tabIndex={0}
                  className="btn btn-circle btn-ghost btn-xs text-white basis-1/4 flex"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  <label className="mt-1 font-thin cursor-pointer">{texts.language}</label>
                </label>
                {isDropdownOpen && (
                  <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
                    <div className="card-body">
                      <Link href={'/'} className="flex mb-3 cursor-pointer hover:text-cyan-700" onClick={() => handleLanguageChange("fa")}>
                        <Image src={Fa} className="w-6 mr-1" />
                        <label className="mt-1 cursor-pointer">فارسی</label>
                      </Link>
                      <label className="flex cursor-pointer hover:text-cyan-700" onClick={() => handleLanguageChange("en")}>
                        <Image src={En} className="w-6 mr-1" />
                        <label className="mt-1 cursor-pointer">English</label>
                      </label>
                    </div>
                  </div>
                )}
              </div>



            </div>


          </div>


          {/* </div> */}
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>منو موبایل</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
