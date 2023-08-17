import IntroSection from "../components/IntroSection/IntroSection";

import Category from "../components/Category/Category";
import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/Section3";

function MainPage() {
	return (
		<>
			<IntroSection />
			<Category />
			<Section1 />
			<Section2 />
			<Section3 />
		</>
	);
}

export default MainPage;
