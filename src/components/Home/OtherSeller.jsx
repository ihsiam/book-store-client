import { Suspense } from "react";
import Loading from "../Loading";
import SellerSlider from "./SellerSlider";

export default function OtherSeller() {
  return (
    <div className="mt-5 md:mt-10 px-4 md:px-24">
      <h1 className="text-center text-3xl font-bold">Other Books</h1>
      <Suspense fallback={<Loading />}>
        <SellerSlider start={6} end={11} />
      </Suspense>
    </div>
  );
}
