import Link from 'next/link'
import React from 'react'

function toggleDarkMode() {
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-white');
}

const Navbar = () => {
    return (
        <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <nav className=" relative   max-w-[85rem] w-full  mx-auto md:flex md:items-center md:justify-between md:gap-7 py-3    sm:px-2 ">
                <div className="flex  justify-between items-center  gap-x-4 w-full md:w-auto">
                    <img
                    src=" data:image/png;base64,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"
                    alt="logo"
                    className="h-12 w-12 rounded-full"
                    />
                    <Link
                    
                        className="flex-none font-semibold   font-bold uppercase  text-2xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                        href="/"
                        aria-label="Brand"
                    >
                       DESIGNPRO
                    </Link>
                    {/* Collapse Button */}
                    <button
                        type="button"
                        className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        id="hs-header-base-collapse"
                        aria-expanded="false"
                        aria-controls="hs-header-base"
                        aria-label="Toggle navigation"
                        data-hs-collapse="#hs-header-base"
                    >
                        <svg
                            className="hs-collapse-open:hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1={3} x2={21} y1={6} y2={6} />
                            <line x1={3} x2={21} y1={12} y2={12} />
                            <line x1={3} x2={21} y1={18} y2={18} />
                        </svg>
                        <svg
                            className="hs-collapse-open:block shrink-0 hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                    {/* End Collapse Button */}
                </div>
                {/* Collapse */}
                <div
                    id="hs-header-base"
                    className="hs-collapse hidden overflow-hidden space-x-8  transition-all duration-300 basis-full grow md:block "
                    aria-labelledby="hs-header-base-collapse"
                >
                    <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                            <div className="grow">
                                <div className="flex flex-col  md:flex-row md:justify-end md:items-center gap-0.5 md:gap-8">
                                    <Link
                                        className="p-2 flex items-center text-lg font-medium uppaercase bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                                        href="/"
                                        aria-current="page"
                                    >
                                        <svg
                                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        </svg>
                                        Home
                                    </Link>

                                    <Link
                                        className="p-2 flex items-center text-lg font-medium   uppercase text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        href="/about"
                                    >
                                        <svg
                                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>
                                        about
                                    </Link>
                                    <Link
                                        className="p-2 flex items-center text-lg font-medium uppercase text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        href="/contact"
                                    >
                                        <svg
                                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 12h.01" />
                                            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                            <rect width={20} height={14} x={2} y={6} rx={2} />
                                        </svg>
                                        CONTACT
                                    </Link>
                                    <Link
                                        className="p-2 flex items-center text-lg font-medium uppercase text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        href="/add-design"
                                    >
                                        <svg
                                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 12h.01" />
                                            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                            <rect width={20} height={14} x={2} y={6} rx={2} />
                                        </svg>
                                        Add Design
                                    </Link>
                                    <Link
                                        className="p-2 flex items-center text-lg font-medium  uppercase  text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        href="/browse-designs"
                                    >
                                        <svg
                                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                            <path d="M18 14h-8" />
                                            <path d="M15 18h-5" />
                                            <path d="M10 6h8v4h-8V6Z" />
                                        </svg>
                                        Designs
                                    </Link>
                                </div>
                            </div>
                            <div className="my-2 md:my-0 md:mx-2">
                                <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700" />
                            </div>
                            {/* Button Group */}
                            <div className=" flex flex-wrap items-center gap-x-8">
                                <Link
                                    className="py-[7px] px-2.5 bg-green-200 inline-flex items-center text-lg font-medium  uppercase rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                    href="/login"
                                >
                                    Sign in
                                    
                                </Link>
                                <Link
                                    className="py-[7px] px-2.5 inline-flex items-center text-lg font-medium uppaercase rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                    href="/managedesign"
                                >
                                    Manage
                                </Link>
                                <Link
                                    className="py-2 px-2.5 inline-flex items-center text-lg font-medium uppercase  rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
                                    href="/signup"
                                >
                                    Get started
                                </Link>

                            </div>
                            
                            {/* End Button Group */}
                        </div>
                    </div>
                </div>
                {/* End Collapse */}
            </nav>
        </header>
    )
}

export default Navbar