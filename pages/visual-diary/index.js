import Image from "next/legacy/image";
import { useRouter } from 'next/router';

import en from './translations/en';
import es from './translations/es';
import nl from './translations/nl';

import styles from "./Visual-diary.module.scss"

export async function getStaticProps() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed
    }
  }
}

export function GalleryItem(props) {
  const { caption, media_type, media_url} = props.feed;
  let media;

  switch (media_type) {
    case "VIDEO":
      media = (
        <div className={styles.video}>
          <video
              width={300}
              height="auto"
              src={media_url}
              type="video/mp4"
              controls
              playsInline
              controlsList="nodownload">
          </video>
        </div>
      )
      break;

    case "CAROUSEL_ALBUM":
      media = (
        <div className={styles.container}>
          <Image
            unoptimized
            src={media_url}
            alt={caption}
            className={styles.image}
            layout="fill"
          />
        </div>
      )
      break;

    default:
      media = (
        <div className={styles.container}>
          <Image
            unoptimized
            src={media_url}
            alt={caption}
            className={styles.image}
            layout="fill"
          />
        </div>
      )
    }
  return (
    media
  )
}

export default function VisualDiary({ feed }) {
  const posts = feed.data;

  const router = useRouter();
  const { locale } = router;
  let t = locale;
  if (t === 'en') {
    t = en;
  } else if (t === 'es') {
    t = es;
  } else {
    t = nl;
  };

  return (
    <>
      <ul className={styles.gallery}>
        {posts.map((post) => (
          <li key={post.id} className={styles.item}>
            <GalleryItem feed={post}/>
          </li>
          ))
        }
      </ul>
      <div className={styles.gallery__credits}>
        <p>
          {t.visit} <a href="https://www.instagram.com/rickhekman/" rel="noopener noreferrer" target="_blank">{t.insta}</a> {t.more}
        </p>
      </div>
    </>
  )
}
