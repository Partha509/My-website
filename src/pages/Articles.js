import { useState } from "react";

function Articles() {
  const articles = [
    {title: "The Art of Storytelling", status: "Published", lastEdited: "2 days ago"},
    {title: "Crafting Characters", status: "Draft", lastEdited: "1 week ago"},
    {title: "Mastering Dialogue", status: "Published", lastEdited: "2 weeks ago"},
    {title: "Worldbuilding Guide", status: "Published", lastEdited: "3 weeks ago"},
    {title: "Editing Made Easy", status: "Draft", lastEdited: "1 month ago"},
    {title: "Writing with Emotion", status: "Published", lastEdited: "2 months ago"},
    {title: "From Idea to Outline", status: "Draft", lastEdited: "3 months ago"},
    {title: "Finding Your Voice", status: "Published", lastEdited: "4 months ago"},
    {title: "The Importance of Conflict", status: "Published", lastEdited: "5 months ago"}
  ];

  const perPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const pageArticles = articles.slice((currentPage-1)*perPage, currentPage*perPage);
  const totalPages = Math.ceil(articles.length / perPage);

  return (
    <div className="content">
      <h2>My Articles</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {pageArticles.map((a, i) => (
            <tr key={i}>
              <td>{a.title}</td>
              <td>
                <span className={`badge ${a.status.toLowerCase()}`}>
                  {a.status}
                </span>
              </td>
              <td>{a.lastEdited}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i+1)}
            className={currentPage === i+1 ? "active" : ""}
          >
            {i+1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Articles;
