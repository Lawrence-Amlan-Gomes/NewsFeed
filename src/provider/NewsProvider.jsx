import { NewsContext } from "../context";
import useNews from "../hooks/useNews";

const NewsProvider = ({ children }) => {
  const { newsData, setContentData, loading } = useNews();
  return (
    <NewsContext.Provider value={{ newsData, setContentData, loading }}>
        {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
