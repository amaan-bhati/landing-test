import Tooltip from "@/components/tooltip";

export default function ComparePlans() {
    return (
        <section>
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
                <div className="pb-12 md:pb-20">
                    <div className="mx-auto grid max-w-sm max-md:gap-6 md:-mx-6 md:max-w-none md:grid-cols-4">
                        {/* Column with labels */}
                        <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
                            {/* Empty cell */}
                            <div />
                            {/* # Key features */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-1"
                                aria-hidden="true"
                            >
                                <div className="mb-2 mt-5 font-bold">Unit Test Generation</div>
                            </div>
                            {/* Translated Words */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-2"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="01"
                                        content="Validated Tests: Build, Pass, Improve Coverage, Non-Flaky"
                                    >
                                        Test Result Summary
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Search Page Limit */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-3"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="02"
                                        content="Discarded test cases flagged and shown on an intuitive dashboard."
                                    >
                                        Discarded TestCases
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Custom Fonts */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-4"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="03"
                                        content="Customer Support System"
                                    >
                                        Tech Support
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Code Editor */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-5"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="04"
                                        content="Custom LLM models for tailored test generation."
                                    >
                                        Custom LLM Model
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Test writing limitations */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-6"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="04"
                                        content="Test writing limitations"
                                    >
                                        Test Limitation
                                    </Tooltip>
                                </div>
                            </div>
                            {/* # Hosting */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-7"
                                aria-hidden="true"
                            >
                                <div className="mb-2 mt-5 font-bold">API Testing</div>
                            </div>
                            {/* CI/CD */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-8"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="06"
                                        content="Customised Integrations for automating into github workflows, Gitlab Runners and Jenkins pipeline."
                                    >
                                        CI/CD Integrations
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Test Updates*/}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-9"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="07"
                                        content="Re-record Tests from existing mocks to reflect application changes, keeping tests accurate and current."
                                    >
                                        Re-record testcase
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Unlimited Runs */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-10"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="08"
                                        content="Supports unlimited test runs per month."
                                    >
                                    Unlimited Runs
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Language Support */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-11"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="09"
                                        content="Language agnostic platform and supports various languages like Node, Python, Go, Java and etc."
                                    >
                                        Language Support
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Dynamic Handling */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-12"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="09"
                                        content="Templatizes test cases to handle dynamic fields like JWT tokens seamlessly across requests."
                                    >
                                     Dynamic Handling
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Readable Mocks */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-[13]"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="09"
                                        content="Add custom user readable HTTP mocks with unique names, accurate timestamps, and detailed request/response data."
                                    >
                                    Readable Mocks
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Dynamic Handling */}
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-[14]"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="09"
                                        content="Seamless integrations with Docker and Kubernetes, enabling test generation and recording by running your application in these environments."
                                    >
                                     Docker Kubernetes Support
                                    </Tooltip>
                                </div>
                            </div>
                            {/* # Creation
                            <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-[15]"
                                aria-hidden="true"
                            >
                                <div className="mb-2 mt-5 font-bold">Creation</div>
                            </div>
                            {/* Created Words */}
                            {/* <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-[16]"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="11"
                                        content="Apply visual attributes to refine your designs and focus on relevant insights."
                                    >
                                        Created Words
                                    </Tooltip>
                                </div>
                            </div>
                            {/* Team Projects */}
                            {/* <div
                                className="flex flex-col justify-end px-6 max-md:hidden md:order-[17]"
                                aria-hidden="true"
                            >
                                <div className="border-b border-gray-200 py-4 text-sm">
                                    <Tooltip
                                        id="12"
                                        content="Apply visual attributes to refine your designs and focus on relevant insights."
                                    >
                                        Team Projects
                                    </Tooltip>
                                </div>
                            </div> */}
                        </section>
                        {/* End: Column with labels */}
                        {/* Hobby table */}
                        {/*<section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">*/}
                        {/*    <div className="relative flex flex-col justify-end px-6">*/}
                        {/*        <div className="grow">*/}
                        {/*            <div className="mb-5 font-medium">Hobby</div>*/}
                        {/*            /!*<div>*!/*/}
                        {/*            /!*    <a*!/*/}
                        {/*            /!*        className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"*!/*/}
                        {/*            /!*        href="#0"*!/*/}
                        {/*            /!*    >*!/*/}
                        {/*            /!*        Free trial*!/*/}
                        {/*            /!*    </a>*!/*/}
                        {/*            /!*</div>*!/*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* # Key features *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-1">*/}
                        {/*        <div className="mb-2 mt-5 font-bold md:sr-only">*/}
                        {/*            Key features*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* Translated Words *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-2">*/}
                        {/*        <div className="h-full border-b border-gray-200 py-4 text-sm">*/}
                        {/*            5,000 <span className="md:sr-only">Translated Words</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* Search Page Limit *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-3">*/}
                        {/*        <div className="h-full border-b border-gray-200 py-4 text-sm">*/}
                        {/*            100 <span className="md:sr-only">Search Page Limit</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* Custom Fonts *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-4">*/}
                        {/*        <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">*/}
                        {/*            <svg*/}
                        {/*                className="mr-3 shrink-0 fill-emerald-500"*/}
                        {/*                xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                width={12}*/}
                        {/*                height={9}*/}
                        {/*            >*/}
                        {/*                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>*/}
                        {/*            </svg>*/}
                        {/*            <span className="md:sr-only">Custom Fonts</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* Code Editor *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-5">*/}
                        {/*        <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm max-md:sr-only">*/}
                        {/*            <span className="md:sr-only">Code Editor</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* # Features *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-6">*/}
                        {/*        <div className="mb-2 mt-5 font-bold md:sr-only">Features</div>*/}
                        {/*    </div>*/}
                        {/*    /!* Bandwidth *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-7">*/}
                        {/*        <div className="h-full border-b border-gray-200 py-4 text-sm">*/}
                        {/*            100MB <span className="md:sr-only">Bandwidth</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* Visitors *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-8">*/}
                        {/*        <div className="h-full border-b border-gray-200 py-4 text-sm">*/}
                        {/*            1,000 <span className="md:sr-only">Visitors</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* Max Upload Size *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-9">*/}
                        {/*        <div className="h-full border-b border-gray-200 py-4 text-sm">*/}
                        {/*            5MB <span className="md:sr-only">Max Upload Size</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* SSL Certificate *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-10">*/}
                        {/*        <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">*/}
                        {/*            <svg*/}
                        {/*                className="mr-3 shrink-0 fill-emerald-500"*/}
                        {/*                xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                width={12}*/}
                        {/*                height={9}*/}
                        {/*            >*/}
                        {/*                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>*/}
                        {/*            </svg>*/}
                        {/*            <span className="md:sr-only">SSL Certificate</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* # Creation *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-11">*/}
                        {/*        <div className="mb-2 mt-5 font-bold md:sr-only">Creation</div>*/}
                        {/*    </div>*/}
                        {/*    /!* Created Words *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-12">*/}
                        {/*        <div className="h-full border-b border-gray-200 py-4 text-sm">*/}
                        {/*            Unlimited <span className="md:sr-only">Created Words</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    /!* Team Projects *!/*/}
                        {/*    <div className="flex flex-col justify-end px-6 md:order-[13]">*/}
                        {/*        <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm max-md:sr-only">*/}
                        {/*            <span className="md:sr-only">Team Projects</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                        {/* End: Hobby table */}
                        {/* Basic table */}
                        <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl ">
                            <div className="relative flex flex-col justify-end px-6">
                                <div className="grow">
                                    <div className="mb-5 font-medium">Open Source</div>
                                    {/*<div>*/}
                                    {/*    <a*/}
                                    {/*        className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"*/}
                                    {/*        href="#0"*/}
                                    {/*    >*/}
                                    {/*        Free trial*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            {/* # Key features */}
                            <div className="flex flex-col justify-end px-6 md:order-1">
                                <div className="mb-2 mt-5 font-bold md:sr-only">
                                    Key features
                                </div>
                            </div>
                            {/* Test Result Summary */}
                            <div className="flex flex-col justify-end px-6 md:order-2">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                   <span className="md:sr-only">Test Result Summary</span>
                                </div>
                            </div>
                            {/* Discarded test cases flagged and shown on an intuitive dashboard. */}
                            <div className="flex flex-col justify-end px-6 md:order-3">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                    <span className="md:sr-only">Discarded test cases flagged and shown on an intuitive dashboard.</span>
                                </div>
                            </div>
                            {/* Custom Fonts */}
                            <div className="flex flex-col justify-end px-6 md:order-4">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <span className="md:sr-only">Community Support</span>
                                </div>
                            </div>
                            {/* Code Editor */}
                            <div className="flex flex-col justify-end px-6 md:order-5">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Custom LLM Model</span>
                                </div>
                            </div>
                            {/* LoC */}
                            <div className="flex flex-col justify-end px-6 md:order-6">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                  Free 1,000 LoC <span className="md:sr-only">LoC</span>
                                </div>
                            </div>
                            {/* # Features */}
                            <div className="flex flex-col justify-end px-6 md:order-7">
                                <div className="mb-2 mt-5 font-bold md:sr-only">Features</div>
                            </div>
                            {/* CI/CD */}
                            <div className="flex flex-col justify-end px-6 md:order-8">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                   <span className="md:sr-only">CI/CD</span>
                                </div>
                            </div>
                            {/* Re-record testcase */}
                            <div className="flex flex-col justify-end px-6 md:order-9">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Re-record testcase</span>
                                </div>
                            </div>
                            {/* Runs */}
                            <div className="flex flex-col justify-end px-6 md:order-10">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Runs</span>
                                </div>
                            </div>
                            {/* SSL Certificate */}
                            <div className="flex flex-col justify-end px-6 md:order-11">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Dynamic Handling</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end px-6 md:order-12">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Readable Mocks</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end px-6 md:order-[13]">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Readable Mocks</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end px-6 md:order-[14]">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Docker Kubernetes Support</span>
                                </div>
                            </div>
                            {/* # Creation */}
                            {/* <div className="flex flex-col justify-end px-6 md:order-12">
                                <div className="mb-2 mt-5 font-bold md:sr-only">Creation</div>
                            </div> */}
                            {/* Created Words */}
                            {/* <div className="flex flex-col justify-end px-6 md:order-[13]">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                    Unlimited <span className="md:sr-only">Created Words</span>
                                </div>
                            </div> */}
                            {/* Team Projects */}
                            {/* <div className="flex flex-col justify-end px-6 md:order-[14]">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm max-md:sr-only">
                                    <span className="md:sr-only">Team Projects</span>
                                </div>
                            </div> */}
                        </section>
                        {/* End: Basic table */}
                        {/* Business table */}
                        <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl [&>div]:bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950">
                            <div className="relative flex flex-col justify-end px-6">
                                <div className="grow">
                                    <div className="mb-5 font-medium text-gray-200">Business</div>
                                    {/*<div>*/}
                                    {/*    <a*/}
                                    {/*        className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"*/}
                                    {/*        href="#0"*/}
                                    {/*    >*/}
                                    {/*        Free trial*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            {/* # Key features */}
                            <div className="flex flex-col justify-end px-6 md:order-1">
                                <div className="mb-2 mt-5 font-bold text-gray-200 md:sr-only">
                                    Key features
                                </div>
                            </div>
                            {/* Translated Words */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-2">
                                <div className="h-full border-b border-gray-600 py-4 text-sm">
                                <svg
                                    className="mr-3 shrink-0 fill-emerald-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={12}
                                    height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg> 
                                    <span className="md:sr-only">Test Result Summary</span>
                                </div>
                            </div>
                            {/* Search Page Limit */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-3">
                                <div className="h-full border-b border-gray-600 py-4 text-sm">
                                    Unlimited
                                </div>
                            </div>
                            {/* Custom Fonts */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-4">
                                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                                    Slack Support <span className="md:sr-only">Custom Fonts</span>
                                </div>
                            </div>
                            {/* Code Editor */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-5">
                                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Custom LLM Model</span>
                                </div>
                            </div>
                            {/* LoC */}
                                <div className="flex flex-col justify-end px-6 text-gray-300 md:order-6">
                                <div className="h-full border-b border-gray-600 py-4 text-sm">
                                  1,000 LoC per User<span className="md:sr-only">LoC</span>
                                </div>
                            </div>
                            {/* # Features */}
                            <div className="flex flex-col justify-end px-6 md:order-7">
                                <div className="mb-2 mt-5 font-bold text-gray-200 md:sr-only">
                                    Features
                                </div>
                            </div>
                            {/* CI/CD */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-8">
                                <div className="h-full border-b border-gray-600 py-4 text-sm">
                                <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">CI/CD</span>
                                </div>
                            </div>
                            {/* Visitors */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-9">
                                <div className="h-full border-b border-gray-600 py-4 text-sm">
                                <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Re-Record Testcases</span>
                                </div>
                            </div>
                            {/* Max Upload Size */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-10">
                                <div className="h-full border-b border-gray-600 py-4 text-sm">
                                <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Max Upload Size</span>
                                </div>
                            </div>
                            {/* SSL Certificate */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-11">
                                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Unlimited Run</span>
                                </div>
                            </div>
                            {/* Dynamic Handling */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-12">
                                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Dynamic Handling</span>
                                </div>
                            </div>
                            {/* Readable Mocks */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-[13]">
                                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Readable Mocks</span>
                                </div>
                            </div>
                            {/* Docker Kubernetes Support */}
                            <div className="flex flex-col justify-end px-6 text-gray-300 md:order-[14]">
                                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Docker Kubernetes Support</span>
                                </div>
                            </div>
                            {/* # Creation */}
                            {/* <div className="flex flex-col justify-end px-6 md:order-12">
                                <div className="mb-2 mt-5 font-bold text-gray-200 md:sr-only">
                                    Creation
                                </div>
                            </div> */}
                            {/* Created Words */}
                            {/* <div className="flex flex-col justify-end px-6 text-gray-300 md:order-[13]">
                                <div className="h-full border-b border-gray-600 py-4 text-sm">
                                    Unlimited <span className="md:sr-only">Created Words</span>
                                </div>
                            </div> */}
                            {/* Team Projects */}
                            {/* <div className="flex flex-col justify-end px-6 text-gray-300 md:order-[14]">
                                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Team Projects</span>
                                </div>
                            </div> */}
                        </section>
                        {/* End: Business table */}
                        {/* Enterprise table */}
                        <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
                            <div className="relative flex flex-col justify-end px-6">
                                <div className="grow">
                                    <div className="mb-5 font-medium">Enterprise</div>
                                    {/*<div>*/}
                                    {/*    <a*/}
                                    {/*        className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"*/}
                                    {/*        href="#0"*/}
                                    {/*    >*/}
                                    {/*        Free trial*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            {/* # Key features */}
                            <div className="flex flex-col justify-end px-6 md:order-1">
                                <div className="mb-2 mt-5 font-bold md:sr-only">
                                    Key features
                                </div>
                            </div>
                            {/* Translated Words */}
                            <div className="flex flex-col justify-end px-6 md:order-2">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Translated Words</span>
                                </div>
                            </div>
                            {/* Search Page Limit */}
                            <div className="flex flex-col justify-end px-6 md:order-3">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                    Unlimited
                                </div>
                            </div>
                            {/* Custom Fonts */}
                            <div className="flex flex-col justify-end px-6 md:order-4">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                  Priority Email Support <span className="md:sr-only">Custom Fonts</span>
                                </div>
                            </div>
                            {/* Code Editor */}
                            <div className="flex flex-col justify-end px-6 md:order-5">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Custom LLM Model</span>
                                </div>
                            </div>
                            {/* LoC */}
                                <div className="flex flex-col justify-end px-6 md:order-6">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                Talk to Us <span className="md:sr-only">LoC</span>
                                </div>
                            </div>    
                            {/* # Features */}
                            <div className="flex flex-col justify-end px-6 md:order-7">
                                <div className="mb-2 mt-5 font-bold md:sr-only">Features</div>
                            </div>
                            {/* Bandwidth */}
                            <div className="flex flex-col justify-end px-6 md:order-8">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Bandwidth</span>
                                </div>
                            </div>
                            {/* Visitors */}
                            <div className="flex flex-col justify-end px-6 md:order-9">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Visitors</span>
                                </div>
                            </div>
                            {/* Max Upload Size */}
                            <div className="flex flex-col justify-end px-6 md:order-10">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Max Upload Size</span>
                                </div>
                            </div>
                            {/* SSL Certificate */}
                            <div className="flex flex-col justify-end px-6 md:order-11">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">SSL Certificate</span>
                                </div>
                            </div>
                            {/* SSL Certificate */}
                            <div className="flex flex-col justify-end px-6 md:order-12">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">SSL Certificate</span>
                                </div>
                            </div>
                            {/* SSL Certificate */}
                            <div className="flex flex-col justify-end px-6 md:order-[13]">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">SSL Certificate</span>
                                </div>
                            </div>
                            {/* SSL Certificate */}
                            <div className="flex flex-col justify-end px-6 md:order-[14]">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">SSL Certificate</span>
                                </div>
                            </div>
                            {/* # Creation */}
                            {/* <div className="flex flex-col justify-end px-6 md:order-12">
                                <div className="mb-2 mt-5 font-bold md:sr-only">Creation</div>
                            </div> */}
                            {/* Created Words */}
                            {/* <div className="flex flex-col justify-end px-6 md:order-[13]">
                                <div className="h-full border-b border-gray-200 py-4 text-sm">
                                    Unlimited <span className="md:sr-only">Created Words</span>
                                </div>
                            </div> */}
                            {/* Team Projects */}
                            {/* <div className="flex flex-col justify-end px-6 md:order-[14]">
                                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm">
                                    <svg
                                        className="mr-3 shrink-0 fill-emerald-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={9}
                                    >
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span className="md:sr-only">Team Projects</span>
                                </div>
                            </div> */}
                        </section>
                        {/* End: Enterprise table */}
                    </div>
                </div>
            </div>
        </section>
    );
}