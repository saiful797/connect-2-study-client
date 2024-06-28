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
            <div className=" text-gray-800">
                {/* Hero Section */}
                <section className="bg-yellow-500 lg:rounded-tl-full lg:rounded-br-full mt-10 text-white p-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-xl">Connecting students with expert tutors for a brighter future.</p>
                </section>

                {/* Our Mission */}
                <section className="pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Our Mission'} />
                    <p className="text-lg text-center">
                        At Connect2Study, our mission is to provide personalized and effective tutoring services that empower students to achieve their academic goals. We are committed to delivering high-quality education through innovative online platforms, ensuring every student has access to the resources and support they need to succeed. By connecting students with expert tutors, we strive to create a positive and impactful learning experience that fosters growth, confidence, and academic excellence.
                    </p>
                </div>
                </section>

                {/* Our Vision */}
                <section className="pb-10 pt-5 bg-gray-100">
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
                <section className="pb-10 pt-5 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Our Story'} />
                    <div className='space-y-3'>
                        <p className="text-lg text-center">
                            Connect2Study was born from a shared passion for education and a desire to make quality learning accessible to all students, regardless of their location. Our founders, a group of dedicated educators and tech enthusiasts, recognized the growing need for personalized tutoring in an increasingly digital world. With a vision to bridge the gap between students and expert tutors, we set out to create a platform that combines the best of technology and education.
                        </p>
                        <p className="text-lg text-center">
                            Since our inception, we have grown from a small startup into a thriving community of learners and educators. Our journey has been marked by continuous innovation, feedback from our users, and an unwavering commitment to improving the learning experience. We started with a simple goal: to help students succeed. Over the years, this goal has driven us to expand our services, enhance our platform, and reach more students across the globe.
                        </p>
                        <p className="text-lg text-center">
                            Today, Connect2Study is proud to support thousands of students in their academic journeys. Our team is dedicated to providing the best possible tutoring experience, with personalized sessions tailored to each student's needs. We believe that every student has the potential to excel, and we are here to support them every step of the way. Our story is one of growth, dedication, and a relentless pursuit of educational excellence.
                        </p>
                    </div>
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
                <section className="pb-10 pt-5 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Testimonials'} />
                    <div className="gap-5 grid lg:grid-cols-2 mt-5">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <p className="text-lg italic">"Connect2Study has transformed my learning experience. The tutors are knowledgeable and patient. Highly recommended!"</p>
                            <p className="text-right mt-4">- Atiyah Nayar Ayat</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <p className="text-lg italic">"My son's grades have improved significantly since he started using Connect2Study. We couldn't be happier!"</p>
                            <p className="text-right mt-4">- Sahinur Islam</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <p className="text-lg italic">"Connect2Study has transformed my learning experience. The tutors are knowledgeable, patient, and truly invested in my success. I've seen significant improvements in my grades and confidence. Highly recommended!"</p>
                            <p className="text-right mt-4">- Emily R.</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <p className="text-lg italic">"Our school partnered with Connect2Study to provide extra support for our students, and the feedback has been overwhelmingly positive. The tutors are professional, and the flexibility of online sessions fits perfectly with our students' busy schedules."</p>
                            <p className="text-right mt-4">- Mr. Thompson</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <p className="text-lg italic">"The personalized attention I receive from my tutor at Connect2Study has been incredible. They tailor each session to my learning style and needs, making complex subjects much easier to understand. I finally feel confident in my studies."</p>
                            <p className="text-right mt-4">- Maria Rahman.</p>
                        </div>
                    </div>
                </div>
                </section>

                {/* Partnerships and Collaborations */}
                <section className="pb-10 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Partnerships and Collaborations'} />
                    <p className="text-lg mb-3">
                        At Connect2Study, we believe that collaboration is key to enhancing educational opportunities and fostering a richer learning environment. Over the years, we have built strong partnerships with a variety of educational institutions, organizations, and technology providers to expand our reach and impact.
                    </p>
                    <div className='space-y-3'>
                        <div>
                            <h1 className='text-2xl font-bold mb-3'>Educational Institutions</h1>
                            <p className="text-lg">
                                At Connect2Study, we believe that collaboration is key to enhancing educational opportunities and fostering a richer learning environment. Over the years, we have built strong partnerships with a variety of educational institutions, organizations, and technology providers to expand our reach and impact.
                            </p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold mb-3'>Technology Providers</h1>
                            <p className="text-lg">
                                Our collaboration with leading technology providers enables us to deliver a seamless and innovative online tutoring experience. These partnerships help us incorporate the latest educational technologies into our platform, ensuring that our students have access to cutting-edge tools and resources that enhance their learning experience.
                            </p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold mb-3'>Non-Profit Organizations</h1>
                            <p className="text-lg">
                                Connect2Study is proud to partner with various non-profit organizations dedicated to improving education and providing support to underserved communities. Through these collaborations, we offer tutoring services to students who may not have access to quality education, helping to bridge the educational gap and promote equality in learning opportunities.
                            </p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold mb-3'>Corporate Partnerships</h1>
                            <p className="text-lg">
                                We work with corporations and businesses to provide their employees' families with access to our tutoring services. These partnerships not only benefit the employees by supporting their children's education but also help companies demonstrate their commitment to employee well-being and community engagement.
                            </p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold mb-3'>Community Initiatives</h1>
                            <p className="text-lg">
                                Our commitment to education extends beyond online tutoring. We actively participate in and sponsor community initiatives aimed at promoting education and lifelong learning. Whether through local workshops, educational events, or scholarship programs, Connect2Study is dedicated to making a positive impact on the communities we serve.
                            </p>
                        </div>
                        <p className="text-lg mt-3">
                            By fostering these partnerships and collaborations, Connect2Study continues to innovate and grow, ensuring that we provide the best possible educational support to students worldwide. Together, we are making a significant difference in the lives of learners, helping them achieve their academic dreams and build a brighter future.
                        </p>
                    </div>
                </div>
                </section>

                {/* Community Involvement */}
                <section className="pb-10 pt-5 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title={'Community Involvement'} />
                    <p className="text-lg text-center">At Connect2Study, we are deeply committed to giving back to the community and fostering a culture of learning beyond our online platform. Our team actively participates in local educational events, sponsors scholarships for underprivileged students, and partners with community organizations to provide free tutoring sessions and educational resources. By engaging with our community, we strive to make a positive impact and ensure that quality education is accessible to all.</p>
                </div>
                </section>
            </div>
            {/* Scroll to top of the page */}
            <ScrollToTop /> 
        </div>
    );
};

export default AboutPage;