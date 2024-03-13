import { useEffect, useState } from "react";

const useNews = () => {
  const [newsData, setNewsdata] = useState(null);
  const [contentData, setContentData] = useState("general");
  const [loading, setLoading] = useState({
    state: false,
    message: `Today's ${contentData} news is loading...`,
  });

  const fetchNews = async (content) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: `Today's ${contentData} news is loading...`,
      });
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${content}&apiKey=492b2615aabd48fd8dd358459635168c`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setNewsdata(data.articles);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("ok");
      setLoading({
        ...loading,
        state: false,
        message: `Today's ${contentData} news is loading...`,
      });
    }
  };
  useEffect(() => {
    fetchNews(contentData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentData]);

  return {
    newsData,
    setContentData,
    loading
  };
};

export default useNews;
