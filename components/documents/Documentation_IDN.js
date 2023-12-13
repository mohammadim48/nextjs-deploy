import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { GET_Documentation_IDN } from '../../lib/querys'
import { client } from '../../lib/apollo';
import { useSelector } from 'react-redux';

function Documentation_IDN() {
    const [doc_ir_post, setDocIrPost] = useState(null);
    const { texts } = useSelector((state) => state);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const GET_doc_ir = await client.query({
                query: GET_Documentation_IDN,
            });
            let doc_ir_post = GET_doc_ir?.data?.posts?.nodes
            setDocIrPost(doc_ir_post);
        } catch (error) {
            console.error(error, 'error');
            setDocIrPost([]);
        }
    };

    return (
        <div>
            {doc_ir_post ? (
                <ul >
                    {doc_ir_post.map((post) => (
                        <Link key={texts.language === 'FA' ? post.postId : post.translation.postId}
                            href={`/document/${texts.language === 'FA' ? post.postId : post.translation.postId}`} className='cursor-pointer text-xs block text-start my-4'>{texts.language === 'FA' ? post.title : post.translation.title}</Link>
                    ))}
                </ul>
            ) : (
                <p>{texts.NoData}</p>
            )}
        </div>
    )
}

export default Documentation_IDN;