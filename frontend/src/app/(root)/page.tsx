import Container from "@/components/Container";
import Banner from "@/components/HomePage/Banner";
import LatestItems from "@/components/HomePage/LatestItems";
import FeaturedItems from "@/components/HomePage/FeaturedItems";
import SubscribeBanner from "@/components/HomePage/SubscribeBanner";
import BrowseByCategory from "@/components/HomePage/BrowseByCategory";

const Home = () => {
	return (
		<Container>
			<Banner />
         <BrowseByCategory />
         <FeaturedItems />
         <SubscribeBanner />
         <LatestItems />
		</Container>
	);
};

export default Home