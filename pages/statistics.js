import Footer from '../components/footer/Layout';
import React, { useEffect, useState } from "react";
import Inner_Header from '../components/innerHeader';
import TablesGenerator from '../components/TablesGenerator';
import { GET_statistics } from '../lib/querys'
import { client } from '../lib/apollo';
import { useSelector } from 'react-redux';

export default function statistics({ posts }) {
    const { texts } = useSelector((state) => state);

    return (
        <>
            <Inner_Header></Inner_Header>
            <div className=' bg-gray-backg'>
                <section className="py-4 md:py-16 ">
                    <div
                        className="w-screen mb-9" data-wow-delay=".3s">
                        <h2 className='text-center mb-3 text-sm text-cyan'>{texts.ProjectName}</h2>
                        <h1 className="text-xl text-gray-600 font-bold pb-10 text-center wow animate__animated animate__fadeIn">{texts.Statistics}</h1>

                        <div className='container flex px-36 w-full justify-center wow animate__animated animate__fadeIn'>

                            <div className="overflow-x-auto bg-white p-10 rounded-lg shadow-lg shadow-slate-200/50">
                                <TablesGenerator posts={posts}/>
                            </div>



                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}



export async function getStaticProps() {
    try {
        const GET_doc_ir = await client.query({
            query: GET_statistics,
        });
        let posts = GET_doc_ir?.data?.posts?.edges[0].node


        if (posts) {
            return {
                props: {
                    posts
                },
            };
        } else {
            return {
                props: {
                    posts: []
                },
            };
        }
    } catch (error) {
        console.error(error, 'error')
        return {
            props: {
                posts: []
            },
        };
    }
}
