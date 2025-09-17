'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Heading from './Heading';

const Feature7: React.FC = () => {
    return (
        <>
            <Heading>About Us</Heading>
            <section className="ezy__featured7 relative py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
                <br />
                <br />
                <br />
                <br />
                <div className="container px-4">
                    <div className="grid grid-cols-12 justify-center">
                        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                            <div className="grid grid-cols-12">
                                {/* Left Image */}
                                <div className="col-span-12 md:col-span-6 md:py-12">
                                    <div
                                        className="bg-center bg-no-repeat bg-cover rounded-xl min-h-[150px] h-full"
                                        style={{
                                            backgroundImage:
                                                'url(https://cdn.easyfrontend.com/pictures/featured/featured_7.png)',
                                        }}
                                    ></div>
                                </div>

                                {/* Right Content */}
                                <div className="col-span-12 md:col-span-6 pb-6 md:py-12 relative">
                                    <div className="bg-blue-100 dark:bg-[#1E2735] absolute -top-[10%] right-0 left-0 bottom-0 md:top-0 md:-left-[20%] rounded-xl rotate-180 -z-[1]"></div>
                                    <div className="p-6 lg:p-14 mb-12">
                                        <div className="w-[74px] h-[74px] rounded-xl text-[32px] inline-flex items-center justify-center mb-6">
                                            <FontAwesomeIcon icon={faCannabis} />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4">Product Design</h4>
                                        <p>
                                            Assumenda non repellendus distinctio nihil dicta sapiente,
                                            quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
                                            Assumenda non repellendus distinctio nihil dicta sapiente,
                                            quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
                                        </p>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="px-6 lg:px-12 text-end flex items-center justify-end">
                                        <button className="w-11 h-11 text-[12px] bg-transparent rounded-full inline-flex items-center justify-center transition text-slate-800 dark:text-white dark:hover:text-slate-800 border-[1px] border-[#1c293a] dark:border-white hover:bg-[#1c293a] dark:hover:bg-white hover:bg-opacity-20 mr-4">
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                        <button className="w-11 h-11 text-[12px] bg-transparent rounded-full inline-flex items-center justify-center transition text-slate-800 dark:text-white dark:hover:text-slate-800 border-[1px] border-[#1c293a] dark:border-white hover:bg-[#1c293a] dark:hover:bg-white hover:bg-opacity-20">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature7;
