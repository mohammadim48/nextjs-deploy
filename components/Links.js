import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { useSelector } from 'react-redux';

export default function Links() {
  const { texts } = useSelector((state) => state);
  const [displayedData, setDisplayedData] = useState([]);

  const Links_domins = [
    { name: texts.My_Domains, Description: texts.My_Domains_description },
    { name: texts.domain_registration, Description: texts.domain_registration_description },
    { name: texts.Domain_transfer, Description: texts.Domain_transfer_description },
    { name: texts.Newly_released_domains, Description: texts.Newly_released_domains_description },
  ];

  const _phone = [
    { name: texts.Via_fax_no, Description: '(https://www.nic.ir/Upload_Document)' },
    { name: '۰۲۱-۲۲۲۹-۵۷۰۰', Description: texts.Via_fax_no },
  ];

  const Technical_documentation = [
    { name: texts.International_domains_Persian, Description: '' },
    { name: texts.International_domains_Persian, Description: '' },
    { name: texts.International_domains_Persian, Description: '' },
    { name: texts.International_domains_Persian, Description: '' },

  ];

  const requests = [
    { name: texts.My_requests, Description: texts.My_requests_Description },
  ];

  const [selectedDiv, setSelectedDiv] = useState(null);

  // const [displayedData, setDisplayedData] = useState(Links_domins);

  useEffect(() => {
    // وقتی مقدار texts.My_Domains تغییر کند، می‌توانیم displayedData را به‌روز کنیم.
    setDisplayedData(Links_domins);
  }, [texts.My_Domains]);

  const handleDivClick = (divId) => {
    setSelectedDiv(divId);
    if (divId === 2) {
      setDisplayedData(_phone);
    } else if (divId === 1) {
      setDisplayedData(Links_domins);
    } else if (divId === 3) {
      setDisplayedData(Technical_documentation);
    } else {
      setDisplayedData(requests);
    }
  };


  return (
    <>
      <section className="py-7 md:py-20 bg-gray-backg ">
        <div
          className="container px-4 mx-auto transition wow animate__ animate__fadeInUp animated w-screen mt-3 mb-9"
          data-wow-delay=".3s"
        >
          <h2 className="text-xl text-gray-600 font-bold pb-10 text-start" >{texts.Registration_System}</h2>

          <div className="flex">
            <div className="w-2/5 pl-3 text-start">
              <div
                className={`bg-white cursor-pointer rounded-lg py-2 px-5 hover:bg-cyan-border w-border my-3 transition duration-150 ${selectedDiv === 1 || selectedDiv === null ? 'selected' : ''
                  }`}
                onClick={() => handleDivClick(1)}
              >
                <label className="text-slate-600 cursor-pointer">{texts.Internet_domains}</label>
              </div>

              <div
                className={`bg-white cursor-pointer rounded-lg py-2 px-5 hover:bg-cyan-border w-border my-3 transition duration-150 ${selectedDiv === 2 ? 'selected' : ''
                  }`}
                onClick={() => handleDivClick(2)}
              >
                <label className="text-slate-600 cursor-pointer">{texts.Contact_registration_unit}</label>
              </div>

              <div
                className={`bg-white cursor-pointer rounded-lg py-2 px-5 hover:bg-cyan-border w-border my-3 transition duration-150 ${selectedDiv === 3 ? 'selected' : ''
                  }`}
                onClick={() => handleDivClick(3)}
              >
                <label className="text-slate-600 cursor-pointer">
                  {texts.Technical_legal_documentationdomain}
                </label>
              </div>

              <div
                className={`bg-white cursor-pointer rounded-lg py-2 px-5 hover:bg-cyan-border w-border my-3 transition duration-150 ${selectedDiv === 4 ? 'selected' : ''
                  }`}
                onClick={() => handleDivClick(4)}
              >
                <label className="text-slate-600 cursor-pointer">
                  {texts.Requests_payments}                
                </label>
              </div>
            </div>

            <div className="w-3/5 pl-3">
              <div className="bg-white h-full rounded-lg my-3 cyan-border py-2 px-5 mb-0 text-start">
                <label className="text-sm text-slate-600">
                {texts.Internet_domains_description}
                </label>


                {displayedData.map((item, index) => (
                  <Link href={'/'} key={index} className="text-cyan block hover:a-main mt-5">
                    {item.name}{" "}
                    <label className="text-sm text-gray-400">
                      {item.Description}
                    </label>
                  </Link>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
