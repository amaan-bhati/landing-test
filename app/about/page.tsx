
  import PageIllustration from "@/components/page-illustration";
  import type { Metadata } from "next"
  import Hero from "@/components/about/hero-about";
  import Timeline from "@/components/about/timeline";
  import Team from "@/components/about/team";
  import Career from "@/components/about/career";
  import Clients from "@/components/clients";
  import Cta from "@/components/cta";
  import { Header, Footer } from "@/components/layout";

  export const metadata: Metadata = {
    title:
      "Keploy | Our Team",
    description:"Meet the Keploy team, a group of passionate individuals dedicated to making testing easier for developers. Learn more about our journey and how we can help you.",
    keywords:
      "Integration testing, cypress ai tools free, playwright testing, regression testing in software testing, e2e Testing, ai testing, Unit Testing, API Testing, open source ai testing tool, Service Mocking, Dependency Mocking, AI Test Generator, AI Test Case Generator, AI Test Automation, AI Test Coverage, RestAssured Alternative, free testing tools for api testing, AI in Testing, Unit Test Generator, Open-Source Testing Tools, Test Coverage Tools, Automated Unit Testing, AI-Powered Unit Tests, Improve Test Coverage, AI for Developers, Efficient Unit Testing, Test Case Generation, Flaky Test Prevention, Smart Testing Tools, Code Coverage Tools, End-to-End Testing, Test Automation, AI Testing Framework, Reliable Test Generation, Reduce Redundant Tests, AI Coding Assistant, Open-Source AI TestingAPI Testing Automation,Unit Testing Automation,Test-driven development tools,Automated API testing, Developer tools for testing, Open-source testing frameworks, Qodo Alternative, Codium Alternative, CodeAnt Alternative, RestAssured Alternative, Unit test generator, Automatic unit testing for developers,Developer tools for unit tests,Test generation tools for code,Unit test automation for developers,Unit testing made easy, ai test, ai unit test, ai test, ai testster, ai api testing, open source api testing, automated tools for software testing, ci testing tools, open sourced testing tools, how to use junit on vscode, unittest python, software unit testing solution for automotive, unit testing vs integration testing, unit test vs integration test, unit vs integration testing, automated unit testing tools, unit testing tools, software unit testing tools, unit testing software tools, types of unit testing, software unit testing example, unit testing cases, python unit testing, generation test, integration testing vs unit testing, regression testing, api integration, acceptance testing, test automation tools, testing pyramid, smoke testing in software testing,test cases, benchmark software testing, qa automation, shift left, manual testing, jest mock, junit testing, cucumber testing, python coverage, best ai for python testing, jest coverage, vitest coverage, javascript unit testing, best ai for javascript testing, best ai for typescript testing, open source ai testing agent, ai automation, unit tests java vscode, how to use ai to automate testing, jetbrains ai, how to use junit on vscode, ai for automation, software unit testing solution, best free ai for java, java unit testing, unit testing tool for java, Integration testing tool for java, restful api testing, regression testing vs smoke testing, integration testing vs system testing, unit testing tool for node, Integration testing tool for node, unit testing tool for python, Integration testing tool for python, browserstack alternatives, selenium alternatives, browserling alternative, testrail alternatives, appium alternatives, unit testing vs end to end testing",
  };

  export default function About() {
    return (
      <>
        <Header />
        {/*<PageIllustration />*/}
        <Hero />
        <div className="relative bg-slate-950 after:absolute after:top-0 after:right-0 after:h-full after:w-96 after:pointer-events-none max-lg:after:hidden">
        {/*<Timeline />*/}
        <Team />
        {/* <Benefits /> */}
        {/* <div className="relative bg-slate-950 after:absolute after:top-0 after:right-0 after:h-full after:w-96 after:pointer-events-none max-lg:after:hidden"> */}
        <Career />
        </div>
        <Clients />
        <Cta />
        <Footer />
      </>
    );
  }
  