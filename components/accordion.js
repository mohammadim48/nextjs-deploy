import React, { useEffect, useState } from "react";
import Link from "next/link"
import { GET_FAQ_domin, GET_FAQ_Id } from '../lib/querys'
import { client } from '../lib/apollo';
import { useSelector } from 'react-redux';

function Accordion() {
    const { texts } = useSelector((state) => state);
    const [FAQs_domin, setDocIrPost_domin] = useState(null);
    const [FAQs_ID, setDocIrPost_ID] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const language = localStorage.getItem("language");
        if (language) {
            setSelectedLanguage(language);
        }
        fetchData_Id();
        fetchData_domin();
    }, []);

    const fetchData_domin = async () => {
        try {
            const GET_Faq_req = await client.query({
                query: GET_FAQ_domin,
            });
            const fetchedFAQs = GET_Faq_req?.data?.posts?.nodes;
            setDocIrPost_domin(fetchedFAQs);
            checkSubjectsAndSetDomainQ(fetchedFAQs, setDomainQ);
        } catch (error) {
            console.error(error, 'error');
            setDocIrPost_domin([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchData_Id = async () => {
        try {
            const GET_Faq_req_Id = await client.query({
                query: GET_FAQ_Id,
            });
            const fetchedFAQs_id = GET_Faq_req_Id?.data?.posts?.nodes;
            setDocIrPost_ID(fetchedFAQs_id);
            setDisplayedData(ID_q);
            checkSubjectsAndSetDomainQ(fetchedFAQs_id, setDomainQ_id);
        } catch (error) {
            console.error(error, 'error');
            setDocIrPost_ID([]);
        } finally {
            setLoading(false);
        }
    };

    const checkSubjectsAndSetDomainQ = (FAQs, setter) => {
        if (!FAQs) return;
        const formattedFAQs = FAQs.map(item => {
            const question = texts.language === 'FA' ? item.title : item.translation.title;
            const answer = texts.language === 'FA' ? item.content : item.translation.content;
            return {
                Question: question,
                answer: answer,
            };
        });

        setter(formattedFAQs);
    };

    const [Domain_q, setDomainQ] = useState([]);
    const [ID_q, setDomainQ_id] = useState([]);

    const handleDivClick = (divId) => {
        setSelectedDiv(divId);
        if (divId === 1) {
            setDisplayedData(ID_q);
        } else {
            setDisplayedData(Domain_q);
        }
    };

    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [displayedData, setDisplayedData] = useState(ID_q);

    useEffect(() => {
        if (!loading) {
            setDisplayedData(ID_q);
        }
    }, [loading]);
    if (loading) {
        return <div>{texts.Loading}</div>;
    }

    return (
        <div className='container flex px-36 w-full justify-center wow animate__animated animate__fadeIn' dir={texts.Dir}>
            <div className='w-1/3 '>
                <div className='mx-3 p-6 bg-white rounded-2xl shadow-lg shadow-slate-200/50'>
                    <ul>
                        <li className='link-lg'>
                            <Link href="javascript:;"
                                className={`bg-whi te cursor-pointer block w-full rounded-lg py-2 px-5 hover:bg-cyan-border w-border my-3 transition duration-150 ${selectedDiv === 1 || selectedDiv === null ? 'selected' : ''}`}
                                onClick={() => handleDivClick(1)}>{texts.ID}</Link>
                        </li>
                        <li className='link-lg'>
                            <Link className={`bg-white cursor-pointer block w-full rounded-lg py-2 px-5 hover:bg-cyan-border w-border my-3 transition duration-150 ${selectedDiv === 2 ? 'selected' : ''}`}
                                onClick={() => handleDivClick(2)} href="javascript:;">{texts.domain}</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-2/3 '>
                {displayedData.map((item) => (
                    <div className="collapse collapse-arrow bg-white mb-4 shadow-lg shadow-slate-200/50" key={item.Question} >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            {item.Question}
                        </div>
                        <div className="collapse-content">
                            <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordion;
