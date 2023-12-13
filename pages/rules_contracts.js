import Footer from '../components/footer/Layout';
import Inner_Header from '../components/innerHeader';
import Documentation_Iran from '../components/documents/Documentation_Iran';
import Documentation_IDN from '../components/documents/Documentation_IDN';
import Documentation_ir from '../components/documents/Documentation_ir';
import { useSelector } from 'react-redux';

export default function Home() {
    const { texts } = useSelector((state) => state);


    return (
        <>
            <Inner_Header></Inner_Header>
            <div className=' bg-gray-backg' dir={texts.Dir}>
                <section className="py-4 md:py-16 ">
                    <div
                        className="w-screen mb-9" data-wow-delay=".3s">
                        <h2 className='text-center mb-3 text-sm text-cyan'>{texts.ProjectName}</h2>
                        <h1 className="text-xl text-gray-600 font-bold pb-10 text-center wow animate__animated animate__fadeIn">{texts.Regulations_contracts}</h1>

                        <div className='px-36 w-full flex justify-center wow animate__animated animate__fadeIn'>

                            <div className="card bg-base-100  shadow-lg shadow-slate-200/50 mx-4 ">
                                <div className="card-body">
                                    <h3 className="card-title text-lg mb-2 text-gray-600">{texts.Documentation_IR}</h3>
                                    <hr className='text-gray-200' />

                                    <ul className="menu bg-white rounded-box w-full">
                                        <li className="menu-title">{texts.List_documents} {texts.Documentation_IR}</li>
                                        <Documentation_ir />
                                    </ul>

                                </div>
                            </div>



                            <div className="card bg-base-100  shadow-lg shadow-slate-200/50 mx-4 ">
                                <div className="card-body">
                                    <h3 className="card-title text-lg mb-2 text-gray-600">{texts.Documents_Iran}</h3>
                                    <hr className='text-gray-200' />

                                    <ul className="menu bg-white rounded-box w-full">
                                        <li className="menu-title">
                                            {texts.List_documents} {texts.Documents_Iran}
                                        </li>
                                        <Documentation_Iran />
                                    </ul>

                                </div>
                            </div>




                            <div className="card bg-base-100  shadow-lg shadow-slate-200/50 mx-4 ">
                                <div className="card-body">
                                    <h3 className="card-title text-lg mb-2 text-gray-600">{texts.International_domains}</h3>
                                    <hr className='text-gray-200' />

                                    <ul className="menu bg-white rounded-box w-full">
                                        <li className="menu-title">
                                            {texts.List_documents} {texts.International_domains}
                                        </li>
                                        <Documentation_IDN />
                                    </ul>

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