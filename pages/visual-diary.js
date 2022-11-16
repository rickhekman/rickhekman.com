import Image from "next/image";

import styles from "../styles/Visual-diary.module.scss"

function VisualDiary({ feed }) {
  console.log('FEED DATA is ARRAY?', Array.isArray(feed.data));
  const posts = feed.data;
  console.log("Posts", posts);
  // const src = posts.media_url;
  
  // console.log('POSTS', typeof(posts));
  return (
    
    <>
    
      <div className={styles.gallery}>
        {
          posts && 
          posts.filter(post => post.media_type === "IMAGE").map((post) => (            
            <div key={post.id} className={styles.container}>
              <Image
                unoptimized
                src={post.media_url}
                alt={post.caption}
                className={styles.image}
                layout="fill"                                
              />       
            </div>           
          ))
        }
      </div>
    </>
  )
}

export async function getStaticProps(){
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed,
    },
  }
}

export default VisualDiary;
