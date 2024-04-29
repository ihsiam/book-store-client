import { Suspense } from "react";
import BooksCard from "../components/BooksCard";
import Loading from "../components/Loading";

export default function Books() {
  return (
    <div className="mt-5 md:mt-10 px-4 md:px-24">
      <h1 className="text-center text-3xl font-bold">All Books</h1>
      <Suspense fallback={<Loading />}>
        <BooksCard />
      </Suspense>
    </div>
  );
}
