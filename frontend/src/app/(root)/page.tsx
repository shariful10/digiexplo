import Container from "@/components/Container";
import Banner from "@/components/HomePage/Banner";
import BrowseByCategory from "@/components/HomePage/BrowseByCategory";
import FeaturedAuthor from "@/components/HomePage/FeaturedAuthor";
import FeaturedItems from "@/components/HomePage/FeaturedItems";

const Home = () => {
	return (
		<Container>
			<Banner />
         <BrowseByCategory />
         <FeaturedItems />
		</Container>
	);
};

export default Home