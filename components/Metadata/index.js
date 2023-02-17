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
            width: 800,
            height: 600,
            alt: 'Rick Hekman website screenshot',
            type: 'image/webp',
          }
        ]
      }}
    />
  </>
};
