import Image from "next/image";
import Image4 from "../../../public/images/4.jpg";
import Image6 from "../../../public/images/charli.png";
import Image7 from "../../../public/images/card.png";
import Image8 from "../../../public/images/card2.png";
import Image9 from "../../../public/images/card3.png";
import Image10 from "../../../public/images/laptop.png";

const HomePage = () => {
    return (
        <div>

            {/* banner section start */}
            <div className="bg2">
                <div className="container mx-auto pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center items-center gap-y-12">
                        <div className="text-center md:text-start">
                            <h1 className="text-5xl md:text-4xl lg:text-8xl">We’re here to Increase your Productivity</h1>

                            <svg className="mt-10 md:mt-3 w-8/12 md:w-7/12 h-12 mx-auto md:mx-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 34" fill="none">
                                <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#54BD95" stroke-width="8" stroke-linecap="round" />
                            </svg>

                            <p className="mt-8 md:mt-3 lg:mt-8 md:w-12/12 lg:w-7/12 mx-auto md:mx-0 px-2 md:px-0 lg:px-0">Lets make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>

                            <div className="flex justify-center md:justify-start lg:justify-start items-center mt-10">
                                <a className="btn bg text-white rounded-2xl">Try free trial</a>
                                <a className="btn rounded-2xl ms-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 1.16675C25.7432 1.16675 32.8333 8.25533 32.8333 17.0001C32.8333 25.7448 25.7432 32.8334 17 32.8334C8.25524 32.8334 1.16666 25.7448 1.16666 17.0001C1.16666 8.25533 8.25524 1.16675 17 1.16675Z" stroke="#191A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 16.9919C22 15.64 15.0709 11.3152 14.2848 12.0928C13.4988 12.8705 13.4232 21.0401 14.2848 21.891C15.1464 22.7449 22 18.3438 22 16.9919Z" stroke="#191A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>View Demo</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <div className="bg-[#52BD94] w-6/12 mx-auto h-64 lg:h-[450px] rounded-xl">
                                    <Image
                                        src={Image6}
                                        alt="Image"
                                        className='w-10/12 mx-auto pt-[92px] md:pt-[95px] lg:pt-[128px] me-20'
                                    />
                                </div>

                                <div className="bg-[#FFF] w-72 lg:w-80 py-1 lg:py-2 rounded-2xl absolute top-1 lg:top-4">
                                    <fieldset className="form-control w-20 lg:w-60 mx-auto">
                                        <label className="label">
                                            <span className="label-text textp">Enter amount</span>
                                        </label>
                                        <div className="join">
                                            <input type="text" placeholder="$450..00" className="lg:input input-bordered join-item border-base-300 rounded-full" />
                                            <button className="bg py-2 px-2 rounded-full join-item">Send
                                            </button>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className="bg-[#4535AF] w-10 h-10 pt-4 rounded-xl absolute top-32  lg:top-52 left-10 md:left-12 lg:left-32">
                                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                                        <path d="M1 4.73309L5.17391 8.99976L13 0.999756" stroke="white" stroke-width="2" />
                                    </svg>
                                </div>

                                <div className="bg-[#FBC75E] w-10 h-10 pt-2 rounded-xl absolute top-24 lg:top-5 right-20  lg:right-44">
                                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                        <g clip-path="url(#clip0_0_39)">
                                            <path d="M13.8627 9.78005C17.8637 10.8521 21.3968 10.64 21.7542 9.30638C22.1115 7.97271 19.1578 6.02248 15.1568 4.95042C11.1558 3.87836 7.62266 4.09043 7.26531 5.42409C6.90795 6.75776 9.86171 8.70799 13.8627 9.78005Z" stroke="#F8F8FA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M20.244 14.9411C19.8859 16.2773 16.3772 16.4932 12.3525 15.4148C8.32777 14.3364 5.39703 12.395 5.75507 11.0588" stroke="#F8F8FA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.26483 5.42432L4.24528 16.6935C3.88724 18.0296 6.81798 19.971 10.8427 21.0494C14.8674 22.1278 18.3761 21.9119 18.7342 20.5757L21.7537 9.3066" stroke="#F8F8FA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_39">
                                                <rect width="20" height="20" fill="white" transform="translate(5.92889 0.752441) rotate(15)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="bg-[#FFF] w-36 py-1 lg:py-2 px-2 rounded-2xl absolute bottom-2 md:bottom-3 lg:bottom-10 left-0 lg:left-24 ">
                                    <p className="textp">Total Income</p>
                                    <div className="flex justify-between">
                                        <h3 className="font-bold">$245.00</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 16.6663V8.33301" stroke="#52BD94" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10 16.6663V3.33301" stroke="#52BD94" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M5 16.6665V11.6665" stroke="#52BD94" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="bg-[#161C28] w-24 md:w-28 lg:w-40 py-1 lg:py-2 px-2 rounded-2xl absolute right-10 md:right-8 lg:right-24 -bottom-4 md:bottom-2 lg:bottom-10">

                                    <div className="flex justify-between">
                                        <svg className="w-7 md:w-10 lg:w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 40" fill="none">
                                            <circle opacity="0.5" cx="34.0976" cy="22.1523" r="14" transform="rotate(15 34.0976 22.1523)" fill="white" />
                                            <circle opacity="0.5" cx="18.0312" cy="17.8474" r="14" transform="rotate(15 18.0312 17.8474)" fill="white" />
                                        </svg>

                                        <svg className="md:-mt-0 md:-me-1 lg:-mt-1 w-6 h-6 md:w-7 md:h-7 lg:w-16 lg:h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 126" fill="none">
                                            <circle cx="79.922" cy="46.9467" r="79" transform="rotate(15 79.922 46.9467)" fill="#232937" />
                                        </svg>
                                    </div>

                                    <p className="textp text-sm lg:text-base">Creadit Crad</p>

                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                            <circle cx="2.76871" cy="2.64724" r="2" transform="rotate(15 2.76871 2.64724)" fill="#D9D9D9" />
                                        </svg>
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                            <circle cx="2.76871" cy="2.64724" r="2" transform="rotate(15 2.76871 2.64724)" fill="#D9D9D9" />
                                        </svg>
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                            <circle cx="2.76871" cy="2.64724" r="2" transform="rotate(15 2.76871 2.64724)" fill="#D9D9D9" />
                                        </svg>
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                            <circle cx="2.76871" cy="2.64724" r="2" transform="rotate(15 2.76871 2.64724)" fill="#D9D9D9" />
                                        </svg>
                                        <p className="textp ms-4 md:text-sm">1234</p>
                                    </div>
                                    <div className="flex items-center justify-center lg:mt-5">
                                        <svg className="-mb-1 -ms-4 md:-mb-1 md:-ms-4 lg:-mb-1 lg:-ms-7 w-6 h-6 md:w-6 md:h-6 lg:w-14 lg:h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 136" fill="none">
                                            <circle cx="8.75499" cy="79.7546" r="79" transform="rotate(15 8.75499 79.7546)" fill="#232937" />
                                        </svg>
                                        <p className="textp md:ms-5 lg:ms-6">09/25</p>
                                    </div>

                                </div>

                                <div className="bg-[#FFAA94] w-10 h-10 pt-2 rounded-xl absolute -bottom-6 right-40  lg:right-72">
                                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <g clip-path="url(#clip0_0_33)">
                                            <path d="M19.0921 16.8506C18.9777 17.2776 18.6984 17.6416 18.3156 17.8626C17.9328 18.0836 17.4778 18.1435 17.0509 18.0291L7.3916 15.4409L3.30912 17.798L6.76004 4.91896C6.87445 4.49199 7.15378 4.12796 7.53658 3.90695C7.91939 3.68593 8.37432 3.62604 8.80128 3.74045L20.0704 6.76C20.4974 6.87441 20.8614 7.15374 21.0824 7.53655C21.3034 7.91935 21.3633 8.37428 21.2489 8.80124L19.0921 16.8506Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_33">
                                                <rect width="20" height="20" fill="white" transform="translate(5.42361 0.247314) rotate(15)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 lg:mt-28 text-center">
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">More than 25,000 teams use Collabs</h1>

                        <div className="mt-10 lg:mt-20 grid md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-5 pb-10 lg:pb-32">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none">
                                    <rect x="11" width="12" height="9" fill="#A6A6A6" />
                                    <rect y="23" width="34" height="9" fill="#A6A6A6" />
                                    <rect x="24" y="14" width="10" height="18" fill="#A6A6A6" />
                                    <rect y="14" width="10" height="18" fill="#A6A6A6" />
                                </svg>
                                <p className="textp text-2xl font-bold ms-2">Unsplash</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="35" viewBox="0 0 8 35" fill="none">
                                    <path d="M8 7L0 0V28L8 35V7Z" fill="#A6A6A6" />
                                </svg>
                                <p className="textp text-2xl font-bold ms-2">Notion</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <rect width="30" height="30" rx="3" fill="#A6A6A6" />
                                    <rect x="4" y="7" width="2" height="12" fill="white" />
                                    <rect x="9" y="4" width="2" height="18" fill="white" />
                                    <rect x="14" y="4" width="2" height="18" fill="white" />
                                    <rect x="19" y="4" width="2" height="18" fill="white" />
                                    <path d="M5 24C7.83333 26.2639 16 29.4333 26 24" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    <rect x="24" y="7" width="2" height="12" fill="white" />
                                </svg>
                                <p className="textp text-2xl font-bold ms-2">INTERCOM</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" viewBox="0 0 23 30" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0711 1.41723C18.9464 2.32466 20 3.5554 20 4.83871H10L0 4.83871C0 3.5554 1.05357 2.32466 2.92893 1.41722C4.8043 0.509791 7.34784 0 10 0C12.6522 0 15.1957 0.509791 17.0711 1.41723ZM2.92893 28.5828C1.05357 27.6753 0 26.4446 0 25.1613H10L20 25.1613C20 26.4446 18.9464 27.6753 17.0711 28.5828C15.1957 29.4902 12.6522 30 10 30C7.34783 30 4.8043 29.4902 2.92893 28.5828ZM23 17.4194V21.2903H17V17.4194H23ZM6 8.70968H0V12.5806H6V8.70968ZM11 8.70968H23V12.5806H11V8.70968ZM12 17.4194H0V21.2903H12V17.4194Z" fill="#A6A6A6" />
                                </svg>
                                <p className="textp text-2xl font-bold ms-2">descript</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="bg-[#A6A6A6] p-1 rounded-full" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 19 16" fill="none">
                                    <path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C9.95869 1 11.7295 1.80447 13 3.10102" stroke="white" stroke-width="2" />
                                    <path d="M11 10L15 8L17.5 11.5" stroke="white" stroke-width="2" />
                                </svg>
                                <p className="textp text-2xl font-bold ms-2">grammarly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner section end */}

            {/* rating section start */}
            <div className="bg-[#F9F8FE]">
                <div className="container mx-auto py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-y-10">
                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl lg:w-10/12 font-semibold text-center md:text-start lg:text-start">How we support our pratner all over the world</h1>

                        <p className="mt-8 lg:w-10/12 mx-auto md:mx-0 lg:mx-0 text-center md:text-start lg:text-start textp">SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>

                        <div className="flex items-center justify-center md:justify-start lg:justify-start">

                            <div className="mt-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width="142" height="26" viewBox="0 0 142 26" fill="none">
                                    <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
                                    <path d="M42 0L44.9187 8.98278H54.3637L46.7225 14.5344L49.6412 23.5172L42 17.9656L34.3588 23.5172L37.2775 14.5344L29.6363 8.98278H39.0813L42 0Z" fill="#FFC728" />
                                    <path d="M71 0L73.9187 8.98278H83.3637L75.7225 14.5344L78.6412 23.5172L71 17.9656L63.3588 23.5172L66.2775 14.5344L58.6363 8.98278H68.0813L71 0Z" fill="#FFC728" />
                                    <path d="M100 0L102.919 8.98278H112.364L104.723 14.5344L107.641 23.5172L100 17.9656L92.3588 23.5172L95.2775 14.5344L87.6363 8.98278H97.0813L100 0Z" fill="#FFC728" />
                                    <path d="M129 0L131.919 8.98278H141.364L133.723 14.5344L136.641 23.5172L129 17.9656L121.359 23.5172L124.277 14.5344L116.636 8.98278H126.081L129 0Z" fill="#FFC728" />
                                </svg>
                                <p className="mt-4 font-semibold">4.9 / 5 rating</p>
                                <p className="mt-4 textp">databricks</p>
                            </div>

                            <div className="mt-16 ms-7 lg:ms-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="142" height="26" viewBox="0 0 142 26" fill="none">
                                    <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
                                    <path d="M42 0L44.9187 8.98278H54.3637L46.7225 14.5344L49.6412 23.5172L42 17.9656L34.3588 23.5172L37.2775 14.5344L29.6363 8.98278H39.0813L42 0Z" fill="#FFC728" />
                                    <path d="M71 0L73.9187 8.98278H83.3637L75.7225 14.5344L78.6412 23.5172L71 17.9656L63.3588 23.5172L66.2775 14.5344L58.6363 8.98278H68.0813L71 0Z" fill="#FFC728" />
                                    <path d="M100 0L102.919 8.98278H112.364L104.723 14.5344L107.641 23.5172L100 17.9656L92.3588 23.5172L95.2775 14.5344L87.6363 8.98278H97.0813L100 0Z" fill="#FFC728" />
                                    <path d="M129 0L131.919 8.98278H141.364L133.723 14.5344L136.641 23.5172L129 17.9656L121.359 23.5172L124.277 14.5344L116.636 8.98278H126.081L129 0Z" fill="#BBBBBB" />
                                </svg>
                                <p className="mt-4 font-semibold">4.9 / 5 rating</p>
                                <p className="mt-4 textp">databricks</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="flex px-4">
                                <svg className="box1 p-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 30" fill="none">
                                    <path d="M27.5 15H22.5L18.75 26.25L11.25 3.75L7.5 15H2.5" stroke="#54BD95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className="ms-8">
                                    <h2 className="text-2xl font-bold">Publishing</h2>
                                    <p className="textp mt-3 lg:w-10/12">Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
                                </div>
                            </div>
                            <div className="flex px-4 mt-10 md:mt-6">
                                <svg className="box1 p-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 30" fill="none">
                                    <path d="M26.512 19.8626C25.7168 21.7432 24.473 23.4004 22.8894 24.6892C21.3057 25.9781 19.4305 26.8594 17.4276 27.2561C15.4247 27.6528 13.3551 27.5528 11.3997 26.9648C9.44436 26.3769 7.66281 25.3189 6.2108 23.8834C4.75879 22.4479 3.68055 20.6785 3.07032 18.73C2.4601 16.7815 2.33648 14.7132 2.71027 12.7059C3.08407 10.6986 3.9439 8.81338 5.21458 7.21513C6.48527 5.61689 8.12813 4.35424 9.99953 3.5376" stroke="#54BD95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5V15H27.5Z" stroke="#54BD95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className="ms-8">
                                    <h2 className="text-2xl font-bold">Analytics</h2>
                                    <p className="textp mt-3 lg:w-10/12">Analyze your performance and create goegeous report</p>
                                </div>
                            </div>
                            <div className="flex px-4 mt-10 md:mt-6">
                                <svg className="box1 p-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 30" fill="none">
                                    <path d="M22.5 3.75C21.5054 3.75 20.5516 4.14509 19.8483 4.84835C19.1451 5.55161 18.75 6.50544 18.75 7.5V22.5C18.75 23.4946 19.1451 24.4484 19.8483 25.1517C20.5516 25.8549 21.5054 26.25 22.5 26.25C23.4946 26.25 24.4484 25.8549 25.1517 25.1517C25.8549 24.4484 26.25 23.4946 26.25 22.5C26.25 21.5054 25.8549 20.5516 25.1517 19.8483C24.4484 19.1451 23.4946 18.75 22.5 18.75H7.5C6.50544 18.75 5.55161 19.1451 4.84835 19.8483C4.14509 20.5516 3.75 21.5054 3.75 22.5C3.75 23.4946 4.14509 24.4484 4.84835 25.1517C5.55161 25.8549 6.50544 26.25 7.5 26.25C8.49456 26.25 9.44839 25.8549 10.1517 25.1517C10.8549 24.4484 11.25 23.4946 11.25 22.5V7.5C11.25 6.50544 10.8549 5.55161 10.1517 4.84835C9.44839 4.14509 8.49456 3.75 7.5 3.75C6.50544 3.75 5.55161 4.14509 4.84835 4.84835C4.14509 5.55161 3.75 6.50544 3.75 7.5C3.75 8.49456 4.14509 9.44839 4.84835 10.1517C5.55161 10.8549 6.50544 11.25 7.5 11.25H22.5C23.4946 11.25 24.4484 10.8549 25.1517 10.1517C25.8549 9.44839 26.25 8.49456 26.25 7.5C26.25 6.50544 25.8549 5.55161 25.1517 4.84835C24.4484 4.14509 23.4946 3.75 22.5 3.75Z" stroke="#54BD95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className="ms-8 ">
                                    <h2 className="text-2xl font-bold">Engagement</h2>
                                    <p className="textp mt-3 lg:w-10/12">Quiuckly navigate you anda engage with your adience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rating section end */}
            <div className="bg4 py-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-8">
                        <div>
                            <h1 className="text-5xl font-bold text-center">Our Features you cab get</h1>
                        </div>
                        <div className="flex items-center justify-between px-2">
                            <p className="textp w-7/12">We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
                            <button className="bg py-3 px-6 rounded-3xl text-white">Get Started</button>
                        </div>
                    </div>

                    <div className="mt-28 grid grid-cols-1 lg:grid-cols-3 gap-y-12 justify-items-center items-center">
                        <div className="w-96 text-center lg:text-start">
                            <Image
                                src={Image7}
                                alt="Image"
                                className='w-96 h-96 rounded-xl'
                            />
                            <h1 className="mt-5 text-2xl font-semibold">Collboration Teams</h1>
                            <p className="textp mt-3">Here you can handle projects together with team virtually</p>
                        </div>
                        <div className="w-96 text-center lg:text-start">
                            <Image
                                src={Image8}
                                alt="Image"
                                className='w-96 h-96 rounded-xl'
                            />
                            <h1 className="mt-5 text-2xl font-semibold">Cloud Storage</h1>
                            <p className="textp mt-3">No nedd to worry about storage because we provide storage up to 2 TB</p>
                        </div>
                        <div className="w-96 text-center lg:text-start">
                            <Image
                                src={Image9}
                                alt="Image"
                                className='w-96 h-96 rounded-xl'
                            />
                            <h1 className="mt-5 text-2xl font-semibold">Daily Analytics</h1>
                            <p className="textp mt-3">We always provide useful informatin to make it easier for you every day</p>
                        </div>
                    </div>

                    <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center lg:justify-items-start items-center">
                        <div>
                            <h1 className="text-center md:text-start lg:text-start text-4xl font-bold lg:w-10/12">What Benifit Will You Get</h1>

                            <div className="mt-10 w-11/12 md:w-full lg:w-full mx-auto md:mx-0 lg:mx-0">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                    </svg>
                                    <p className="font-bold ms-8">Free Consulting With Experet Saving Money</p>
                                </div>
                                <div className="flex items-center mt-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                    </svg>
                                    <p className="font-bold ms-8">Online Banking</p>
                                </div>
                                <div className="flex items-center mt-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                    </svg>
                                    <p className="font-bold ms-8">Investment Report Every Month</p>
                                </div>
                                <div className="flex items-center mt-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                    </svg>
                                    <p className="font-bold ms-8">Saving Money For The Future</p>
                                </div>
                                <div className="flex items-center mt-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                    </svg>
                                    <p className="font-bold ms-8">Online Transection</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto relative">
                            <Image
                                src={Image10}
                                alt="Image"
                                className='w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-2xl'
                            />
                            <div className="box2 p-2 flex items-center lg:w-6/12 justify-between absolute top-6 -left-3 md:-left-10 lg:-left-6">
                                <Image
                                    src={Image4}
                                    alt="Image"
                                    className='w-14 h-14 rounded-full'
                                />
                                <div className="px-2">
                                    <h1 className="font-semibold text-sm">Amanda Young</h1>
                                    <p className="trextp text-sm">Expert Saving Money</p>
                                </div>
                                <svg className="bg-[#74C9A9] p-3 rounded-full" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.5 9.58336C17.5029 10.6832 17.2459 11.7683 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6696 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7683 3.33047 10.6832 3.33333 9.58336C3.33384 8.26815 3.70051 6.97907 4.39227 5.86048C5.08402 4.7419 6.07355 3.838 7.25 3.25002C8.23176 2.75413 9.31678 2.49716 10.4167 2.50002H10.8333C12.5703 2.59585 14.2109 3.32899 15.441 4.55907C16.671 5.78915 17.4042 7.42973 17.5 9.16669V9.58336Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className="bg-[#FFF] w-36 py-1 lg:py-2 px-2 rounded-2xl absolute top-32 lg:top-28 -right-2 md:-right-10 lg:right-20 ">
                                <p className="textp">Total Income</p>
                                <div className="flex justify-between">
                                    <h3 className="font-bold">$245.00</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 16.6663V8.33301" stroke="#52BD94" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 16.6663V3.33301" stroke="#52BD94" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5 16.6665V11.6665" stroke="#52BD94" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <svg className="bg-[#74C9A9] p-2 rounded-2xl absolute bottom-20 -left-0 md:bottom-28 lg:bottom-36 lg:left-20 md:-left-6" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 25 25" fill="none">
                                <g clip-path="url(#clip0_0_173)">
                                    <path d="M16.1876 3.74049L4.91847 6.76004C4.02936 6.99828 3.50172 7.91217 3.73996 8.80128L6.75951 20.0704C6.99775 20.9595 7.91165 21.4872 8.80076 21.2489L20.0699 18.2294C20.959 17.9911 21.4866 17.0772 21.2484 16.1881L18.2288 4.919C17.9906 4.02989 17.0767 3.50225 16.1876 3.74049Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.24587 11.6397C9.91271 11.461 10.3084 10.7756 10.1298 10.1087C9.95108 9.4419 9.26566 9.04617 8.59883 9.22485C7.93199 9.40352 7.53626 10.0889 7.71494 10.7558C7.89362 11.4226 8.57904 11.8183 9.24587 11.6397Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.386 12.9683L15.2829 10.0221L8.8011 21.2489" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_173">
                                        <rect width="20" height="20" fill="white" transform="translate(0.24707 5.42358) rotate(-15)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className="bg-[#FFF] py-4 lg:py-4 px-2 rounded-2xl absolute -bottom-5 lg:-bottom-4 -left-2 md:-left-12 lg:left-10 ">
                                <div className="flex justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83333 11C2.83333 5.9374 6.93739 1.83334 12 1.83334C17.0626 1.83334 21.1667 5.9374 21.1667 11C21.1667 16.0626 17.0626 20.1667 12 20.1667C6.93739 20.1667 2.83333 16.0626 2.83333 11ZM12 0.166672C6.01692 0.166672 1.16667 5.01692 1.16667 11C1.16667 16.9831 6.01692 21.8333 12 21.8333C17.9831 21.8333 22.8333 16.9831 22.8333 11C22.8333 5.01692 17.9831 0.166672 12 0.166672ZM11.9301 14.6944L17.7196 8.69437L16.2804 7.30564L11.1148 12.6591L7.61369 9.93773L6.38631 11.5168L10.5968 14.7896L11.3062 15.341L11.9301 14.6944Z" fill="#2B9B5B" />
                                    </svg>
                                    <h3 className="font-bold ms-2">Money Transfer Succesfull</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    

                    <div className="mt-28">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Choose Plan <br /> That’s Right For You</h1>
                            <p className="textp mt-8">Choose plan that works best for you, feel free to contact us</p>
                        </div>

                        <div className="box1 mt-20 w-80 mx-auto p-4 rounded-xl text-center">
                            <button className="btn rounded-xl">Bil Monthly</button>
                            <button className="bg px-6 py-3 rounded-xl text-white ms-6">Bil Yearly</button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 mt-28 justify-items-center items-center gap-10">
                            <div className="box3 py-4 w-96">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold mt-6">Free</h2>
                                    <p className="textp mt-3">Have a go  and test your  superpowers</p>
                                </div>
                                <div className="text-center mt-8">
                                    <h1 className="text-4xl font-bold mt-6"> <sup className="textp text-2xl">$</sup> 0</h1>
                                </div>

                                <div className="mt-10 w-11/12 mx-auto box4 p-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">2 Users</p>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">2 Files</p>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">Public Share & Comments</p>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">Chat Support </p>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">New income apps</p>
                                    </div>
                                    <button className="btn text1 rounded-2xl w-full mt-10">Signup for free</button>
                                </div>
                            </div>
                            <div className="bg rounded-2xl pt-4 w-96">
                                <div className="text-center text-white">
                                    <h2 className="text-2xl font-bold mt-6">Pro</h2>
                                    <p className="mt-3">Experiment the power of infinite possibilities</p>
                                </div>
                                <div className="box5 mt-8 py-4">
                                    <div className="text-center mt-8">
                                        <h1 className="text-4xl font-bold mt-6 text-white"> <sup className="text-2xl">$</sup> 8</h1>
                                        <button className="mt-4 text-white rounded-2xl bg-[#85DAB9] py-3 px-6">Save $50 a year</button>
                                    </div>

                                    <div className="mt-10 w-11/12 mx-auto box4 p-6">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                            </svg>
                                            <p className="font-bold ms-8">2 Users</p>
                                        </div>
                                        <div className="flex items-center mt-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                            </svg>
                                            <p className="font-bold ms-8">2 Files</p>
                                        </div>
                                        <div className="flex items-center mt-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                            </svg>
                                            <p className="font-bold ms-8">Public Share & Comments</p>
                                        </div>
                                        <div className="flex items-center mt-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                            </svg>
                                            <p className="font-bold ms-8">Chat Support </p>
                                        </div>
                                        <div className="flex items-center mt-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                            </svg>
                                            <p className="font-bold ms-8">New income apps</p>
                                        </div>
                                        <button className="btn text-white rounded-2xl w-full mt-10 bg">Go to pro</button>
                                    </div>
                                </div>
                            </div>
                            <div className="box3 py-4 w-96">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold mt-6">Business</h2>
                                    <p className="textp mt-3">Unveil new superpowers and join the Design Leaque</p>
                                </div>
                                <div className="text-center mt-8">
                                    <h1 className="text-4xl font-bold mt-6"> <sup className="textp text-2xl">$</sup>10</h1>
                                </div>

                                <div className="mt-10 w-11/12 mx-auto box4 p-6">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">All the features of pro plan</p>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">Account success Manager</p>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">Single Sign-On (SSO)</p>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">Co-conception pogram</p>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                                        </svg>
                                        <p className="font-bold ms-8">Collaboration-Soon</p>
                                    </div>
                                    <button className="btn text1 rounded-2xl w-full mt-10">Goto Business</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;