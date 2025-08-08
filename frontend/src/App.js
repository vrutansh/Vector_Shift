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
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <button onClick={() => SubmitButton(nodes, edges)}>Submit</button>
    </div>
  );
}

export default App;
