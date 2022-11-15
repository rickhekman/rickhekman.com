
 import Image from "next/image";
 
 function VisualDiary({ feed }) {
  console.log('FEED DATA is ARRAY?', Array.isArray(feed.data));
  const posts = feed.data;
  console.log("Posts", posts);
  // const src = posts.media_url;
  
  // console.log('POSTS', typeof(posts));
  return (
    
    <>
      <h2>Visual diary</h2>
      {/* <ul>
        {posts && posts.map((post) => (
          <li key={post.id}>{post}</li>
        ))}
      </ul> */}
      
      
    
      <div className="ig-gallery">
        {
          posts && 
          posts.filter(post => post.media_type === "IMAGE").map((post) => (            
            <div key={post.id}>
              <Image  
              unoptimized  
              src={post.media_url} 
              alt={post.caption}                           
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
