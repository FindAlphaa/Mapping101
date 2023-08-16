import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../components/NavBar/NavBar";
import ItemBar from "../components/ItemBar/ItemBar";
import InfoBar from "../components/InfoBar/InfoBar";
import Graph from "../components/Graph/Graph";

function GraphPage({ itemName, itemDescription }) {
	const { id } = useParams();

	const [data, setData] = useState();
	const [loading, setLoading] = useState(true); // Initializing the loading state
	const fetchData = async () => {
		const response = await axios.get(`/data/${id}.json`);
		setData(response.data);
		setLoading(false); // 데이터 로딩 완료
	};
	useEffect(() => {
		fetchData();
	}, [data]);

	return (
		<>
			<NavBar />
			<ItemBar itemName={itemName} itemDescription={itemDescription} />
			<InfoBar />

			{loading ? <div>로딩중..</div> : <Graph data={data} />}
		</>
	);
}

export default GraphPage;
