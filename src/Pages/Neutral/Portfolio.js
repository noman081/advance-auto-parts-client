import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/images/carmax.PNG';
import pic2 from '../../assets/images/dream.PNG';
import pic3 from '../../assets/images/ps5.PNG';
const Portfolio = () => {
    return (
        <div>
            <header className="max-h-full bg-white p-6 grid">
                <nav className="w-full grid justify-end">
                    <ul className="hidden md:flex space-x-8 font-bold text-gray-700">
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </nav>

                <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
                    <div className="grid justify-center items-center order-1 col-span-1">
                        <img className="lg:h-80 md:h-64 h-40 rounded" src="https://i.ibb.co/FXxLff3/IMG-20211003-150038-min.jpg" alt="" />
                    </div>
                    <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
                        <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am Abdullah Al Noman, <br />Full Stack Developer</h1>
                        <p className="text-xl text-gray-800 text-center md:text-left">Seeking a responsible position with a turbulent and dynamic organization that offers
                            opportunities for personal and professional development and where I can best utilize
                            my knowledge and expertise to achieve the goal.</p>
                        <button className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">Download Resume</button>
                    </div>
                </div>
            </header>

            <div className="md:gap-4 p-6 bg-blue-50 md:grid">
                <div className="grid grid-cols-2 justify-between lg:px-40 md:mb-4">
                    <h1 className="justify-start md:text-left text-2xl font-bold">Skills</h1>
                </div>
                <div className="md:grid grid-cols-2 gap-6 lg:px-40">
                    <div>
                        <div className="bg-white p-4">
                            <div>
                                <div className="mb-4">
                                    <h1 className="text-2xl text-gray-700">Currently Working With</h1>
                                </div>

                                <div className="">
                                    <p className="text-lg text-gray-700">
                                        <ul>
                                            <li>Frontend: HTML5, CSS3, Bootstrap, React-Bootstrap, Tailwind CSS, Daisy UI </li>
                                            <li>
                                                Programming Language: JavaScript
                                            </li>
                                            <li>Libraries: React</li>
                                            <li>Backend: Node.js, Express.js, MongoDB</li>
                                            <li>APIs- Open weather, Rest Countries, MealDB</li>
                                            <li>Authentication: Google Firebase</li>
                                            <li>Web Hosting- Firebase, Netlify, Heroku
                                                GitHub, React Router</li>
                                            <li>Responsive Web Design</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 md:mt-0 mt-6">
                        <div>
                            <div className="mb-4">
                                <h1 className="text-2xl text-gray-700">Familiar With</h1>
                            </div>

                            <div className="">
                                <p className="text-lg text-gray-700">
                                    <ul>
                                        <li>Programming Language- C, C++,Python, JAVA</li>
                                        <li>Framework- Django</li>
                                        <li>Database- MySQL</li>
                                        <li>Networking- Cisco Packet Tracer</li>
                                        <li>Multi-paradigm programming language- MATLAB</li>
                                        <li>Design: Figma</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-white px-6">
                    <div className="border-b pb-6">
                        <h1 className="mt-2 mb-6 text-center text-3xl font-bold">Projects</h1>
                        <div className="md:grid grid-cols-2 gap-6 my-5 items-center">
                            <div>
                                <img className="md:h-full object-cover" src={pic1} alt="" />
                            </div>
                            <div>
                                <h1 className="my-6 text-2xl font-bold text-gray-700">CarMax Warehouse</h1>
                                <a href='https://carmax-warehouse.web.app/' target='_blank' className="text-lg mr-4 py-1 px-4 rounded-full bg-gray-800 text-white">Livesite</a>
                                <spnan className="text-lg">Dashboard</spnan>

                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-6 my-5 items-center">
                            <div>
                                <img className="md:h-full object-cover" src={pic2} alt="" />
                            </div>
                            <div>
                                <h1 className="my-6 text-2xl font-bold text-gray-700">Dream Photography</h1>
                                <a href='https://dream-photography.web.app/' target='_blank' className="text-lg mr-4 py-1 px-4 rounded-full bg-gray-800 text-white">Livesite</a>
                                <spnan className="text-lg">Dashboard</spnan>

                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-6 my-5 items-center">
                            <div>
                                <img className="md:h-full object-cover" src={pic3} alt="" />
                            </div>
                            <div>
                                <h1 className="my-6 text-2xl font-bold text-gray-700">PS5 Mania</h1>
                                <a href='https://ps5-mania-noman.netlify.app/' target='_blank' className="text-lg mr-4 py-1 px-4 rounded-full bg-gray-800 text-white">Livesite</a>
                                <spnan className="text-lg">Dashboard</spnan>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="px-20 mt-10">
                <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
                <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                        <h5 className="text-xl md:text-2xl  font-bold">B.Sc in Computer Science and Engineering</h5>
                        <h6 className="text-lg font-bold">University of Asia Pacific</h6>
                        <p>April, 2017 - June, 2021</p>
                    </div>
                    <div className="flex flex-col col-span-4 ">
                        <p>University Life means the positive active participation by a Scholar in University events and activities (as appropriate) and as may be determined by the Pro-Vice Chancellor Student Life and Learning or his or her nominee and shall include but not be limited to a Scholar's participation at University Open Days.</p>
                    </div>
                </div>
            </section>
            <footer className="bg-white">
                <div className="flex mt-20 px-10 items-center justify-around max-md">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 textgray-800e w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </div>
                <p className="text-center my-10 text-lg">Copyright ©2022 All rights reserved</p>
            </footer>
        </div>
    );
};

export default Portfolio;