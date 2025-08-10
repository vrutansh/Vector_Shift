// import { PipelineToolbar } from './toolbar';
// import { PipelineUI } from './ui';
// import { SubmitButton } from './submit';
// import { useStore } from './store';
// import { shallow } from 'zustand/shallow';

// const selector = (state) => ({
//   nodes: state.nodes,
//   edges: state.edges,
// });

// function App() {
//   const { nodes, edges } = useStore(selector, shallow);

//   return (
//     <div>
//       <PipelineToolbar />
//       <PipelineUI />
//       <button onClick={() => SubmitButton(nodes, edges)}>Submit</button>
//     </div>
//   );
// }

// export default App;


import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

function App() {
  const { nodes, edges } = useStore(selector, shallow);

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f8fafc', height: '100vh' }}>
      <PipelineToolbar />
      <PipelineUI />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          onClick={() => SubmitButton(nodes, edges)}
          style={{
            background: 'linear-gradient(135deg, #4f46e5, #3b82f6)', // purple → blue gradient
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
        >
          🚀 Submit
        </button>
      </div>
    </div>
  );
}

export default App;

