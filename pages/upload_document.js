import Footer from '../components/footer/Layout';
import React, { useState } from 'react';
import Inner_Header from '../components/innerHeader';
import { useSelector } from 'react-redux';


export default function upload_document() {
    const { texts } = useSelector((state) => state);
    // تابع برای انتخاب متن بر اساس زبان
    const chooseText = (faText, enText) => {
        return texts.language === 'FA' ? faText : enText;
    };
    return (
        <>
            <Inner_Header></Inner_Header>
            <div className=' bg-gray-backg'>
                <section className="py-4 md:py-16 " dir={texts.Dir}>
                    <div
                        className="w-screen mb-4" data-wow-delay=".3s">
                        <h2 className='text-center mb-3 text-sm text-cyan'>{texts.ProjectName}</h2>
                        <h1 className="text-xl text-gray-600 font-bold pb-10 text-center wow animate__animated animate__fadeIn">{texts.Upload_Documents}</h1>


                        <div className='px-36 w-full justify-center wow animate__animated animate__fadeIn '>
                            <div className='flex'>
                                <div className="overflow-x-auto bg-white p-10 rounded-lg shadow-lg shadow-slate-200/50 w-1/3 mx-3 flex flex-col">
                                    <h2 className='text-lg'>{chooseText('مدارک مرتبط با شناسه', 'Documents Related to IDs')}</h2>
                                    <ul className='list-disc text-sm mt-2'>
                                        <li>{chooseText('اعمال تغییرات/تنظیمات شناسه', 'Apply changes to ID: change confidential response, password, address, company registration number, and type of ID from limited to real, as well as correct name and national code of ID owner.')}</li>
                                        <li>{chooseText('ارسال مجوز برای دامنه‌های محدود', 'Send permission for restricted domains.')}</li>
                                    </ul>
                                    <div className='w-full text-center pt-7 mt-auto'>
                                        <button className="bg-emerald-500 text-white p-3 rounded-lg text-sm hover:bg-emerald-600 justify-center">{chooseText('تکمیل فرم و ارسال مدرک', 'Complete form and submit documents')}</button>
                                    </div>
                                </div>



                                <div className="overflow-x-auto bg-white p-10 rounded-lg shadow-lg shadow-slate-200/50 w-1/3 mx-3 flex flex-col text-start">
                                    <h2 className='text-lg'>{chooseText(texts.Documents_related_domain_matters, 'Documents Related to Domain Matters')}</h2>
                                    <ul className='list-disc text-sm mt-2'>
                                        <li>
                                            {chooseText('ثبت دامنه به طور کلی: تعهد کتبی، مدارک ثبتی، روزنامه رسمی، پروانه فعالیت. ...', 'Domain registration in general: Written commitment, registration documents, official newspaper, business license. ...')}
                                        </li>
                                        <li>
                                            {chooseText('انتقال دامنه', 'Domain transfer')}
                                        </li>
                                        <li>
                                            {chooseText('لغو دامنه (حذف دامنه)', 'Canceling the domain')}
                                        </li>
                                        <li>
                                            {chooseText('اعمال تغییرات بر روی دامنه مانند تغییر/تنظیم رابط‌های دامنه، تنظیم شناسه برای دامنه‌های انتقال یافته از سامانه قدیم و مواردی که انجام آنها بصورت آنلاین (برخط) امکان پذیر نمی‌باشد و یا دسترسی آن وجود ندارد، از قبیل اعمال تغییرات توسط ارسال نامه رسمی از جانب صاحب امتیاز دامنه.', 'Making changes to the domain such as changing/setting domain interfaces, setting ID for transferred domains from the old system, and cases that cannot be done online or have no access, such as making changes by sending an official letter from the domain owner.')}
                                        </li>
                                    </ul>
                                    <div className='w-full text-center pt-7 mt-auto'>
                                        <button className="bg-emerald-500 text-white p-3 rounded-lg text-sm hover:bg-emerald-600 justify-center">{chooseText('تکمیل فرم و ارسال مدرک', 'Complete form and submit documents')}</button>
                                    </div>
                                </div>

                                <div className="overflow-x-auto bg-white p-10 rounded-lg shadow-lg shadow-slate-200/50 w-1/3 mx-3 flex flex-col">
                                    <h2 className='text-lg'>{chooseText(texts.Sending_documents_related_representatives, 'Sending Documents Related to Representatives')}</h2>
                                    <ul className='list-disc text-sm mt-2'>
                                        <li>
                                            {chooseText('شما از این طریق می‌توانید مدارک مرتبط با امور نمایندگی خود را ارسال کنید.', 'You can send documents related to your representation affairs through this method.')}
                                        </li>
                                    </ul>
                                    <div className='text-center mt-auto w-full'>
                                        <button className="bg-emerald-500 text-white p-3 rounded-lg text-sm hover:bg-emerald-600 justify-center">{chooseText('تکمیل فرم و ارسال مدرک', 'Complete form and submit documents')}</button>
                                    </div>
                                </div>





                            </div>


                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>

        </>
    )
}