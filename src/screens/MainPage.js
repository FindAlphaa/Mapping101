import IntroSection from "../components/IntroSection/IntroSection";
import NavBar from "../components/NavBar/NavBar";
import Category from "../components/Category/Category";
import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/Section3";
import Footer from "../components/Footer/Footer";

function MainPage() {
	return (
		<>
			<NavBar />
			<IntroSection />
			<Category />
			<Section1 />
			<Section2 />
			<Section3 />
			<Footer />
		</>
	);
}

export default MainPage;
