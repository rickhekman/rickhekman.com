import { NextSeo } from "next-seo";

export default function Metadata() {
  <>
    <NextSeo
      title="Rick Hekman, Creative Developer"
      description="A creative developer and photographic designer portfolio website"
      openGraph={{
        type: 'website',
        url: 'https://rickhekman.vercel.app/',
        title: "Rick Hekman, Creative Developer",
        description: "A creative developer and photographic designer portfolio website",
      }}
    />
  </>
}
