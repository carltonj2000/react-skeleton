import { useState, useEffect } from "react";

function Articles() {
  const [articles, articlesSet] = useState(null);

  useEffect(() => {
    const to = setTimeout(async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await resp.json();
      articlesSet(json);
    }, 2000);
    return () => {
      clearTimeout(to);
    };
  }, []);
  return (
    <div className="articles">
      <h2>Articles</h2>
      {articles
        ? articles.map((article) => (
            <div className="article" key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          ))
        : Array(3)
            .fill("")
            .map((_, idx) => (
              <div className="article skeleton" key={idx}>
                <h3> </h3>
                <p> </p>
              </div>
            ))}
    </div>
  );
}

export default Articles;
