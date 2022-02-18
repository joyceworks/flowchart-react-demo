import React, { useState } from "react";
import "./App.css";
import Flowchart from "flowchart-react";
import { ConnectionData, NodeData } from "flowchart-react/dist/schema";

function App() {
  const [nodes, setNodes] = useState<NodeData[]>([
    {
      type: "start",
      name: "Start",
      x: 150,
      y: 190,
      id: 1604410569920,
      approvers: [],
    },
    {
      type: "end",
      name: "End",
      x: 500,
      y: 190,
      id: 1604410572363,
      approvers: [],
    },
    {
      x: 330,
      y: 190,
      id: 1604410575428,
      name: "New",
      type: "operation",
      approvers: [{ name: "Joyce", id: 1 }],
    },
    {
      x: 330,
      y: 300,
      id: 1604410591865,
      name: "New",
      type: "operation",
      approvers: [],
    },
  ]);

  const [conns, setConns] = useState<ConnectionData[]>([
    {
      source: { id: 1604410569920, position: "right" },
      destination: { id: 1604410575428, position: "left" },
      id: 1604410587907,
      type: "pass",
    },
    {
      source: { id: 1604410575428, position: "right" },
      destination: { id: 1604410572363, position: "left" },
      id: 1604410590524,
      type: "pass",
    },
    {
      source: { id: 1604410569920, position: "bottom" },
      destination: { id: 1604410591865, position: "left" },
      id: 1604410596866,
      type: "pass",
    },
    {
      source: { id: 1604410591865, position: "right" },
      destination: { id: 1604410572363, position: "bottom" },
      id: 1604410599205,
      type: "pass",
    },
  ]);
  return (
    <div>
      <Flowchart
        onChange={(nodes, connections) => {
          setNodes(nodes);
          setConns(connections);
        }}
        style={{ width: 640, height: 480 }}
        nodes={nodes}
        connections={conns}
      />
    </div>
  );
}

export default App;
