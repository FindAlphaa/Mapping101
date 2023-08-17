import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import ItemBar from "../components/ItemBar/ItemBar";
import InfoBar from "../components/InfoBar/InfoBar";
import Graph from "../components/Graph/Graph";
import KeyWordName from "../components/KeyWordName/KeyWordName";
import ValueChain from "../components/ValueChain/ValueChain";

function GraphPage() {
  const { id } = useParams();
  const [selectedKeywords, setSelectedKeywords] = useState([]);
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
  });

  return (
    <>
      <ItemBar itemName={itemName} itemDescription={itemDescription} />
      <InfoBar />

      {loading ? (
        <div>로딩중..</div>
      ) : (
        // onNodeClick: setSelectedKeywords 함수 바인딩
        // graph에서. node클릭시 해당 노드와 관련된 키워드들이 setSelectedKeywords에 저장
        <Graph
          data={data}
          onNodeClick={(selectedNodeId) => {
            console.log("Selected Node ID:", selectedNodeId);
            // selectedNodeId 노드의 선택한 id값 전달 -> ValueChain 컴포넌트로 전달
          }}
        />
      )}
      <KeyWordName />
      <ValueChain selectedNodeId={selectedKeywords} />
    </>
  );
}

export default GraphPage;
