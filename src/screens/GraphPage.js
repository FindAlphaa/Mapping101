import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import ItemBar from "../components/ItemBar/ItemBar";
import InfoBar from "../components/InfoBar/InfoBar";
import Graph from "../components/Graph/Graph";
import KeywordSection from "../components/KeyWordName/KeyWordName";
import ValueChain from "../components/ValueChain/ValueChain";

import styles from "../components/Graph/Graph.module.css";
import { select } from "d3";

function GraphPage() {
	const { id } = useParams(); // URL에서 id를 받아옴

	const [selectedNodeId, setSelectedNodeId] = useState(null); // 선택한 노드의 ID를 저장
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true); // Initializing the loading state

	const keyWordSectionRef = useRef(null);

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

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(`/data/${id}.json`);
			setData(response.data);
			setLoading(false); // 데이터 로딩 완료
		};

		fetchData();
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [id]); // id가 변경될 때마다 fetchData 함수 호출 (data json 파일 받기)

	// Graph 컴포넌트에서 노드를 클릭했을 때 실행될 함수
	const handleNodeClick = (nodeId) => {
		setSelectedNodeId(nodeId); // 선택한 노드의 ID 설정
		if (keyWordSectionRef.current) {
			keyWordSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			{/* 페이지 상단에 아이템 바와 정보 바 표시 */}
			<ItemBar itemName={itemName} itemDescription={itemDescription} />
			{/* 데이터 로딩 중일 때 로딩 메시지 표시, 그렇지 않으면 Graph 컴포넌트 렌더링 */}
			{loading ? (
				<div className={styles.graph}>로딩중..</div>
			) : (
				<Graph
					data={data}
					onNodeClick={
						handleNodeClick
					} /* Graph 컴포넌트에서 발생한 노드 클릭 이벤트에 대한 콜백 함수 전달 */
				/>
			)}
			<InfoBar selectedNodeId={selectedNodeId} />
			{/* 키워드 이름을 표시하는 컴포넌트 */}
			<KeywordSection ref={keyWordSectionRef} />
			{/* 선택한 노드의 ID를 ValueChain 컴포넌트에 전달하여 해당 노드와 관련된 키워드 정보를 표시*/}
			{/* id: leaf node-> json 파일 불러오는데 사용, selectedNodeId: 선택된 노드에 대한 정보를 화면에 표시 */}
			<ValueChain selectedNodeId={selectedNodeId} id={id} />
		</>
	);
}

export default GraphPage;
