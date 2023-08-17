import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ValueChain.module.css";

function ValueChain({ selectedNodeId, id }) {
  const [keywordsData, setKeywordsData] = useState(null);
  //keywordsData, node data, node는 graph.js에서 node.id로 값 받아옴

  useEffect(() => {
    if (id) {
      // 선택한 노드 ID를 사용하여 JSON 파일 URL 구성
      axios
        .get(`/data/${id}_keyword.json`)
        .then((keywordResponse) => {
          setKeywordsData(keywordResponse.data);
        })
        .catch((error) => {
          console.error("Error fetching keyword data:", error);
        });
    }
  }, [id]);

  return (
    <div className={styles.valueChainsection}>
      <div className={styles.valueChainVisual}>
        <div className={styles.companyList}>
          <div className={styles.companySection}></div>
        </div>
        <div className={styles.valueChain} />
        {keywordsData && keywordsData[selectedNodeId] && (
          <div className={styles.valueChain}>
            <ul className={styles.keywordList}>
              {keywordsData[selectedNodeId].map((keyword, kIndex) => (
                <li key={kIndex} className={styles.keywordItem}>
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ValueChain;
