'use client'

import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Start' },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    data: { label: 'End' },
    position: { x: 400, y: 100 },
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'default',
    animated: true,
    style: {
      stroke: '#4f46e5',
      strokeWidth: 4,
      strokeDasharray: '5 5',
      filter: 'drop-shadow(0 0 4px #4f46e5)',
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#4f46e5',
    },
  },
];

export default function BeamFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}
