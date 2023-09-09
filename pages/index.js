import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Image from 'next/image'
import serviceBookmark from '../pages/svg-service-bookmark.svg'
import serviceJoystick from '../pages/svg-service-joystick.svg'
import serviceRobot from '../pages/svg-service-automator.svg'
import serviceScroll from '../pages/svg-service-scroll.svg'
import serviceKeyboard from '../pages/svg-service-keyboard.svg'

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
            <div class="avatar"></div>
            <h2 class="text-5xl my-2 font-bold tracking-tight">Hi, I&apos;m Gonzalo.</h2>
            <p class="text-2xl">I&apos;m a professional English into Spanish translator specializing in Game Localization.</p>
          </div>
        </div>



          <div class="slideshow-columns">
            <div class="columns-A">
              <span>gameThumbnail</span>
            </div>
            <div class="columns-B">
              <span>gameThumbnail</span>
              <span>gameThumbnail</span>
            </div>
            <div class="columns-C">
              <span>gameThumbnail</span>
              <span>gameThumbnail</span>
            </div>
            <div class="columns-D">
              <span>gameThumbnail</span>
            </div>
          </div>



        <div class="flex flex-col gap-4 max-w-4xl w-full mx-auto p-8 mb-8">
          <blockquote class="text-l border-l-2 ml-1 pb-2 pl-5 pr-0 text-gray-900 dark:text-white">
            <p>I have years of experience working on projects across multiple platforms, and I&apos;ve been a gamer since I was able to pick up a controller. My professional journey has led me to appreciate that video games are the most complex art form of our time, and as such require one of the most comprehensive translation processes.</p>
          </blockquote>
        </div>

        <div class="md:max-w-7xl w-full mx-auto flex flex-wrap justify-center gap-4 p-8">
          <div class="flex flex-col max-w-sm w-full p-6 rounded-lg backdrop-blur-xl bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30">
          <div class="w-12 h-12">
              <Image
                src={serviceBookmark}
                width={48}
                height={48}
                alt="Picture of the author"
                class="flex mr-auto"
              />
            </div>
            <h5 class="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Translation Services
            </h5>
            <p class="mt-2 text-sm">
              Translation, Localization, Transcreation, Editing, Proofreading and LQA. I can offer my expertise to effectively help your games reach the Spanish-speaking community and expand into new markets.
            </p>
          </div>
          <div class="flex flex-col max-w-sm w-full p-6 rounded-lg backdrop-blur-xl bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30">
            <div class="w-12 h-12">
              <Image
                src={serviceJoystick}
                width={48}
                height={48}
                alt="Picture of the author"
                class="flex mr-auto"
              />
            </div>
            <h5 class="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              PC, Consoles & Mobile
            </h5>
            <p class="mt-2 text-sm">
              I&apos;ve translated over 1 million words across all available platforms, which has allowed me to master their specific terminology.
            </p>
          </div>
          <div class="flex flex-col max-w-sm w-full p-6 rounded-lg backdrop-blur-xl bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30">
            <div class="w-12 h-12">
              <Image
                src={serviceRobot}
                width={48}
                height={48}
                alt="Picture of the author"
                class="flex mr-auto"
              />
            </div>
            <h5 class="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Gamer Vision
            </h5>
            <p class="mt-2 text-sm">
              Gamers don&apos;t tolerate mediocrity and know how to appreciate quality. A well-designed game must understand its audience and meet cultural and linguistic expectations. I can provide the much-needed gamer input for a successful localization.
            </p>
          </div>
          <div class="flex flex-col max-w-sm w-full p-6 rounded-lg backdrop-blur-xl bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30">
            <div class="w-12 h-12">
              <Image
                src={serviceScroll}
                width={48}
                height={48}
                alt="Picture of the author"
                class="flex mr-auto"
              />
            </div>
            <h5 class="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Glossary Creation
            </h5>
            <p class="mt-2 text-sm">
              I can create a glossary or termbase from scratch to make the localization of your game increasingly streamlined and error-free.
            </p>
          </div>
          <div class="flex flex-col max-w-sm w-full p-6 rounded-lg backdrop-blur-xl bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30">
            <div class="w-12 h-12">
              <Image
                src={serviceKeyboard}
                width={48}
                height={48}
                alt="Picture of the author"
                class="flex mr-auto"
              />
            </div>
            <h5 class="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              CATs
            </h5>
            <p class="mt-2 text-sm">
              MemoQ, Memsource (Phrase), SmartCat, and many more.
            </p>
          </div>
        </div>


        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col md:flex-row flex-wrap gap-8 justify-center">
            <div class="text-center">
              <h6 class="text-3xl font-bold text-deep-purple-accent-400">4 years</h6>
              <p class="">In the localisation industry</p>
            </div>
            <div class="text-center">
              <h6 class="text-3xl font-bold text-deep-purple-accent-400">+1,000,000</h6>
              <p class="">Words translated</p>
            </div>
          </div>
        </div>






        <div class="flex flex-col w-full mx-auto my-8 px-8 py-12 backdrop-blur-xl bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30">
          <div class="md:max-w-7xl md:mx-auto w-full mb-4">
            <h4 className="text-1xl md:text-1xl font-bold p-4">
              Recent projects
            </h4>
          </div>
          <ol
            class="md:max-w-7xl md:mx-auto md:flex gap-4 flex-wrap md:justify-center px-4 timeline__projects">
            {/* <!--First item--> */}
            <li>
              <div class="flex-start flex items-center gap-2 timeline__item-avatar">
                <div class="avatar__disc"></div>
                <div>
                  <h4 class="text-base font-bold">Atlas Fallen</h4>
                  <h5 class="text-sm"><a href="https://www.focus-entmt.com/en">Focus Entretainment</a>, <a href="https://www.deck13.com/">Deck13</a></h5>
                </div>
              </div>
              <div class="mt-2">
                <code class="text-xs text-neutral-200">01.07.2021</code>
                <div class="mt-2 text-neutral-200 dark:text-neutral-200">
                  <ul class="list-disc pl-3">
                    <li class="text-sm">Localization and editing of dialogues and quest descriptions.</li>
                    <li class="text-sm">Collaboration listed in the credits.</li>
                    <li class="text-sm">PS5, XBOX X|S and PC.</li>
                  </ul>
                  </div>
              </div>
            </li>

            {/* <!--Second item--> */}
            <li>
              <div class="flex-start flex items-center gap-2 timeline__item-avatar">
                <div class="avatar__disc"></div>
                <div>
                  <h4 class="text-base font-bold">Massive Battle Royale game</h4>
                  <h5 class="text-sm">South Korean publisher</h5>
                </div>
              </div>
              <div class="mt-2">
                <code class="text-xs text-neutral-200">13.09.2021</code>
                <div class="mt-2 text-neutral-200 dark:text-neutral-200">
                  <ul class="list-disc pl-3">
                    <li class="text-sm">Localization of dialogues, item descriptions, and legal disclaimers</li>
                    <li class="text-sm">Android and iOS</li>
                  </ul>
                  </div>
              </div>
            </li>
            
            {/* <!--Third item--> */}
            <li>
              <div class="flex-start flex items-center gap-2 timeline__item-avatar">
                <div class="avatar__disc"></div>
                <div>
                  <h4 class="text-base font-bold">Highly popular MOBA</h4>
                  <h5 class="text-sm">World-leading Chinese publisher</h5>
                </div>
              </div>
              <div class="mt-2">
                <code class="text-xs text-neutral-200">13.09.2021</code>
                <div class="mt-2 text-neutral-200 dark:text-neutral-200">
                  <ul class="list-disc pl-3">
                    <li class="text-sm">Localization of dialogues, character bios, and item descriptions</li>
                    <li class="text-sm">Android and iOS</li>
                  </ul>
                </div>
              </div>
            </li>

            {/* <!--Last item--> */}
            <li>
              <div class="flex-start flex items-center gap-2 timeline__item-avatar">
                <div class="avatar__disc"></div>
                <div>
                  <h4 class="text-base font-bold">Space Flight Simulation</h4>
                  <h5 class="text-sm">American publisher</h5>
                </div>
              </div>
              <div class="mt-2">
                <code class="text-xs text-neutral-200">25.11.2021</code>
                <div class="mt-2 text-neutral-200 dark:text-neutral-200">
                  <ul class="list-disc pl-3">
                    <li class="text-sm">Localization of item descriptions and tutorials</li>
                    <li class="text-sm">PS5, XBOX X|S and PC</li>
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

        <div class="flex flex-col gap-4 max-w-4xl w-full mx-auto p-8 mb-8">
          <div class="flex flex-col gap-4 w-full mx-auto">
            <p class="text-2xl text-center">Start your next localization project now. <br></br>(PST and CET Time Zones)</p>
            <ul class="contactLinks">
              <li>
                <a
                  class="font-medium hover:underline"
                  href="https://join.skype.com/invite/veHwPHkOQ9Rg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="logo"></span>
                  Skype
                </a>
              </li>
              <li>
                <a
                  class="font-medium hover:underline"
                  href="http://discordapp.com/users/695669465060212789"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="logo"></span>
                  Discord
                </a>
              </li>
              <li>
                <a
                  class="font-medium hover:underline"
                  href="mailto:diazgonzaloluis@gmail.com?Subject=Hello%20Gonzalo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="logo"></span>
                  Email
                </a>
              </li>
              <li>
                <a
                  class="font-medium hover:underline"
                  href="https://www.proz.com/profile/3044101"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="logo"></span>
                  ProZ
                </a>
              </li>
              <li>
                <a
                  class="font-medium hover:underline"
                  href="https://www.linkedin.com/in/gonzalo-luis-d%C3%ADaz-09ab70196/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="logo"></span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  class="font-medium hover:underline"
                  href="cv_gdb.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="logo"></span>
                  Resume/CV
                </a>
              </li>
            </ul>
          </div>
        </div>
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
