import React, { useState } from "react";
import Flowchart from "flowchart-react";
import { ConnectionData, NodeData } from "flowchart-react/dist/schema";

const App = () => {
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
      title: "Joyce",
      type: "operation",
    },
    {
      x: 330,
      y: 300,
      id: 1604410591865,
      title: () => {
        return "No approver";
      },
      type: "operation",
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
      style={{ width: 800, height: 600 }}
      nodes={nodes}
      connections={conns}
    />
  );
};

export default App;
