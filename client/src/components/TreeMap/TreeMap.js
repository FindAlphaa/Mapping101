import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import axios from "axios";

import Loading from "../Loading/Loading";
import { set } from "mongoose";

function TreeMap({ selectedNodeId }) {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchTreeData = async () => {
      const res = await axios.get(`/api/company/${selectedNodeId}`);
      const treeData = res.data;
      setData(treeData);
      setLoading(false);
    };
    if (selectedNodeId) fetchTreeData();
  }, [selectedNodeId]);

  const options = {
    data,
    series: [
      {
        type: "treemap",
        labelKey: "name",
        sizeKey: "size",
        gradient: false,
        colorKey: "color",
        tooltip: {
          renderer: (params) => {
            return {
              content: `ESG: ${params.datum[params.colorKey]}`,
            };
          },
        },
        formatter: (params) => ({
          stroke: params.depth < 2 ? "transparent" : "black",
        }),
        // labels: {
        // 	value: {
        // 		formatter: (params) => `ESG: ${params.datum.color}`,
        // 	},
        // },
      },
    ],
    background: {
      fill: "#2c2c2c",
    },
    title: {
      text: selectedNodeId,
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
    subtitle: {
      text: "선택된 키워드에 대한 회사 ESG 점수",
      fontSize: 14,
      fontWeight: "normal",
      color: "#fff",
    },
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="ag-theme-alpine"
          style={{
            height: "530px",
          }}
        >
          <AgChartsReact options={options} />
        </div>
      )}
    </>
  );
}

export default TreeMap;
