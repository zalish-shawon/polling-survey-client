/* eslint-disable react/no-unescaped-entities */

const Faq = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            
                        </div>
                        <h2 className="max-w-lg border border-blue-50 p-2 mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block ">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Faq❓</span>
                            </span>{' '}
                            
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                        Here are some hypothetical answers based on the sample questions for a website-related survey
                        </p>
                    </div>
                </div>
                <div className="max-w-screen-xl sm:mx-auto">
                    <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                Describe your experience navigating our website. What aspects were user-friendly, and where do you think improvements could be made?
                                </p>
                                <p className="text-gray-700">
                                The navigation on your website was generally smooth and intuitive. I particularly liked the clear menu structure, making it easy to find what I needed. However, the search function could be improved, as some relevant results were not displayed.
                                    <br />
                                    <br />
                                    Many say exploration is part of our destiny, but it’s actually
                                    our duty to future generations.
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                In your opinion, how relevant is the content on our website to your needs or interests? Provide specific examples to support your answer.                                </p>
                                <p className="text-gray-700">
                                    Well, the way they make shows is, they make one show. That
                                    show's called a pilot.
                                    <br />
                                    <br />
                                    The content on your website is quite relevant to my interests. I appreciate the variety of topics covered. For instance, the blog section provides valuable insights. However, adding more real-life case studies could enhance the practicality of the content.
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                    Is the Space Pope reptilian!?
                                </p>
                                <p className="text-gray-700">
                                    A flower in my garden, a mystery in my panties. Heart attack
                                    never stopped old Big Bear. I didn't even know we were calling
                                    him Big Bear.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                What are your thoughts on the overall design and layout of our website? Are there any specific elements that stood out to you, positively or negatively?
                                </p>
                                <p className="text-gray-700">
                                The overall design is modern and visually appealing. I liked the use of colors and images. However, on certain pages, the text felt a bit cramped, and the font size could be increased for better readability.
                                    
                                    
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                Did you find any interactive elements on the website engaging? If so, please describe them and share your thoughts on how they enhanced your experience.
                                </p>
                                <p className="text-gray-700">
                                The interactive quizzes on the website were a fun and engaging way to learn more about the products. The "Ask an Expert" feature also caught my attention, but it could be promoted more prominently on the homepage for better visibility.
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                How satisfied are you with the website's performance and loading speed? Are there any pages or features that you found particularly slow or fast?
                                </p>
                                <p className="text-gray-700">
                                The website's performance is generally good, and pages load quickly. Yet, I noticed a slight delay on the product pages, especially when loading images. Optimizing image sizes could significantly improve loading times.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
