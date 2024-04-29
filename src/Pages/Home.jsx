import AwradBanner from "../components/Home/AwradBanner";
import Banner from "../components/Home/Banner";
import BestSeller from "../components/Home/BestSeller";
import FavouriteBook from "../components/Home/FavouriteBook";
import OtherSeller from "../components/Home/OtherSeller";
import Review from "../components/Home/Review";

export default function Home() {
  return (
    <div>
      <Banner />
      <BestSeller />
      <FavouriteBook />
      <AwradBanner />
      <OtherSeller />
      <Review />
    </div>
  );
}
