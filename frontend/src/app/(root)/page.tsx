import Container from "@/components/Container";
import Banner from "@/components/HomePage/Banner";
import BrowseByCategory from "@/components/HomePage/BrowseByCategory";

const Home = () => {
	return (
		<Container>
			<Banner />
         <BrowseByCategory />
		</Container>
	);
};

export default Home