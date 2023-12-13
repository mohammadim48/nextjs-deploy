// pages/document/[document].js
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Layout';
import Inner_Header from '../../components/innerHeader';
import { GET_Documentat_Details, DocumentatId } from './../../lib/querys';
import { client } from '../../lib/apollo';
import Link from 'next/link';

import { useQuery } from '@apollo/client';

const DocumentId = () => {
    const router = useRouter();
    const { document } = router.query;

    const { loading, error, data } = useQuery(GET_Documentat_Details, {
        variables: { id: parseInt(document, 10) }, // تبدیل document به عدد صحیح
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const title = data?.posts?.nodes[0]?.title || 'N/A';
    const content = data?.posts?.nodes[0]?.content || 'N/A';
    const language = data?.posts?.nodes[0].tags.nodes[0].name || 'N/A';
    const dir = language === 'EN' ? 'rtl' : 'ltr';

    return (
        <div>
            <Inner_Header></Inner_Header>
            <div className=' bg-gray-backg'>
                <section className="py-4 md:py-16 ">
                    <div
                        className="w-screen mb-9" data-wow-delay=".3s">

                        <div className='container flex px-36 w-full justify-center wow animate__animated animate__fadeIn'>

                            <div className="overflow-x-auto bg-white p-10 rounded-lg w-full shadow-lg shadow-slate-200/50" dir={dir}>

                                <h1 className='font-bold'>{title}</h1>
                                <div className="accordion__body p-4 mt-4 text-gray-400 content  text-end" dangerouslySetInnerHTML={{ __html: content }} />

                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default DocumentId;
