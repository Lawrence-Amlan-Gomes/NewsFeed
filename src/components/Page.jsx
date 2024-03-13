import { useContext } from "react";
import { NewsContext } from "../context";

export default function Page() {
  const { newsData, loading } = useContext(NewsContext);
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid">
        <div className="">
          {newsData == null || loading.state == true
            ? loading.message
            : newsData.map((news, idx) => (
                <div
                  key={idx}
                  className="float-left w-[46%] m-[2%] box-border"
                >
                  <div className="">
                    <a href="">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                        {news.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#292219] mb-10">
                      {news.description}
                    </p>
                    {news.urlToImage != null ? (
                      <img
                        className="w-[100%] mb-2"
                        src={news.urlToImage}
                        alt="thumb"
                      />
                    ) : (
                      <></>
                    )}
                    {news.author != null ? `Author: ${news.author}` : ""}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </main>
  );
}
