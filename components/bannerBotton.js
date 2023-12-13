import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function BannerBotton({number, infoNumber, domainName}){

    const { texts } = useSelector((state) => state);
    const [searchText, setSearchText] = useState("");
    
    return(
        <>
            <div className="basis-1/4">
              <div className='mt-2 flex'>
                <div className="flex flex-row m-auto">
                  <div className="basis-1/2 ">
                    <h1 className='font-bold text-2xl md:text-3xl m-1'>{number}</h1>
                  </div>
                  <div className="basis-1/2 m-auto flex">
                    <label className='text-xs text-start float-right'>{infoNumber}{domainName}</label>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}