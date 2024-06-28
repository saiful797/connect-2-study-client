import React from 'react';
import SectionTitle from '../../Components/Shared/SectionTitle';
import ScrollToTop from '../../Components/Shared/ScrollToTop';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
    return (
        <div className='pt-20 min-h-screen p-5 rounded-lg'>
            <Helmet>
                <title>Connect2Study | About Us</title>
            </Helmet>
            <div className="bg-yellow-50 text-gray-800">
                {/* Hero Section */}
                <section className="bg-blue-950 mt-10 text-white p-12 text-center">
                <h1 className="text-4xl font-bold mb-4">About Connect2Study</h1>
                <p className="text-xl">Connecting students with expert tutors for a brighter future.</p>
                </section>

                {/* Our Mission */}
                <section className="pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Our Mission'} />
                    <p className="text-lg text-center">To provide personalized and effective tutoring services that empower students to achieve their academic goals.</p>
                </div>
                </section>

                {/* Our Vision */}
                <section className="pb-12 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Our Vision'} />  
                    <p className="text-lg text-center">To be the leading online tutoring platform, recognized for our commitment to educational excellence and student success.</p>
                </div>
                </section>

                {/* Our Values */}
                <section className="pb-10 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Our Values'} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Integrity</h3>
                        <p>We uphold the highest standards of honesty and ethical behavior.</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Excellence</h3>
                        <p>We strive for excellence in everything we do.</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Innovation</h3>
                        <p>We embrace innovative approaches to enhance learning.</p>
                    </div>
                    </div>
                </div>
                </section>

                {/* Our Story */}
                <section className="pb-10 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Our Story'} />
                    <p className="text-lg text-center">
                    Connect2Study was founded by a group of educators passionate about making high-quality education accessible to all. Since our inception, we have helped thousands of students achieve their academic dreams through personalized tutoring.
                    </p>
                </div>
                </section>

                {/* Meet the Team */}
                <section className="pb-10 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <SectionTitle title={'Meet the Team'} />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-4">
                            <img src="https://i.ibb.co/KbpKTX6/saiful.jpg" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full" />
                            <h3 className="text-xl font-semibold mt-4">SAIFUL ISLAM</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="p-4">
                            <img src="https://i.ibb.co/c1dTqQ4/md-duran-1-Vq-HRwxc-CCw-unsplash.jpg" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full" />
                            <h3 className="text-xl font-semibold mt-4">FARIA RAHMAN RIMU</h3>
                            <p className="text-gray-600">Chief Academic Officer</p>
                        </div>
                        <div className="p-4">
                            <img src="https://i.ibb.co/N97mL3y/steve-ding-T42j-x-LOqw0-unsplash.jpg" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
                            <h3 className="text-xl font-semibold mt-4">IRBAD IBNE ASADUZZAMAN</h3>
                            <p className="text-gray-600">Lead Developer</p>
                        </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="pb-10 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Testimonials'} />
                    <div className="space-y-8">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <p className="text-lg italic">"Connect2Study has transformed my learning experience. The tutors are knowledgeable and patient. Highly recommended!"</p>
                        <p className="text-right mt-4">- Atiyah Nayar Ayat</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <p className="text-lg italic">"My son's grades have improved significantly since he started using Connect2Study. We couldn't be happier!"</p>
                        <p className="text-right mt-4">- Sahinur Islam</p>
                    </div>
                    </div>
                </div>
                </section>

                {/* Partnerships and Collaborations */}
                <section className="pb-10 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Partnerships and Collaborations'} />
                    <p className="text-lg text-center">We collaborate with schools, educational institutions, and other organizations to broaden our reach and impact.</p>
                </div>
                </section>

                {/* Community Involvement */}
                <section className="pb-10 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Community Involvement'} />
                    <p className="text-lg text-center">We believe in giving back to the community. Our team regularly participates in local educational events and initiatives.</p>
                </div>
                </section>
            </div>
            {/* Scroll to top of the page */}
            <ScrollToTop /> 
        </div>
    );
};

export default AboutPage;