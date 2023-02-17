import { NextSeo } from "next-seo";

export default function Metadata() {
  <>
    <NextSeo
      title="Rick Hekman, Creative Developer"
      description="A creative developer portfolio website"
      openGraph={{
        type: 'website',
        url: 'https://www.rickhekman.com/',
        title: "Rick Hekman, Creative Developer",
        description: "A creative developer portfolio website",
        images: [
          {
            url: 'images/seo/rickhekman.webp',
            width: 1200,
            height: 630,
            alt: 'Rick Hekman portfolio website',
            type: 'image/webp',
          }
        ]
      }}
    />
  </>
};
