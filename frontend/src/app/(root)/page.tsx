import Container from "@/components/Container";
import Banner from "@/components/HomePage/Banner";
import BrowseByCategory from "@/components/HomePage/BrowseByCategory";
import FeaturedAuthor from "@/components/HomePage/FeaturedAuthor";

const Home = () => {
	return (
		<Container>
			<Banner />
         <BrowseByCategory />
         <FeaturedAuthor />
		</Container>
	);
};

export default Home