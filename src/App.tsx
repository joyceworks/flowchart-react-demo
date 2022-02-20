import React, { useCallback, useState } from "react";
import "./App.css";
import Flowchart from "flowchart-react";
import { ConnectionData, NodeData } from "flowchart-react/dist/schema";
import update from "immutability-helper";

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

  const handleSVGDoubleClick = useCallback(
    (event, zoom) => {
      const point = {
        x: event.nativeEvent.offsetX / zoom,
        y: event.nativeEvent.offsetY / zoom,
        id: +new Date(),
      };
      let nodeData: NodeData;
      if (!nodes.find((item) => item.type === "start")) {
        nodeData = {
          type: "start",
          name: "Start",
          ...point,
        };
      } else if (!nodes.find((item) => item.type === "end")) {
        nodeData = {
          type: "end",
          name: "End",
          ...point,
        };
      } else {
        nodeData = {
          ...point,
          name: "New",
          type: "operation",
        };
      }
      setNodes((prevState) => [...prevState, nodeData]);
    },
    [nodes]
  );

  return (
    <div>
      <Flowchart
        onChange={(nodes, connections) => {
          setNodes(nodes);
          setConns(connections);
        }}
        onConnectionDoubleClick={(conn) => {
          console.log(conn);
        }}
        onNodeDoubleClick={(node) => {
          setNodes((prevState) => {
            return update(prevState, {
              [prevState.findIndex((item) => item.id === node.id)]: {
                name: {
                  $set: prompt("Enter node name:", node.name) || "No name",
                },
              },
            });
          });
        }}
        readonly={false}
        onMouseUp={(event, zoom) => {
          // Drop something here
        }}
        onDoubleClick={handleSVGDoubleClick}
        style={{ width: 800, height: 600, margin: 10 }}
        nodes={nodes}
        connections={conns}
        render={(data) => {
          if (data.type !== "operation") {
            return undefined;
          }
          if (!data.approvers) {
            return "无审核人";
          }
          let text;
          for (let i = 0; i < data.approvers.length; i++) {
            if (i > 0) {
              text += "等...";
              break;
            }
            text = data.approvers[i].name;
          }
          return text;
        }}
      />
    </div>
  );
}

export default App;
