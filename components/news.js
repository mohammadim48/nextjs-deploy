import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { client } from '../lib/apollo';
import { GET_News, News_CategoriesID } from './../lib/querys'
import { useSelector } from 'react-redux';

export default function News() {
  const { texts } = useSelector((state) => state);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [News_CategoriesID]);

  const fetchPosts = async () => {
    try {
      const { data } = await client.query({
        query: GET_News,
      });
      const fetchedPosts = data?.posts?.nodes;
      setPosts(fetchedPosts);
    } catch (error) {
      console.error(error)
      setPosts([]);
    }
  }
  useEffect(() => {
  }, [posts])



  return (
    <>

      <div
        className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        data-taos-offset="900">
        <section className="py-8 md:py-10 bg-white">
          <div
            className="container px-4 mx-auto transition wow animate__ animate__fadeInUp animated w-screen"
            data-wow-delay=".3s">
            <h2 className="text-xl text-gray-600 font-bold mt-20 pb-12 text-start">{texts.News}</h2>
            <div className="accordion flex flex-col items-center justify-center">

              {posts.map((post) => (
                <div className="w-3/4" key={post.id}>
                  <input
                    type="checkbox"
                    name="panel"
                    id={post.id}
                    className="hidden"
                  />
                  <label
                    htmlFor={post.id}
                    className="relative block bg-white text-gray-700 p-4 border-b border-gray-300  label-plus text-base">
                    {texts.language === 'FA' ? post.title : post.translation.title}


                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter ">
                    <div className="accordion__body p-4 text-gray-400 text-start" dangerouslySetInnerHTML={{
                      __html:
                        texts.language === 'FA'
                          ? post.content
                          : post.translation.content,
                    }} />
                  </div>
                </div>

              ))}

            </div>
            <div className=" text-center pt-5">

            </div>
          </div>

          <div className="w-full text-center mt-32 mb-16 ">
            <h1 className="text-xl ">{texts.Suport_Title}</h1>

            <div className="w-full text-webkit-center mt-4 flex justify-center ">

              <Link href="https://services.nic.ir/contact-us">
                <button type="button" className="ir-btn bg-cyan-50 flex btn btn-outline" >
                  {texts.Suport}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    transform="scale(-1, 1)"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        fill="#000"
                        fillRule="evenodd"
                        opacity="0.3"
                        transform="translate(9.000000, 12.000000) rotate(-270.000000) translate(-9.000000, -12.000000) "
                        x={8}
                        y={6}
                        width={2}
                        height={12}
                        rx={1}
                      />
                      <path
                        d="M20,7.00607258 C19.4477153,7.00607258 19,6.55855153 19,6.00650634 C19,5.45446114 19.4477153,5.00694009 20,5.00694009 L21,5.00694009 C23.209139,5.00694009 25,6.7970243 25,9.00520507 L25,15.001735 C25,17.2099158 23.209139,19 21,19 L9,19 C6.790861,19 5,17.2099158 5,15.001735 L5,8.99826498 C5,6.7900842 6.790861,5 9,5 L10.0000048,5 C10.5522896,5 11.0000048,5.44752105 11.0000048,5.99956624 C11.0000048,6.55161144 10.5522896,6.99913249 10.0000048,6.99913249 L9,6.99913249 C7.8954305,6.99913249 7,7.89417459 7,8.99826498 L7,15.001735 C7,16.1058254 7.8954305,17.0008675 9,17.0008675 L21,17.0008675 C22.1045695,17.0008675 23,16.1058254 23,15.001735 L23,9.00520507 C23,7.90111468 22.1045695,7.00607258 21,7.00607258 L20,7.00607258 Z"
                        fill="#fff"
                        fillRule="nonzero"
                        opacity="0.3"
                        transform="translate(15.000000, 12.000000) rotate(-90.000000) translate(-15.000000, -12.000000) "
                      />
                      <path
                        d="M16.7928932,9.79289322 C17.1834175,9.40236893 17.8165825,9.40236893 18.2071068,9.79289322 C18.5976311,10.1834175 18.5976311,10.8165825 18.2071068,11.2071068 L15.2071068,14.2071068 C14.8165825,14.5976311 14.1834175,14.5976311 13.7928932,14.2071068 L10.7928932,11.2071068 C10.4023689,10.8165825 10.4023689,10.1834175 10.7928932,9.79289322 C11.1834175,9.40236893 11.8165825,9.40236893 12.2071068,9.79289322 L14.5,12.0857864 L16.7928932,9.79289322 Z"
                        fill="none"
                        fillRule="nonzero"
                        transform="translate(14.500000, 12.000000) rotate(-90.000000) translate(-14.500000, -12.000000) "
                      />
                    </g>
                  </svg>
                </button>
              </Link>



            </div>
          </div>
        </section>
      </div>
    </>
  )
}
