import { Link, useParams } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import ItemBar from "../components/ItemBar/ItemBar";
import InfoBar from "../components/InfoBar/InfoBar";

function GraphPage({ itemName, itemDescription }) {
	const { id } = useParams();

	return (
		<>
			<NavBar />
			<ItemBar itemName={itemName} itemDescription={itemDescription} />
			<InfoBar />
		</>
	);
}

export default GraphPage;
