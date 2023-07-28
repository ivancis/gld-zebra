import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">




        <div class="custom__blogTitle max-w-4xl">
          <h1>{globalData.blogTitle}</h1>
        </div>
        






        <div class="flex flex-col gap-4 max-w-4xl w-full mx-auto p-8 mb-8">
          <div class="flex flex-col gap-4 mb-4 max-w-lg">
            <h2 class="text-5xl font-bold">Hi, I&apos;m Gonzalo.</h2>
            <p class="text-2xl">I&apos;m a professional English into Spanish translator specializing in Game Localization.</p>
          </div>
          <blockquote class="text-l italic border-l-2 ml-1 pb-2 pl-5 pr-0 text-gray-900 dark:text-white">
            <p>&apos;I have years of experience in projects for various platforms, and I&apos;ve been a gamer since I was able to pick up a controller. My professional journey has led me to appreciate video games as the most complex art form of our time, and as such, they require one of the most comprehensive translation processes.&apos;</p>
          </blockquote>
        </div>

        <div class="max-w-7xl w-full mx-auto flex flex-wrap gap-4 p-2">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Translation Services
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Translation, Localization, Transcreation, Editing, Proofreading and LQA. I can offer my expertise to effectively help your games reach the Spanish-speaking community and expand into new markets.
            </p>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              PC, Consoles & Mobile
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              I&apos;ve translated over 1 million words across all available platforms, which has allowed me to master their best practices and learn their specific terminology.
            </p>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Gamer Vision
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Gamers don&apos;t tolerate mediocrity and know how to appreciate quality. A well-designed game must understand its audience and meet cultural and linguistic expectations. I can provide the much-needed gamer input for a successful localization.
            </p>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Glossary Creation
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              I can create a glossary or termbase from scratch to make the localization of your game increasingly streamlined and error-free.
            </p>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              CATs
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              MemoQ, Memsource (Phrase), SmartCat
            </p>
          </div>
        </div>

        <div>
          <h2 class="text-5xl text-center">+1,000,000 WORDS TRANSLATED</h2>
        </div>







        <div class="flex flex-col w-full mx-auto my-8 px-8 py-12 backdrop-blur-xl bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-30 hover:bg-opacity-20 dark:hover:bg-opacity-50">
          <div class="md:max-w-7xl md:mx-auto w-full mb-4">
            <h4 className="text-1xl md:text-1xl font-bold p-4">
              Recent projects
            </h4>
          </div>
          <ol
            class="border-l border-neutral-700 dark:border-neutral-200 md:max-w-7xl md:mx-auto md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t px-4">
            {/* <!--First item--> */}
            <li>
              <div class="flex-start flex items-center pt-2 md:block md:pt-0">
                <div
                  class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-700 dark:bg-neutral-200 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p class="mt-2 text-sm text-neutral-200 dark:text-neutral-200">
                  01.07.2021
                </p>
              </div>
              <div class="ml-4 mt-2 pb-5 md:ml-0">
                <h4 class="text-base font-bold">&apos;AA&apos; ARPG</h4>
                <h5 class="my-2 text-sm">German studio, French publisher</h5>
                <div class="mb-3 text-neutral-200 dark:text-neutral-200">
                  <ul class="list-disc pl-3">
                    <li class="text-xs">Localization and editing of dialogues and quest descriptions</li>
                    <li class="text-xs">Collaboration listed in the credits</li>
                    <li class="text-xs">PS5, XBOX X|S and PC (to be released in August 2023)</li>
                  </ul>
                  </div>
              </div>
            </li>

            {/* <!--Second item--> */}
            <li>
              <div class="flex-start flex items-center pt-2 md:block md:pt-0">
                <div
                  class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-700 dark:bg-neutral-200 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p class="mt-2 text-sm text-neutral-200 dark:text-neutral-200">
                  13.09.2021
                </p>
              </div>
              <div class="ml-4 mt-2 pb-5 md:ml-0">
                <h4 class="text-base font-bold">Massive Battle Royale game</h4>
                <h5 class="my-2 text-sm">South Korean publisher</h5>
                <div class="mb-3 text-neutral-200 dark:text-neutral-200">
                  <ul class="list-disc pl-3">
                    <li class="text-xs">Localization of dialogues, item descriptions, and legal disclaimers</li>
                    <li class="text-xs">Android and iOS</li>
                  </ul>
                  </div>
              </div>
            </li>
            
            {/* <!--Third item--> */}
            <li>
              <div class="flex-start flex items-center pt-2 md:block md:pt-0">
                <div
                  class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-700 dark:bg-neutral-200 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p class="mt-2 text-sm text-neutral-200 dark:text-neutral-200">
                  13.09.2021
                </p>
              </div>
              <div class="ml-4 mt-2 pb-5 md:ml-0">
                <h4 class="text-base font-bold">Highly popular MOBA</h4>
                <h5 class="my-2 text-sm">World-leading Chinese publisher</h5>
                <div class="mb-3 text-neutral-200 dark:text-neutral-200">
                  <ul class="list-disc pl-3">
                    <li class="text-xs">Localization of dialogues, character bios, and item descriptions</li>
                    <li class="text-xs">Android and iOS</li>
                  </ul>
                </div>
              </div>
            </li>

            {/* <!--Last item--> */}
            <li>
              <div class="flex-start flex items-center pt-2 md:block md:pt-0">
                <div
                  class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-700 dark:bg-neutral-200 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p class="mt-2 text-sm text-neutral-200 dark:text-neutral-200">
                  25.11.2021
                </p>
              </div>
              <div class="ml-4 mt-2 pb-5 md:ml-0">
                <h4 class="text-base font-bold">Renowned Space Flight Simulation game</h4>
                <h5 class="my-2 text-sm">American publisher</h5>
                <div class="mb-3 text-neutral-200 dark:text-neutral-200">
                  <ul class="list-disc pl-3">
                    <li class="text-xs">Localization of item descriptions and tutorials</li>
                    <li class="text-xs">PS5, XBOX X|S and PC</li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>






        {/* <ul className="w-full max-w-2xl w-full mx-auto">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-xl md:last:rounded-b-xl backdrop-blur-xl bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-30 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-8 px-6 lg:px-12 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="mb-1 text-sm font-mono opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-1xl md:text-1xl font-bold">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="text-base opacity-60">
                      {post.data.description}
                    </p>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul> */}
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
