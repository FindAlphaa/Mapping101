import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../components/NavBar/NavBar";
import ItemBar from "../components/ItemBar/ItemBar";
import InfoBar from "../components/InfoBar/InfoBar";
import Graph from "../components/Graph/Graph";

function GraphPage() {
	const { id } = useParams();

	const [data, setData] = useState();
	const [loading, setLoading] = useState(true); // Initializing the loading state

	const itemsMap = {
		"consumer-goods": {
			itemName: "경기 관련 소비재",
			itemDescription: "consumer goods related to the economy",
		},
		economy: {
			itemName: "금융",
			itemDescription: "Economy",
		},
		"industrial-goods": {
			itemName: "산업재",
			itemDescription: "Industrial goods",
		},
		meterial: {
			itemName: "소재",
			itemDescription: "Material",
		},
		it: { itemName: "IT", itemDescription: "Internet Technology" },
		"communication-service": {
			itemName: "	커뮤니케이션 서비스",
			itemDescription: "Communication Services",
		},
		"essential-goods": {
			itemName: "	필수 소비재",
			itemDescription: "Essential Consumer Goods",
		},
		energy: {
			itemName: "에너지",
			itemDescription: "Energy",
		},
		utility: {
			itemName: "유틸리티",
			itemDescription: "Utility",
		},
		// ... 기타 아이템들
	};
	const { itemName, itemDescription } = itemsMap[id] || {};

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
			<ItemBar itemName={itemName} itemDescription={itemDescription} />
			<InfoBar />

			{loading ? <div>로딩중..</div> : <Graph data={data} />}
		</>
	);
}

export default GraphPage;
