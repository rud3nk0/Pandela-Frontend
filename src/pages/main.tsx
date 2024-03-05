import React, { useEffect, useState } from "react";
import { videos } from "../fake-db/main";
import CardVideo from "../components/CardVideo";
import styles from "../styles/pages/Main.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { setCount } from "../store/availableCountSlice";


interface RootState {
  availableCount: {
    value: number;
  };
}

const Main = () => {
  // const [availableCount, setAvailableCount] = useState(0);
  // const dispatch = useDispatch();
  // const availableCountFromRedux = useSelector(
  //   (state: RootState) => state.availableCount.value
  // );

  // const handleAvailableCount = () => {
  //   const screenWidth = (window.innerWidth / 100) * 80;
  //   const newCount = screenWidth / 300;
  //   setAvailableCount(newCount);
  //   dispatch(setCount(newCount));
  // };

  // useEffect(() => {
  //   window.addEventListener("load", handleAvailableCount);
  //   window.addEventListener("resize", handleAvailableCount);

  //   return () => {
  //     window.removeEventListener("resize", handleAvailableCount);
  //     window.removeEventListener("load", handleAvailableCount);
  //   };
  // }, []);

  const renderVideos = (start: number, end: number) => {
    return videos.slice(start, end).map((video: any) => {
      if (!video.isAd) {
        return <CardVideo key={video.id} {...video} />;
      } else {
        return null;
      }
    });
  };

  // const initialVideoCount = availableCount > 2 ? availableCount - 1 : 3;

  // API for get all videos what we have
  fetch("https://pandela-youtube.onrender.com/api/blogs/")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Data:", data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  return (
    <div>
      <div className={styles.videos}>

      </div>
      <h3 className={styles.title}>Недосмотренные видео</h3>
      {/* Last Resently */}
      <div className={styles.videos}>
        {/* {renderVideos(initialVideoCount - 1, initialVideoCount * 2 + 1)} */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.videos}>
        {/* {renderVideos(0, initialVideoCount + 2)} */}
      </div>
      <div className={styles["ad-banner"]}>ЗДЕСЬ БУДЕТ РЕКЛАМА</div>
      <div className={styles.videos}>
        {/* {renderVideos(0, videos.length)} */}
      </div>
    </div>
  );
};

export default Main;
