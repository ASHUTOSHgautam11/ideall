'use client';

import Image from "next/image";

export default function WhatSetsUsApart() {
    return (
        <section className="relative mt-10 bg-[#c7b29fff] text-white py-20 overflow-hidden mx-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[60%_40%] gap-12 relative z-10">

                {/* Content */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold">What Sets Us Apart</h2>

                    <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                        <p><strong>Global Presence:</strong> Headquartered in Singapore, IDeall Solutionz has offices across India, China, Hong Kong, UAE, and Vietnam, serving clients worldwide since 2002.</p>
                        <p><strong>Diverse Expertise:</strong> Part of the IDeall Group, we specialize in International Trading of Lifestyle Goods, Chemicals, Metals & Alloys, and Information Technology solutions.</p>
                        {/* <p><strong>IT Excellence:</strong> Our IT division delivers consulting, human capital management, systems integration, outsourcing, and executive search services, powered by a global recruitment model.</p> */}
                        <p><strong>Comprehensive Staffing:</strong> We provide top-tier consultants in IT, Finance/Accounting, and Engineering, combining deep project experience with strong business acumen.</p>
                        <p><strong>Strategic Delivery:</strong> With over 90 specialized consultants and development centers in India, China, and Vietnam, we ensure cost-effective, high-quality solutions for complex business challenges.</p>
                        <p><strong>Continuous Growth:</strong> We retain talent through structured career paths, knowledge transfer, and ongoing training, fostering expertise that benefits both our clients and employees.</p>
                    </div>

                </div>

                {/* Floating Image */}
                <div className="relative hidden lg:block">
                    <div className="absolute -top-10 lg:-right-10 w-[500px] h-[600px] overflow-hidden">
                        <Image
                            src="/assets/portfolio/vartical1.jpg"
                            alt="Decor"
                            fill
                            className="object-cover rounded-t-[45%]" // arch effect
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}
