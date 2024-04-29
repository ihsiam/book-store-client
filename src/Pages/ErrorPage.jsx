import { BiError } from "react-icons/bi";

export default function ErrorPage() {
  return (
    <div className="h-screen w-full flex justify-center items-center gap-2 md:gap-8">
      <BiError className="w-14 h-14 md:w-20 md:h-20 text-red-600" />
      <h1 className="md:text-3xl">Upps! Error occured</h1>
    </div>
  );
}
