import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utility/utility";

export default function BookTable() {
  const { data } = useSWR(
    "https://book-store-server-delta.vercel.app/allBooks",
    fetcher,
    {
      suspense: true,
    }
  );

  const handleDelete = (id) => {
    fetch(`https://book-store-server-delta.vercel.app/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Uploaded succesfully");
        window.location.reload();
      });
  };

  return (
    <div className="rounded-lg shadow md:shadow-md">
      <div className="flex uppercase justify-between bg-gray-200 px-2 md:px-5 py-3 md:py-4 w-full">
        <h1 className="w-4/6 md:w-5/12">Title</h1>
        <h1 className="md:w-3/12 hidden md:flex">Author</h1>
        <h1 className="md:w-2/12 hidden md:flex">Category</h1>
        <h1 className="w-1/6 md:w-1/12">Edit</h1>
        <h1 className="w-1/6 md:w-1/12">Delete</h1>
      </div>
      <div className="flex flex-col">
        {data.map((book) => (
          <div
            key={book._id}
            className="flex justify-between items-start bg-gray-100 border-b-2 px-2 md:px-5 py-3 md:py-4"
          >
            <h1 className=" w-4/6 md:w-5/12">{book.bookTitle}</h1>
            <h1 className="md:w-3/12 hidden md:flex">{book.authorName}</h1>
            <h1 className="md:w-2/12 hidden md:flex">{book.category}</h1>
            <h1 className="w-1/6 md:w-1/12 cursor-pointer hover:font-bold">
              <Link to={`/admin/dashboard/editBook/${book._id}`}>Edit</Link>
            </h1>
            <h1
              onClick={() => handleDelete(book._id)}
              className="w-1/6 md:w-1/12 cursor-pointer hover:font-bold"
            >
              Delete
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
