import React, { useCallback, useState } from "react";
import "./App.css";
import Flowchart from "flowchart-react";
import { ConnectionData, NodeData } from "flowchart-react/dist/schema";
import update from "immutability-helper";

function App() {
  const [nodes, setNodes] = useState<NodeData[]>([
    {
      type: "start",
      title: "Start",
      x: 150,
      y: 190,
      id: 1604410569920,
    },
    {
      type: "end",
      title: "End",
      x: 500,
      y: 190,
      id: 1604410572363,
    },
    {
      x: 330,
      y: 190,
      id: 1604410575428,
      title: "New",
      type: "operation",
      content: "Joyce",
    },
    {
      x: 330,
      y: 300,
      id: 1604410591865,
      title: "New",
      type: "operation",
      content: "No approver",
    },
  ]);
  const [conns, setConns] = useState<ConnectionData[]>([
    {
      source: { id: 1604410569920, position: "right" },
      destination: { id: 1604410575428, position: "left" },
      id: 1604410587907,
      type: "success",
    },
    {
      source: { id: 1604410575428, position: "right" },
      destination: { id: 1604410572363, position: "left" },
      id: 1604410590524,
      type: "success",
    },
    {
      source: { id: 1604410569920, position: "bottom" },
      destination: { id: 1604410591865, position: "left" },
      id: 1604410596866,
      type: "success",
    },
    {
      source: { id: 1604410591865, position: "right" },
      destination: { id: 1604410572363, position: "bottom" },
      id: 1604410599205,
      type: "success",
    },
  ]);

  return (
    <Flowchart
      onChange={(nodes, connections) => {
        setNodes(nodes);
        setConns(connections);
      }}
      style={{ width: 800, height: 640 }}
      nodes={nodes}
      connections={conns}
    />
  );
}

export default App;
