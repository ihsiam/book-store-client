import { useState } from "react";
import { BookCtg } from "../../utility/utility";

export default function UploadBook() {
  // set ctg
  const [ctg, setCtg] = useState(BookCtg[0]);

  // handle change
  const handleCtg = (e) => {
    setCtg(e.target.value);
  };

  // handle form
  const handleForm = (e) => {
    e.preventDefault();
    const formInfo = e.target;

    const bookTitle = formInfo.bookTitle.value;
    const authorName = formInfo.authorName.value;
    const imageURL = formInfo.imageURL.value;
    const category = formInfo.category.value;
    const bookDescription = formInfo.bookDescription.value;
    const bookPDFURL = formInfo.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    // get token
    const token = localStorage.getItem("Token");

    // req sent
    fetch("https://book-store-server-delta.vercel.app/uploadBook", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Uploaded succesfully");
        formInfo.reset();
      });
  };

  return (
    <div className="bg-gray-50 md:shadow rounded px-2 py-3 md:px-10 md:py-5">
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-1 md:mt-5">
        Upload Book
      </h1>

      <form
        onSubmit={handleForm}
        className="mt-3 md:mt-8 flex flex-col items-center gap-5 w-full px-5 py-2"
      >
        <div className="flex flex-col gap-5 md:flex-row w-full justify-between">
          <input
            className="w-full md:w-1/4 h-10 focus:outline-0 rounded p-2 text-lg border-2 border-black"
            type="text"
            name="bookTitle"
            placeholder="Title"
          />

          <input
            className="w-full md:w-1/4 h-10 focus:outline-0 rounded p-2 text-lg border-2 border-black"
            type="text"
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
          name="imageURL"
          placeholder="Image URL"
        />

        <input
          className="w-full h-10 focus:outline-0 rounded p-2 text-lg border-2 border-black"
          type="text"
          name="bookPDFURL"
          placeholder="PDF URL"
        />

        <textarea
          className="w-full h-64 resize-none focus:outline-0 rounded p-2 text-lg border-2 border-black"
          name="bookDescription"
          id=""
          placeholder="Description"
        ></textarea>

        <button
          className="bg-gray-100 hover:bg-gray-200 w-fit border-2 border-black px-4 py-2 rounded-xl"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
