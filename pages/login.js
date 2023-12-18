import React from 'react';
import logo from './../public/assets/imgs/logos/logo-irnic.fa-color.png';
import Link from "next/link"
import Image from 'next/image';

export default function login() {

    return (
        <>
            <div className="text-center flex">
                <div className='w-3/5 h-screen'>
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            alt="logo"
                            width={120} className="my-5 mx-4" />
                    </Link>
                    <div className='mt-36 mx-48 text-right'>
                        <h1 className='text-2xl text-gray-500'>
                            به سامانه
                            <label className='text-cyan'> ایرنیک fff</label>
                            خوش آمدید
                        </h1>

                        <form className=''>
                            <div className="sm:col-span-3 mt-8">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    نام کاربری
                                </label>
                                <div className="mt-2">
                                    <input
                                        placeholder='شناسه یا پست الکترونیک خود را وارد کنید'
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-lg border-0 py-1.5 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3 mt-5">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    رمزعبور
                                </label>
                                <div className="mt-2">
                                    <input
                                        placeholder='رمزعبور خود را وارد کنید'
                                        type="password"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-lg border-0 py-1.5 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 outline-none	"
                                    />
                                </div>
                            </div>



                            <div className="sm:col-span-3 mt-5 text-left">
                                <a href='javascript:;' className='text-sm text-cyan text-left'>بازنشانی رمزعبور</a>

                                <div className="mt-2">
                                    <a href={'http://192.168.140.112:3001/dashboard/my_domains'} className='bg-cyan block w-full text-white py-2 px-36 rounded-lg hover:shadow-lg' >ورود</a>
 
                                </div>
                            </div>
                            {/* <div className='w-full text-left mt-2'>
                                <a href='javascript:;' className='text-sm text-cyan'>بازنشانی رمزعبور</a>
                            </div>
                            <div className='w-full text-webkit-center mt-8'>
                                <a href={'http://192.168.140.112:3001/dashboard/my_domains'} className='bg-cyan w-full text-white py-2 px-36 rounded-lg hover:shadow-lg' >ورود</a>
                            </div> */}
                        </form>
                    </div>
                </div>
                <div
                    classname="w-3/5 h-screen text-webkit-center bg-repeat-round "
                    style={{
                        backgroundImage: 'url("../../assets/imgs/backgrounds/bg-login.jpg")',
                        height: "100vh",
                        width: "100%"
                    }}>
                </div>
            </div>
        </>
    )
}
