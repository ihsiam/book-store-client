import { useLoaderData } from "react-router-dom";

export default function BookDetails() {
  // load data from loader
  const {
    _id,
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();

  return (
    <div key={_id} className="mt-5 md:mt-10 px-4 md:px-24">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
        <div className="w-full md:w-[350px]">
          <img src={imageURL} className="w-full h-[400px] rounded" />
        </div>
        <div className="flex flex-col gap-2 md:gap-5 w-full md:w-2/3">
          <h1 className="text-2xl md:text-5xl font-bold">{bookTitle}</h1>
          <h1 className="text-lg md:text-2xl">
            <span className="font-semibold">By: </span>
            <span className="font-thin">{authorName}</span>
          </h1>
          <h1 className="text-lg md:text-2xl">
            <span className="font-semibold">Category: </span>
            <span className="font-thin">{category}</span>
          </h1>
          <button className="w-fit px-5 md:px-8 py-2 text-white bg-green-500 rounded font-bold">
            <a href={bookPDFURL} target="blank">
              Get pdf
            </a>
          </button>
          <h1 className="text-lg md:text-3xl">Description:</h1>
          <h1 className="font-thin">{bookDescription}</h1>
        </div>
      </div>
    </div>
  );
}
