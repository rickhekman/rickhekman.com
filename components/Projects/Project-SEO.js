import { NextSeo } from "next-seo";

export default function ProjectMetadata(props) {
  const { url, title, description, imageUrl, alt } = props;

  <>
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: {url},
        title: {title},
        description: {description},
        images: [
          {
            url: {imageUrl},
            width: 800,
            height: 600,
            alt: {alt},
            type: 'image/webp',
          }
        ]
      }}
    />
  </>
};
