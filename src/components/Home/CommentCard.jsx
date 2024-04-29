import { FaStar } from "react-icons/fa";
import avatar from "../../assets/img/profile.jpg";

export default function CommentCard() {
  return (
    <div className="px-5 py-4 rounded-lg bg-slate-100 flex flex-col gap-3 items-start">
      <div className="flex text-red-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div>
        <h1 className="text-start text-base font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          veniam expedita distinctio facilis numquam debitis, modi, consequuntur
          quo ad nesciunt consectetur animi accusamus veritatis nulla dolor!
          Doloribus velit ducimus quis.
        </h1>
      </div>
      <div className="flex flex-col items-start gap-1">
        <div className="w-20 h-20">
          <img src={avatar} className="w-full h-full rounded-full" />
        </div>
        <h1 className="text-normal font-bold">Mark Ping</h1>
        <h1 className="text-base font-thin">CEO, ABC company</h1>
      </div>
    </div>
  );
}
