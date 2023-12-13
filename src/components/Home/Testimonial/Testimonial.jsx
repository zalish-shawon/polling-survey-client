import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Testimonial = () => {
    return (
        <div>
            <div>
                <h1 className="sm:text-3xl text-3xl font-bold title-font text-center text-gray-900 mb-10 border border-blue-50 p-2">Testimonial
                </h1>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <figure className="max-w-screen-md mx-auto text-center">
                            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Overall, I find the survey web app effective, but there's room for improvement. Some users (including myself) experienced a slight delay when loading surveys with a large number of questions. It would be great if you could optimize the loading speed."</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                <img className="w-6 h-6 rounded-full" src="https://pikwizard.com/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg" alt="profile picture" />
                                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">John Doe</cite>
                                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at StrawPoll</cite>
                                </div>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>

                        <figure className="max-w-screen-md mx-auto text-center">
                            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"I've been using this survey web app regularly, and I'm impressed with the rewards system. The incentives provided after completing surveys are a nice touch and add motivation to participate. The timely distribution of rewards is appreciated."</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                                </div>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>

                        <figure className="max-w-screen-md mx-auto text-center">
                            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"I love using this survey web app! The user interface is intuitive, making it easy to navigate through different surveys. The variety of question formats keeps the experience interesting, and the progress tracker is a handy feature."</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                <img className="w-6 h-6 rounded-full" src="https://png.pngtree.com/background/20230530/original/pngtree-man-looking-for-a-good-mens-beauty-look-picture-image_2791625.jpg" alt="profile picture" />
                                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">Smith Moore</cite>
                                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Microsoft</cite>
                                </div>
                            </figcaption>
                        </figure>
                    </SwiperSlide>


                </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;