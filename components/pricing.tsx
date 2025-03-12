"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";

export default function PricingTables() {
    const [annual, setAnnual] = useState<boolean>(true);

    return (
        
        <section className="relative"  id='pricing' >
            {/*<PageIllustration />*/}

            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="pb-12 pt-32 md:pb-20 md:pt-32">
                    {/* Section header */}
                    <div className="pb-12 text-center">
                        <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] bg-gradient-to-l from-orange-500/95 to-purple-950/95 bg-clip-text text-transparent md:text-6xl">
                                Plans that match your needs
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p className="text-base text-slate-800/70 text-center mt-4 text-md leading-tight">
                                Choose the plan that fits your team’s needs—powerful testing, flexible pricing.
                            </p>
                        </div>
                    </div>

                    {/* Pricing tables */}
                    <div>
                        {/* Pricing toggle */}
                        <div className="m-auto mb-16 flex max-w-xs justify-center">
                            <div className="relative mx-6 flex w-full rounded-lg bg-gray-200 p-1">
                <span
                    className="pointer-events-none absolute inset-0 m-1"
                    aria-hidden="true"
                >
                  <span
                      className={`absolute inset-0 w-1/2 transform rounded bg-white shadow transition ${annual ? "translate-x-0" : "translate-x-full"}`}
                  ></span>
                </span>
                                <button
                                    className={`relative flex-1 p-1 text-sm font-medium transition ${annual ? "" : "text-gray-900"}`}
                                    onClick={() => setAnnual(true)}
                                    aria-pressed={annual}
                                >
                                    Bill Yearly
                                    <span className="text-emerald-500">-20%</span>
                                </button>
                                <button
                                    className={`relative flex-1 p-1 text-sm font-medium transition ${annual ? "text-gray-500" : ""}`}
                                    onClick={() => setAnnual(false)}
                                    aria-pressed={annual}
                                >
                                    Bill Monthly
                                </button>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-3 xl:max-w-none xl:grid-cols-3 xl:gap-6">
                    {/*        /!* Pricing table 1 *!/*/}
                    {/*        <div className="relative flex h-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">*/}
                    {/*            <div className="mb-4 bg-gradient-to-l from-indigo-900/95 to-purple-950/95 bg-clip-text text-transparent">*/}
                    {/*                <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">*/}
                    {/*                    Hobby*/}
                    {/*                </div>*/}
                    {/*                <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">*/}
                    {/*                    <span className="text-2xl font-bold">$</span>*/}
                    {/*                    <span className="text-4xl font-bold tabular-nums">*/}
                    {/*  {annual ? 12 : 15}*/}
                    {/*</span>*/}
                    {/*                    <span className="pl-1 text-sm text-gray-500">/month</span>*/}
                    {/*                </div>*/}
                    {/*                <div className="grow text-sm text-gray-700">*/}
                    {/*                    For hobby, staging sites, and side hustles.*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <ul className="grow space-y-2 text-sm text-gray-500">*/}
                    {/*                <li className="flex items-center">*/}
                    {/*                    <svg*/}
                    {/*                        className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"*/}
                    {/*                        viewBox="0 0 12 12"*/}
                    {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                    >*/}
                    {/*                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />*/}
                    {/*                    </svg>*/}
                    {/*                    <span>2 pages</span>*/}
                    {/*                </li>*/}
                    {/*                <li className="flex items-center">*/}
                    {/*                    <svg*/}
                    {/*                        className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"*/}
                    {/*                        viewBox="0 0 12 12"*/}
                    {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                    >*/}
                    {/*                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />*/}
                    {/*                    </svg>*/}
                    {/*                    <span>Limited traffic</span>*/}
                    {/*                </li>*/}
                    {/*                <li className="flex items-center">*/}
                    {/*                    <svg*/}
                    {/*                        className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"*/}
                    {/*                        viewBox="0 0 12 12"*/}
                    {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                    >*/}
                    {/*                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />*/}
                    {/*                    </svg>*/}
                    {/*                    <span>50 form submissions</span>*/}
                    {/*                </li>*/}
                    {/*                <li className="flex items-center">*/}
                    {/*                    <svg*/}
                    {/*                        className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"*/}
                    {/*                        viewBox="0 0 12 12"*/}
                    {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                    >*/}
                    {/*                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />*/}
                    {/*                    </svg>*/}
                    {/*                    <span>1,000 visitors/mo</span>*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*            <div className="mt-6">*/}
                    {/*                <a*/}
                    {/*                    className="btn-sm w-full rounded-lg text-sm py-2 px-6 text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden"*/}
                    {/*                    href="#0"*/}
                    {/*                >*/}
                    {/*                    Try for free*/}

                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                            {/* Pricing table 2 */}
                            <div className="relative flex h-full flex-col rounded-3xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] bg-gradient-to-bl from-gray-900/20 via-white/5 to-white/4 ">
                                <div className="mb-4 bg-gradient-to-l from-indigo-900/95 to-purple-950/95 bg-clip-text text-transparent">
                                    <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4 ">
                                        Basic
                                    </div>
                                    <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                                        <span className="text-2xl font-bold">$</span>
                                        <span className="text-4xl font-bold tabular-nums">
                      {annual ? 0 :0}
                    </span>
                                        <span className="pl-1 text-sm text-gray-500">/month</span>
                                    </div>
                                    <div className="grow text-sm text-gray-700">
                                        OSS API Testing 
                                    </div>
                                </div>
                                <ul className="grow space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Generates test cases for APIs and Data Mocks.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Easy test execution and debugging. </span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Zero cost for usuage</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Community Support on Issues</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <a
                                        className="btn-sm w-full rounded-lg text-sm py-2 px-6 text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden"
                                        href="https://github.com/keploy/keploy"
                                    >
                                        Try for free
                                    </a>
                                </div>
                            </div>

                            {/* Pricing table 3 */}
                            <div className="relative flex h-full flex-col rounded-2xl bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm ">
                                <div className="mb-4">
                                    <div className="mb-1 font-medium text-gray-200 underline decoration-gray-600 underline-offset-4">
                                        Pro
                                    </div>
                                    <div className="mb-4 flex items-baseline border-b border-dashed border-gray-600 pb-4">
                                        <span className="text-2xl font-bold text-gray-200">$</span>
                                        <span className="text-4xl font-bold tabular-nums text-gray-200">
                      {annual ? 15 : 19}
                    </span>
                                        <span className="pl-1 text-sm text-gray-400">/month</span>
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        API Testing + Unit Testing 
                                    </div>
                                </div>
                                <ul className="grow space-y-2 text-sm text-gray-400">
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Generate unit test within vscode. </span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Validated tests that works</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>30 sessions</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Email support with dedicated assistance.</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <a
                                        className="btn-sm w-full rounded-lg text-sm py-2 px-6 text-indigo-900 bg-gradient-to-r from-slate-50 to-slate-300 shadow-lg hover:shadow-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden"
                                        href="#0"
                                    >
                                        Start Free Trial
                                    </a>
                                </div>
                            </div>

                            {/* Pricing table 4 */}
                            <div className="relative flex h-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]  bg-gradient-to-bl from-gray-900/20 via-white/5 to-white/4 ">
                                <div className="mb-4 bg-gradient-to-l from-indigo-900/95 to-purple-950/95 bg-clip-text text-transparent">
                                    <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">
                                        Enterprise
                                    </div>
                                    <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                                        <span className="text-2xl font-bold tabular-nums ">
                                            Let's Talk
                                        </span>
                                    </div>
                                    <div className="grow text-sm text-gray-700">
                                        For those needing an enterprise-grade solution.
                                    </div>
                                </div>
                                <ul className="grow space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>One-click test generation for entire repositories.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>RBAC - Based Control.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Private Mock registry.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Priority based support assistance</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <a
                                        className="btn-sm w-full rounded-lg text-sm py-2 px-6 text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden"
                                        href="https://calendar.app.google/cXVaj6hbMUjvmrnt9"
                                    >
                                        Try for free
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}