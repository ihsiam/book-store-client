import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BookCtg } from "../utility/utility";

export default function EditBook() {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();
  const [ctg, setCtg] = useState(category);

  const handleCtg = (e) => {
    setCtg(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    fetch(`https://book-store-server-delta.vercel.app/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .thendata(() => {
        alert("Updated succesfully");
        form.reset();
      });
  };

  return (
    <div className="bg-gray-50 md:shadow rounded px-2 py-3 md:px-10 md:py-5">
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-1 md:mt-5">
        Edit Details
      </h1>

      <form
        onSubmit={handleForm}
        className="mt-3 md:mt-8 flex flex-col items-center gap-5 w-full px-5 py-2"
      >
        <div className="flex flex-col gap-5 md:flex-row w-full justify-between">
          <input
            className="w-full md:w-1/4 h-10 focus:outline-0 rounded p-2 text-lg border-2 border-black"
            type="text"
            defaultValue={bookTitle}
            name="bookTitle"
            placeholder="Title"
          />

          <input
            className="w-full md:w-1/4 h-10 focus:outline-0 rounded p-2 text-lg border-2 border-black"
            type="text"
            defaultValue={authorName}
            name="authorName"
            placeholder="Author"
          />

          <select
            className="w-full md:w-1/4 h-10 focus:outline-0 rounded p-1 text-lg border-2 border-black"
            name="category"
            id=""
            value={ctg}
            onChange={handleCtg}
          >
            {BookCtg.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <input
          className="w-full h-10 focus:outline-0 rounded p-2 text-lg border-2 border-black"
          type="text"
          defaultValue={imageURL}
          name="imageURL"
          placeholder="Image URL"
        />

        <input
          className="w-full h-10 focus:outline-0 rounded p-2 text-lg border-2 border-black"
          type="text"
          defaultValue={bookPDFURL}
          name="bookPDFURL"
          placeholder="PDF URL"
        />

        <textarea
          className="w-full h-64 resize-none focus:outline-0 rounded p-2 text-lg border-2 border-black"
          name="bookDescription"
          defaultValue={bookDescription}
          id=""
          placeholder="Description"
        ></textarea>

        <button
          className="bg-gray-100 hover:bg-gray-200 w-fit border-2 border-black px-4 py-2 rounded-xl"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
