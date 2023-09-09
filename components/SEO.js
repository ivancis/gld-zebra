import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="https://gld-zebra.netlify.app/_next/static/media/gld_avatar.5fd5d949.png" />
    </Head>
  );
}
