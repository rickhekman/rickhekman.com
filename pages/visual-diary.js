import Image from "next/legacy/image";

import styles from "../styles/Visual-diary.module.scss"

export async function getStaticProps() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed,
    },
  }
}

export function Timeline(props) {
  const { caption, media_type, media_url} = props.feed;
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
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
      post = (
        <div className={styles.container}>
          <Image
            unoptimized
            src={media_url}
            alt={caption}
            className={styles.image}
            layout="fill"
          />
        </div>

      );
      break;

    default:
      post = (
        <div className={styles.container}>
          <Image
            unoptimized
            src={media_url}
            alt={caption}
            className={styles.image}
            layout="fill"
          />
        </div>
      );
    }
  return (
    <>
      {post}
    </>
  )
}

export default function VisualDiary({ feed }) {

  const posts = feed.data;

  return (
    <>
      <div className={styles.gallery}>
        {
          posts.map((post) => (
           <Timeline key={post.id} feed={post} />
          ))
        }
      </div>
      <div className={styles.gallery__credits}>
        <p>
          Visit my <a href="https://www.instagram.com/rickhekman/" rel="noopener noreferrer" target="_blank">Instagram profile</a> for more
        </p>
      </div>

    </>
  )
}
