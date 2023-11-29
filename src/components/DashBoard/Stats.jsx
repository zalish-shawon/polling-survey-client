/* eslint-disable react/no-unknown-property */

const Stats = () => {
    return (
        <div>
            <div class="container items-center px-4 m-auto mt-5">
                <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">

                    <div class="w-full p-2 lg:w-1/4 md:w-1/2">
                        <div
                            class="flex flex-col px-6 py-10 overflow-hidden bg-blue-400 hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group text-gray-50">
                            <div class="flex flex-row justify-between items-center">
                                <div class="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:text-gray-50" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd" />
                                        <path fill-rule="evenodd"
                                            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                
                            </div>
                            <h1 class="text-3xl sm:text-4xl xl:text-5xl font-bold mt-12 text-gray-50">42.34%</h1>
                            <div class="flex flex-row justify-between group-hover:text-gray-200">
                                <p>Bounce Rate</p>
                                
                            </div>
                        </div>
                    </div>
                   
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Stats;