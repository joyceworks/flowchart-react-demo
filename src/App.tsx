import React, {useState} from "react";
import Flowchart from "flowchart-react";
import {ConnectionData, NodeData} from "flowchart-react/dist/schema";

const App = () => {
  const [nodes, setNodes] = useState<NodeData[]>([
    {
      type: "start",
      title: "Start",
      x: 50,
      y: 240,
      id: 1,
    },
    {
      type: "end",
      title: "End",
      x: 570,
      y: 240,
      id: 2,
    },
    {
      x: 400,
      y: 240,
      id: 3,
      title: "Joyce",
      type: "operation",
    },
    {
      x: 230,
      y: 240,
      id: 4,
      title: () => {
        return "Is leader";
      },
      type: "decision",
    },
  ]);
  const [conns, setConns] = useState<ConnectionData[]>([
    {
      source: {id: 1, position: "right"},
      destination: {id: 4, position: "left"},
      type: "success",
    },
    {
      source: {id: 3, position: "right"},
      destination: {id: 2, position: "left"},
      type: "success",
    },
    {
      source: {id: 4, position: "right"},
      destination: {id: 3, position: "left"},
      type: "fail",
    },
    {
      source: {id: 4, position: "bottom"},
      destination: {id: 2, position: "bottom"},
      type: "success",
    },
  ]);

  return (
    <Flowchart
      onChange={(nodes, connections) => {
        setNodes(nodes);
        setConns(connections);
      }}
      style={{width: 800, height: 600}}
      nodes={nodes}
      connections={conns}
      showToolbar={true}
    />
  );
};

export default App;
