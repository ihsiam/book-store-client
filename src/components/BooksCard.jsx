import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utility/utility";

export default function BooksCard() {
  // get books data
  const { data } = useSWR(
    "https://book-store-server-delta.vercel.app/allBooks",
    fetcher,
    {
      suspense: true,
    }
  );

  return (
    <div className="mt-5 md:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {data.map((book) => (
        <div
          key={book._id}
          className=" bg-slate-100 p-3 md:p-5 flex items-center flex-col gap-2 md:gap-5"
        >
          <div>
            <img src={book.imageURL} className="w-[200px] md:w-[250px]" />
          </div>
          <div className="w-full text-center">
            <h1 className="font-bold">{book.bookTitle}</h1>
            <Link to={`/book/${book._id}`}>
              <button className="mt-2 md:mt-5 px-4 py-2 bg-green-500 rounded text-white font-bold">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
