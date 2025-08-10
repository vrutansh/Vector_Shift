// // toolbar.js

// import { DraggableNode } from './draggableNode';

// export const PipelineToolbar = () => {

//     return (
//         <div style={{ padding: '10px' }}>
//             <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                 <DraggableNode type='customInput' label='Input' />
//                 <DraggableNode type='llm' label='LLM' />
//                 <DraggableNode type='customOutput' label='Output' />
//                 <DraggableNode type='text' label='Text' />
//                 {/* /new/ */}
//                 <DraggableNode type='math' label='Math' />
//                 <DraggableNode type='apiCall' label='API' />
//                 <DraggableNode type='delay' label='Delay' />
//                  <DraggableNode type='random' label='Random' />
//                  <DraggableNode type='log' label='Log' />

//             </div>
//         </div>
//     );
// };


// toolbar.js
import { DraggableNode } from './draggableNode';
import { Box, Bot, Upload, Type, Calculator, Globe, Timer, Shuffle, FileText } from 'lucide-react';

export const PipelineToolbar = () => {
    const tools = [
        { type: 'customInput', label: 'Input', icon: Upload },
        { type: 'llm', label: 'LLM', icon: Bot },
        { type: 'customOutput', label: 'Output', icon: Box },
        { type: 'text', label: 'Text', icon: Type },
        { type: 'math', label: 'Math', icon: Calculator },
        { type: 'apiCall', label: 'API', icon: Globe },
        { type: 'delay', label: 'Delay', icon: Timer },
        { type: 'random', label: 'Random', icon: Shuffle },
        { type: 'log', label: 'Log', icon: FileText },
    ];

    return (
        <div style={{
            padding: '15px',
            background: '#f8f9fa',
            borderBottom: '1px solid #ddd',
            boxShadow: '0 2px 6px rgba(53, 52, 52, 0.05)'
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '22px',
                justifyContent: 'flex-start'
            }}>
                {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                        <div
                            key={tool.type}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                background: 'whitesmoke',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                cursor: 'grab',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#afbee0ff';
                                e.currentTarget.style.transform = 'scale(1.03)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <Icon size={18} />
                            <DraggableNode type={tool.type} label={tool.label} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
