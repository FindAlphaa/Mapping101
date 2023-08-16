// Graph.js

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import styles from "./Graph.module.css";

function Graph({ data, width = 2004, height = 720 }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    const colorScale = d3
      .scaleLinear()
      .domain([-10, 0, 10])
      .range(["red", "white", "blue"]);

    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 10])
      .on("zoom", (event) => {
        const { transform } = event;
        d3.select(".nodes").attr("transform", transform);
        d3.select(".links").attr("transform", transform);
      });

    svg.call(zoom);

    const links = data.links.map((d) => Object.assign({}, d));
    const nodes = data.nodes.map((d) => Object.assign({}, d));

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-600))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    const link = svg
      .append("g")
      .attr("class", "links")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line");

    const node = svg
      .append("g")
      .attr("class", "nodes")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("g")
      .data(nodes)
      .join("g")
      .on("mouseenter", function (event, d) {
        link
          .attr("display", "none")
          .attr("stroke-width", 3)
          .attr("stroke", "#1eb5e4")
          .filter((l) => l.source === d || l.target === d)
          .attr("display", "block");
      })
      .on("mouseleave", (evt) => {
        link
          .attr("stroke-width", 1.5)
          .attr("stroke", "#bbbbbb")
          .attr("display", "block");
      });

    const circle = node
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) => colorScale(d.color))
      .attr("cursor", "pointer");

    node
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0")
      .text((d) => d.id)
      .attr("font-size", 7)
      .attr("fill", "black");

    circle.append("title").text((d) => d.id);

    // Add a drag behavior.
    node.call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

    simulation.on("tick", () => {
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);

      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
    });

    ////////////////////////////////////////////////////////////////////////////////////////////
    // DRAG EVENT
    ////////////////////////////////////////////////////////////////////////////////////////////
    // Reheat the simulation when drag starts, and fix the subject position.
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    // Update the subject (dragged node) position during drag.
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    // Restore the target alpha so the simulation cools after dragging ends.
    // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Clean up on unmount
    return () => {
      simulation.stop();
    };
  }, [data, width, height]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={styles.graph}
    ></svg>
  );
}

export default Graph;
