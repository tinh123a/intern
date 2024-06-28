import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPost] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [file, setFile] = useState(180);

  console.log("lần gọi thứ ", type);

  // useEffect(() => {
  //   console.log('object')
  //   setInterval(() => {
  //     setCountDown(countDown - 1);
  //     console.log("countdown ", countDown);
  //   }, 1000);
  // },[]);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
        console.log("fetch ");
      });
  }, [type]);

  useEffect(() => {
    const handlScroll = () => {
      setShowGoToTop(window.scrollY >= 1000);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handlScroll);

    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handlePreviewAvatar= (e) =>{
    const file = e.target.files[0]
    console.log(URL.createObjectURL(file));
  }

  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar}/>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setType(tab);
          }}
        >
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}:{post.title}
          </li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            width: 100,
            height: 50,
          }}
          onClick={scrollTop}
        ></button>
      )}
      <h2>{width}</h2>
    </div>
  );
}

export default Content;
