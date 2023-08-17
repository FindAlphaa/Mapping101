import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ValueChain.module.css";

function ValueChain({ selectedNodeId }) {
  const [keywordsData, setKeywordsData] = useState(null);
  //keywordsData, node data, node는 graph.js에서 node.id로 값 받아옴

  useEffect(() => {
    if (selectedNodeId) {
      axios
        .get(`/data/${selectedNodeId}_keyword.json`)
        .then((keywordResponse) => {
          console.log("Received keyword data:", keywordResponse.data);
          console.debug(setKeywordsData(keywordResponse.data));
          setKeywordsData(keywordResponse.data);
        })
        .catch((error) => {
          console.error("Error fetching keyword data:", error);
        });
    }
  }, [selectedNodeId]);

  return (
    <div className={styles.valueChainsection}>
      <div className={styles.valueChainVisual}>
        <div className={styles.companyList}>
          <div className={styles.companySection}></div>
        </div>
        <div className={styles.valueChain} />
        {keywordsData && keywordsData[selectedNodeId] && (
          <div className={styles.valueChain}>
            <h3 className={styles.nodeTitle}>{selectedNodeId}</h3>
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
