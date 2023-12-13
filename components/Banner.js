import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BannerBotton from './bannerBotton';

export default function Banner() {

  const { texts } = useSelector((state) => state);
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    const url = `https://whois.nic.ir/WHOIS?name=${searchText}`;
    window.open(url, "_blank");
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };



  return (
    <>
      <section
        className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24 bg-fixed	"
        style={{
          backgroundImage: 'url("../../assets/imgs/backgrounds/shutterstoc2.jpg")',
        }}>
        <div className="hidden md:block absolute top-0 left-0 mt-32">
        </div>
        <div className="hidden md:block absolute top-0 right-0 mt-32">
        </div>
        <div className="container" style={{
          height: '80vh'
        }}>
          <div className="mt-48 mb-12 ">
            <div className="max-w-2xl	 mx-auto mb-8 text-center">

              <h2 className="text-white text-2xl lg:text-2xl mb-4 mt-12 font-heading wow animate__animated animate__fadeIn pt-24" >
                <span className="text-white"> {texts.To} </span>

                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-600 relative inline-block">
                  <span className="relative text-white"> {texts.ProjectName} </span>
                </span>
                <span className="text-white">
                  {" "}
                  {texts.Description_the_project_name}{" "}
                </span>
                <span className="text-cyan"> {texts.dotIr} </span>
                <br />
                <span className="text-cyan">
                  {texts.and}
                  {texts.dotIran}
                </span>
                <span className="text-white"> {texts.Top_Level} </span>
              </h2>
            </div>
            <div className="max-w-2xl mx-auto text-center mt-24">

              <div className='w-full bg-white rounded'>
                <div className='form flex h-14'>
                  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" className='self-center mr-4' width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <rect x="0" y="0" width="24" height="24" />
                      <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                      <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#0891b2" fill-rule="nonzero" />
                    </g>
                  </svg>

                  <input
                    className="w-full py-4 text-xs placeholder-gray-500 bg-white leading-none bg-blueGray-50 outline-none"
                    type="email"
                    onChange={handleInputChange}
                    placeholder={texts.The_desired_domain}
                  />

                  <button className='w-1/3 bg-cyan text-white my-2 mx-2 hover:bg-cyan-200 transition' onClick={handleSearchClick}>
                    {texts.search}
                  </button>
                </div>
              </div>
              {/* <div className="flex flex-wrap">
              
                <div className="flex flex-1 mb-4 lg:mr-4 px-4 rounded bg-blueGray-50 wow animate__animated animate__fadeIn">
                  <input
                    className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="email"
                    onChange={handleInputChange}
                    placeholder={texts.The_desired_domain}
                  />
                </div>
                <div className="w-full lg:w-auto wow animate__animated animate__fadeIn">
                  <Link
                    onClick={handleSearchClick}
                    className="block w-full py-4 px-6 mb-2 lg:w-auto text-xs text-white font-semibold leading-none bg-cyan-200 hover:bg-cyan-100 rounded transition duration-150"
                    href="/">
                    {texts.search}
                  </Link>
                </div>
              </div> */}

            </div>
          </div>

          <div className="relative h-32 w-full">
            <div className="absolute inset-x-0 bottom-16 md:bottom-7 h-16">
              <hr className='style5 mt-40' />
              {/* <label className='text-white'>test</label> */}
              <div className="flex flex-row text-center text-white">

                {/* <div className="basis-1/4">
                  <div className='mt-2 flex'>
                    <div className="flex flex-row m-auto">
                      <div className="basis-1/2">
                        <h1 className='font-bold text-2xl md:text-3xl m-1'>160188</h1>
                      </div>
                      <div className="basis-1/2 m-auto flex">
                        <label className='text-xs text-start float-right '>{texts.Total_domain} ir</label>
                      </div>
                    </div>
                  </div>
                </div> */}


                <BannerBotton number = {160188} infoNumber={texts.Total_domain} domainName={" ir"}/>
                <BannerBotton number = {4300} infoNumber={texts.Total_domain} domainName={" co.ir	"}/>
                <BannerBotton number = {1520} infoNumber={texts.Total_domain} domainName={" ایران	"}/>
                <BannerBotton number = {160201} infoNumber={texts.Number_active_domains}/>

                {/* <div className="basis-1/4">
                  <div className='mt-2 flex'>
                    <div className="flex flex-row m-auto">
                      <div className="basis-1/2 ">
                        <h1 className='font-bold text-2xl md:text-3xl m-1'>4300</h1>
                      </div>
                      <div className="basis-1/2 m-auto flex">
                        <label className='text-xs text-start float-right'>{texts.Total_domain} co.ir	</label>
                      </div>
                    </div>
                  </div>
                </div> */}


{/* 
                <div className="basis-1/4">
                  <div className='mt-2 flex'>
                    <div className="flex flex-row m-auto">
                      <div className="basis-1/2">
                        <h1 className='font-bold text-2xl md:text-3xl m-1'>1520</h1>
                      </div>
                      <div className="basis-1/2 m-auto flex">
                        <label className='text-xs text-start float-right'>{texts.Total_domain} ایران	</label>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="basis-1/4">
                  <div className='mt-2 flex'>
                    <div className="flex flex-row m-auto">
                      <div className="basis-1/2">
                        <h1 className='font-bold text-2xl md:text-3xl m-1'>160201</h1>
                      </div>
                      <div className="basis-1/2 m-auto flex">
                        <label className='text-xs text-start float-right'>{texts.Number_active_domains}</label>
                      </div>
                    </div>
                  </div>
                </div> */}


              </div>
            </div>
          </div>

        </div>
      </section>
    </>

  )
}
