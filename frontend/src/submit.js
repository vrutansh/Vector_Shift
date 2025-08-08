// submit.js
import axios from 'axios';

/**
 * Submits pipeline data to the backend.
 * @param {Array} nodes - Array of ReactFlow nodes.
 * @param {Array} edges - Array of ReactFlow edges.
 */
export async function SubmitButton(nodes, edges) {
  // Validate input
  if (!Array.isArray(nodes) || !Array.isArray(edges)) {
    console.error('❌ nodes or edges is not an array:', { nodes, edges });
    alert('Invalid nodes or edges passed. Please try again.');
    return;
  }

  try {
    const response = await axios.post('http://localhost:8000/pipelines/parse', {
      nodes: nodes.map((node) => ({
        id: node.id,
        type: node.type,
        data: node.data,
        position: node.position,
      })),
      edges: edges.map((edge) => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
      })),
    });

    const { num_nodes, num_edges, is_dag } = response.data;

    alert(
      `Pipeline submitted!\n\n` +
      `Number of nodes: ${num_nodes}\n` +
      `Number of edges: ${num_edges}\n` +
      `Is DAG: ${is_dag ? 'Yes' : 'No'}`
    );
  } catch (error) {
    alert('❌ Failed to submit pipeline. Check console for details.');
    console.error('❌ Submission error: ', error.response?.data || error.message);
  }
}
