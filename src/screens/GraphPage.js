import { Link, useParams } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import ItemBar from "../components/ItemBar/ItemBar";
import InfoBar from "../components/InfoBar/InfoBar";
import Graph from "../components/Graph/Graph";

function GraphPage({ itemName, itemDescription }) {
	const { id } = useParams();

	const data = {
		nodes: [
			{
				id: "IT",
				color: 3,
				radius: 50,
			},
			{
				id: "반도체",
				color: 5,
				radius: 30,
			},
			{
				id: "반도체제조",
				color: 7,
				radius: 20,
			},
			{
				id: "반도체소재",
				color: 6,
				radius: 20,
			},
			{
				id: "반도체설계",
				color: 4,
				radius: 20,
			},
			{
				id: "반도체후공정",
				color: 2,
				radius: 20,
			},
			{
				id: "반도체장비",
				color: 1,
				radius: 20,
			},
			{
				id: "디스플레이",
				color: 8,
				radius: 30,
			},
			{
				id: "디스플레이부품",
				color: 9,
				radius: 20,
			},
			{
				id: "디스플레이소재",
				color: 10,
				radius: 20,
			},
			{
				id: "디스플레이장비",
				color: 8,
				radius: 20,
			},
			{
				id: "디스플레이패널",
				color: 7,
				radius: 20,
			},
			{
				id: "소프트웨어",
				color: 10,
				radius: 30,
			},
			{
				id: "응용소프트웨어",
				color: 9,
				radius: 20,
			},
			{
				id: "인공지능",
				color: 10,
				radius: 20,
			},
			{
				id: "시스템소프트웨어",
				color: 9,
				radius: 20,
			},
			{
				id: "IT서비스",
				color: 1,
				radius: 30,
			},
			{
				id: "컨설팅",
				color: -2,
				radius: 20,
			},
			{
				id: "솔루션",
				color: 1,
				radius: 20,
			},
			{
				id: "플랫폼",
				color: 3,
				radius: 20,
			},
			{
				id: "인프라",
				color: 2,
				radius: 20,
			},
			{
				id: "하드웨어",
				color: -5,
				radius: 30,
			},
			{
				id: "통신장비",
				color: -4,
				radius: 20,
			},
			{
				id: "배터리",
				color: -3,
				radius: 20,
			},
			{
				id: "모바일기기",
				color: -2,
				radius: 20,
			},
			{
				id: "카메라",
				color: -4,
				radius: 20,
			},
			{
				id: "전기제품",
				color: -3,
				radius: 20,
			},
			{
				id: "전자제품",
				color: -2,
				radius: 20,
			},
		],
		links: [
			{
				source: "IT",
				target: "반도체",
			},
			{
				source: "IT",
				target: "디스플레이",
			},
			{
				source: "IT",
				target: "소프트웨어",
			},
			{
				source: "IT",
				target: "IT서비스",
			},
			{
				source: "IT",
				target: "하드웨어",
			},
			{
				source: "반도체",
				target: "반도체제조",
			},
			{
				source: "반도체",
				target: "반도체소재",
			},
			{
				source: "반도체",
				target: "반도체설계",
			},
			{
				source: "반도체",
				target: "반도체후공정",
			},
			{
				source: "반도체",
				target: "반도체장비",
			},
			{
				source: "디스플레이",
				target: "디스플레이부품",
			},
			{
				source: "디스플레이",
				target: "디스플레이소재",
			},
			{
				source: "디스플레이",
				target: "디스플레이장비",
			},
			{
				source: "디스플레이",
				target: "디스플레이패널",
			},
			{
				source: "소프트웨어",
				target: "응용소프트웨어",
			},
			{
				source: "소프트웨어",
				target: "인공지능",
			},
			{
				source: "소프트웨어",
				target: "시스템소프트웨어",
			},
			{
				source: "IT서비스",
				target: "컨설팅",
			},
			{
				source: "IT서비스",
				target: "솔루션",
			},
			{
				source: "IT서비스",
				target: "플랫폼",
			},
			{
				source: "IT서비스",
				target: "인프라",
			},
			{
				source: "하드웨어",
				target: "통신장비",
			},
			{
				source: "하드웨어",
				target: "배터리",
			},
			{
				source: "하드웨어",
				target: "모바일기기",
			},
			{
				source: "하드웨어",
				target: "카메라",
			},
			{
				source: "하드웨어",
				target: "전기제품",
			},
			{
				source: "하드웨어",
				target: "전자제품",
			},
		],
	};

	return (
		<>
			<NavBar />
			<ItemBar itemName={itemName} itemDescription={itemDescription} />
			<InfoBar />
			<Graph data={data} />
		</>
	);
}

export default GraphPage;
