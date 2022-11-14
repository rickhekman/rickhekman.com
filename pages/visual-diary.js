
 function VisualDiary({ feed }) {
  console.log('FEED', feed);
  return (
    <>
      <h2>Visual diary</h2>

    </>
  )
}


// export asyndefault getStaticProps = async () => {
//   
//   const data = await fetch(url);
//   const feed = await data.json();
//   console.log('IG FEED',feed);
// }
export async function getStaticProps(){
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();
  // console.log('IG FEED',feed);
  
  // console.log("test in console");

  return {
    props: {
      feed,
    }
  }
}

export default VisualDiary;