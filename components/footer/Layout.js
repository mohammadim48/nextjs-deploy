import React from 'react';
import Link from "next/link";
import { useSelector } from 'react-redux';
import Documentation_ir from '../documents/Documentation_ir';
import Documentation_Iran from '../documents/Documentation_Iran';
import Documentation_IDN from '../documents/Documentation_IDN';

export default function Footer() {

  const { texts } = useSelector((state) => state);

  return (
    <>
      <footer className=" text-center text-neutral-200 footer-color dark:text-neutral-200 lg:text-left">
        <div className="flex items-center justify-right border-b-2 border-neutral-200 p-6 dark:border-neutral-300 lg:justify-between">
          <div className="mr-12 hidden lg:block">
            <span>{texts.languages_title}:</span>
          </div>
          <div className="flex justify-right">
            <label className="mr-6 text-neutral-200 cursor-pointer text-sm" onClick={() => handleLanguageChange('fa')}>
              فارسی
            </label>
            <label className="mr-6 text-neutral-200 cursor-pointer text-sm " onClick={() => handleLanguageChange("en")}>
              English
            </label>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2  lg:grid-cols-4">
            <div>
              <h6 className="mb-4 flex items-center justify-right uppercase md:justify-start">

                {texts.Query_Whois_Server}
              </h6>
              <input
                className="w-2/3 float-right  py-3 px-2 rounded-md text-xs placeholder-white leading-none bg-cyan text-white  outline-none 	input-start"
                type="text"
                placeholder={texts.The_desired_domain}
              />

              <h6 className="mb-4 flex items-center justify-right uppercase md:justify-start mt-24">
                {texts.Query_DNS_Server}
              </h6>
              <input
                className="w-2/3 float-right  py-3 px-2 rounded-md text-xs placeholder-white leading-none bg-cyan text-white  outline-none input-start"
                type="text"
                placeholder={texts.The_desired_domain}
              />
            </div>

            <div>
              <h6 className="mb-4 flex justify-right font-semibold uppercase md:justify-start">
                {texts.International_domains}
              </h6>
              <ul>
                <Documentation_IDN />
              </ul>
            </div>


            <div>
              <h6 className="mb-4 flex justify-right font-semibold uppercase md:justify-start">
              {texts.Documents_Iran}

              </h6>
              <ul>
                <Documentation_Iran />
              </ul>
            </div>


            <div>
              <h6 className="mb-4 flex justify-right font-semibold uppercase md:justify-start">
              {texts.Documentation_IR}

              </h6>
              <ul>
                <Documentation_ir />
              </ul>
            </div>




          </div>
        </div>

        <div className="bg-neutral-700 p-3 text-center dark:bg-neutral-700">
          <label
            className="text-neutral-400 dark:text-neutral-400"
            href="https://tailwind-elements.com/"
          >
            {texts.copy_right}
          </label>
        </div>
      </footer>
    </>
  );
};
