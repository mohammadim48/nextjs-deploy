import React from 'react';
import Inner_Header from '../components/innerHeader';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Contact() {
    const { texts } = useSelector((state) => state);


    return (
        <>
            <Inner_Header></Inner_Header>
            <div className='bg-con'>
                <div className='bg-overlay-white w-screen h-screen flex justify-center items-center'>
                    <div className='w-full right-0 container flex ' dir="ltr">
                        <div className='w-1/2 h-full'>
                            <h2 className='text-5xl mb-9 font-bold'>{texts.Contact_information_Irnik}</h2>

                            <label className='font-bold'>{texts.Email_address}</label>
                            <Link href='#' className='block mt-2 mr-1 text-cyan mb-6'>info@nic.ir</Link>


                            <label className='font-bold '>{texts.Phone_support}</label>
                            <Link href='#' className='block mt-2 mr-1 text-cyan'>‎(+۹۸ ۲۱) ۲۳۵۸ ۷۰۰۰‎</Link>
                             <p className='text-gray-600 text-sm'>در روزهای غیر تعطیل از شنبه تا چهارشنبه بین ساعت ۹:۰۰ تا ۱۲:۰۰ و ۱۳:۳۰ تا ۱۶:۰۰ (به وقت تهران) پاسخگو می‌باشد</p>
                            <p className='text-gray-600 mb-6 text-sm'>
                                موارد فوری و ضروری می‌باشد. خواهشمند است برای انجام امور ثبتی، اداری، اعمال هرگونه تغییرات فقط در ساعات ذکر شده تماس حاصل فرمایید. به دلیل محدودیت در خطوط پاسخگویی در خارج از ساعات ذکر شده از اشغال نمودن این خطوط برای موارد غیر ضروری، خودداری نمایید
                            </p>

                            <label className='font-bold'>پشتیبانی برخط</label>
                            <p className='text-gray-600 text-sm mb-6'>در روزهای غیر تعطیل از شنبه تا چهارشنبه بین ساعت ۱۴:۰۰ تا ۱۵:۰۰ (به وقت تهران) پاسخگو می‌باشد</p>


                            <label className='font-bold'>نمابر</label>
                            <Link href='#' className='block mt-2 mr-1 text-cyan mb-6'>‎(+۹۸ ۲۱) ۲۲۲۹ ۵۷۰۰‎</Link>


                            <label className='font-bold'>آدرس پستی</label>
                            <p className='text-gray-600 text-sm mb-6'>
                                ثبت دامنه (ایرنیک)
                                پژوهشگاه دانش‌های بنیادی (مرکز تحقیقات فیزیک نظری و ریاضیات)
                                میدان شهید باهنر (نیاوران)
                                تهران ۱۹۵۴۸۵۱۱۶۷ - ایران
                                صندوق پستی: ‎۱۹۳۹۵-۵۵۶۴‎
                            </p>

                        </div>

                    </div>
                </div>
            </div>
            {/* <div className=' bg-gray-backg'>
                <section className="py-4 md:py-16 ">
                    <div
                        className="w-screen mb-9" data-wow-delay=".3s">
                        <h2 className='text-center mb-3 text-sm text-cyan'>ایرنیک</h2>
                        <h1 className="text-xl text-gray-600 font-bold pb-10 text-center wow animate__animated animate__fadeIn">ارتباط با ما</h1>

                        <div className='container flex px-36 w-full justify-center wow animate__animated animate__fadeIn'>

                            <div className='w-1/2  m-4'>
                                <div className='w-full bg-white p-4 rounded-md '>
                                    <label className='text-base	text-black'>آدرس پست الکترونیک</label>
                                    <Link href='#' className='text-lg text-gray-700 block'>info@nic.ir</Link>
                                </div>
                            </div>

                            <div className='w-1/2  m-4'>
                            <div className='w-full bg-white p-4 rounded-md'>
                                    <label>آدرس پست الکترونیک:	</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}


            {/* <Footer></Footer> */}

        </>
    )
}