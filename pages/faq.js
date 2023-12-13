import Footer from '../components/footer/Layout';
import React from "react";
import Inner_Header from '../components/innerHeader';
import Accordion from '../components/accordion';
import { useSelector } from 'react-redux';

export default function FAQ() {
    const { texts } = useSelector((state) => state);

    return (
        <>
            <Inner_Header></Inner_Header>
            <div className=' bg-gray-backg'>
                <section className="py-4 md:py-16 ">
                    <div
                        className="w-screen mb-9" data-wow-delay=".3s">
                        <h2 className='text-center mb-3 text-sm text-cyan'>{texts.ProjectName}</h2>
                        <h1 className="text-xl text-gray-600 font-bold pb-10 text-center wow animate__animated animate__fadeIn">{texts.Frequently_Asked_Questions}</h1>
                        <Accordion />
                    </div>
                </section>
            </div>
            <Footer></Footer>

        </>
    )
}