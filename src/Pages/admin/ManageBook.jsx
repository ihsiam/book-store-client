import { Suspense } from "react";
import Loading from "../../components/Loading";
import BookTable from "../../components/admin/BookTable";

export default function ManageBook() {
  return (
    <div className="bg-gray-50 md:shadow rounded px-2 py-3 md:px-10 md:py-5">
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-1 md:mt-5">
        Manage your Books
      </h1>

      <div className="mt-5 md:mt-10">
        <Suspense fallback={<Loading />}>
          <BookTable />
        </Suspense>
      </div>
    </div>
  );
}
