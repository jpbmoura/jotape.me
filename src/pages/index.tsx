import Head from "next/head";
import logo from "../assets/images/jp-logo.png";
import eye from "../assets/images/sauron.png";
import Image from "next/image";
import Projects from "~/components/Projects";
import Writing from "~/components/Writing";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Lightbulb from "~/components/Lightbulb";

export default function Home() {
  const [isShowenBlackSpeech, setShowenBlackSpeech] = React.useState(true);

  const handleTodayDate = () => {
    const date = new Date();
    const month = date.toLocaleString("en-us", { month: "long" });
    const year = date.getFullYear();

    return `${month}/${year}`;
  };

  return (
    <>
      <Head>
        <title>João Pedro</title>
        <meta name="description" content="Hi there!" />
        <link rel="icon" href="/favicon-JP(G).png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-neutral-900 text-white">
        <Image
          className="fixed left-1 top-2 z-20 hidden w-6 rounded-full bg-neutral-900 blur-sm transition-all hover:blur-none md:block"
          src={logo}
          alt="logo"
        />

        <Lightbulb />

        <div className="h-full w-full animate-fade-in px-6 py-16 md:max-w-2xl md:px-0 md:py-32 ">
          <div className="space-y-7">
            <div className=" flex flex-row items-center justify-between  py-4">
              <h1 className="font-medium">João Pedro de Moura</h1>
              <div className="flex flex-row space-x-1">
                <a
                  href="https://github.com/jpbmoura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub className="text-4xl transition hover:cursor-pointer hover:text-yellow-400" />
                </a>

                <a
                  href="https://br.linkedin.com/in/jpbmoura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="text-4xl transition hover:cursor-pointer hover:text-blue-400" />
                </a>
              </div>
            </div>
            <p className="text-justify font-light">
              I&apos;m a front-end developer based in Brazil passioned for
              creating beautiful and functional user experiences.
            </p>

            <p className="text-justify font-light">
              My expertise lies in React, Next.JS, TypeScript and JavaScript.
              Beyond my technical skills, I&apos;m a strong team player with a
              positive attitude and a dedication to exceeding expectations.
              Always looking for opportunities to grow and contribute to
              innovative projects. I&apos;m also a quick learner and eager to
              adopt new technologies.
            </p>
            <p className="text-justify font-light">
              Beside programming, I&apos;m a huge music nerd, love to take some
              random photos and sometimes I like to write about life and stuff.
            </p>
          </div>

          <div className="justify-between3 mt-12 flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <h2 className="mb-6 border-t border-t-neutral-500 pl-1 text-sm font-light text-neutral-400  md:border-none">
                Projects
              </h2>
              <Projects />
            </div>

            <div className="w-full md:ml-3 md:w-1/3">
              <h2 className="mb-6 border-t border-t-neutral-500 pl-1 text-sm font-light text-neutral-400 md:border-none">
                Writing
              </h2>
              <Writing />
            </div>
            <div className="w-full md:ml-3 md:w-1/3">
              <h2 className="mb-6 border-t border-t-neutral-500 pl-1 text-sm font-light text-neutral-400 md:border-none">
                Photos
              </h2>
              <div className="min-h-16">
                <a
                  href="https://vsco.co/jpbmoura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex flex-row items-center font-light decoration-neutral-500 transition hover:text-fuchsia-400 hover:decoration-fuchsia-500"
                >
                  Go to my Photos <BsArrowUpRight className="pl-1" />
                </a>
                <p className="font-light text-neutral-400">
                  Don&apos;t create expectations
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="">More about me</h2>
            <p className="mt-6 text-justify font-light">
              I love to learn new things, currently learning about advanced
              features in React and Next.js. I&apos;m also interested in
              learning about UI/UX design.
            </p>
          </div>
        </div>
        <div className="z-10 flex h-14 w-full items-center justify-center border-t border-t-neutral-800 bg-neutral-900">
          <div className="flex w-full items-center justify-between px-6 font-light text-neutral-400 md:max-w-2xl md:px-0">
            <span
              onMouseOver={() => setShowenBlackSpeech(false)}
              onMouseOut={() => setShowenBlackSpeech(true)}
              className="flex flex-row space-x-1 transition hover:cursor-default hover:text-slate-500"
            >
              <Image className="z-20 w-5" src={eye} alt="sauron eye" />
              {isShowenBlackSpeech ? (
                <p className="">&quot;Ash nazg durbatulûk&quot;</p>
              ) : (
                <p className="hover:text-orange-300">
                  &quot;One Ring to rule them all&quot;
                </p>
              )}
            </span>
            <p>{handleTodayDate()}</p>
          </div>
        </div>
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
