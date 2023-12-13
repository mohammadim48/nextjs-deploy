import Footer from '../components/footer/Layout';
import React, { useState } from 'react';
import Inner_Header from '../components/innerHeader';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function how_to_become_reseller() {
    const { texts } = useSelector((state) => state);

    return (
        <>
            <Inner_Header></Inner_Header>
            <div className=' bg-gray-backg'>
                <section className="py-4 md:py-16 ">
                    <div
                        className="w-screen mb-9" data-wow-delay=".3s">
                        <h2 className='text-center mb-3 text-sm text-cyan'>{texts.ProjectName}</h2>
                        <h1 className="text-xl text-gray-600 font-bold pb-10 text-center wow animate__animated animate__fadeIn">{texts.How_Become_Reseller}</h1>

                        <div className='container flex px-36 w-full justify-center wow animate__animated animate__fadeIn'>

                            <div className="overflow-x-auto bg-white p-10 rounded-lg  shadow-lg shadow-slate-200/50 container ">



                                <Link href='/' className='text-cyan flex'>
                                    {texts.Sample_domain_service_agreement}
                                </Link>
                            </div>


                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>

        </>
    )
}