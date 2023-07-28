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
        <div class="custom__blogTitle">
          <h1>{globalData.blogTitle}</h1>
        </div>
        <div class="flex flex-col">
          <p>Hi, I&apos;m Gonzalo. I&apos;m a professional English into Spanish translator specializing in Game Localization. I have years of experience in projects for various platforms, and I&apos;ve been a gamer since I was able to pick up a controller. My professional journey has led me to appreciate video games as the most complex art form of our time, and as such, they require one of the most comprehensive translation processes.</p>
          <ul>
            <li>
              <b>Translation Services</b>
              <p>Translation, Localization, Transcreation, Editing, Proofreading and LQA. I can offer my expertise to effectively help your games reach the Spanish-speaking community and expand into new markets.</p>
            </li>
            <li>
              <b>PC, Consoles & Mobile</b>
              <p>I&apos;ve translated over 1 million words across all available platforms, which has allowed me to master their best practices and learn their specific terminology.</p>
            </li>
            <li>
              <b>Gamer Vision</b>
              <p>Gamers don&apos;t tolerate mediocrity and know how to appreciate quality. A well-designed game must understand its audience and meet cultural and linguistic expectations. I can provide the much-needed gamer input for a successful localization.</p>
            </li>
            <li>
              <b>Glossary Creation</b>
              <p>I can create a glossary or termbase from scratch to make the localization of your game increasingly streamlined and error-free.</p>
            </li>
            <li>
              <b>CATs</b>
              <p>MemoQ, Memsource (Phrase), SmartCat</p>
            </li>
          </ul>
          <h2>+1,000,000 WORDS TRANSLATED</h2>
          <ul>
            <li>
              <b>&apos;AA&apos; ARPG (German studio, French publisher)</b>
              <ul>
                <li>Localization and editing of dialogues and quest descriptions.</li>
                <li>Collaboration listed in the credits.</li>
                <li>PS5, XBOX X|S and PC (to be released in August 2023).</li>
              </ul>
            </li>
            <li>
              <b>Massive Battle Royale game (South Korean publisher)</b>
              <ul>
                <li>Localization of dialogues, item descriptions, and legal disclaimers</li>
                <li>Android and iOS</li>
              </ul>
            </li>
            <li>
              <b>Highly popular MOBA (world-leading Chinese publisher)</b>
              <ul>
                <li>Localization of dialogues, character bios, and item descriptions</li>
                <li>Android and iOS</li>
              </ul>
            </li>
            <li>
              <b>Renowned Space Flight Simulation game (American publisher)</b>
              <ul>
                <li>Localization of item descriptions and tutorials</li>
                <li>PS5, XBOX X|S and PC</li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="w-full max-w-2xl w-full mx-auto">
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
        </ul>
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
