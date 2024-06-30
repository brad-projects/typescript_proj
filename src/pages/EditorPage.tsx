import React from 'react';
import OnlineEditor from '../components/OnlineEditor/OnlineEditor';

const EditorPage: React.FC = () => {
  return (
    <div className="EditorPage">
      <h1>Online Markdown Editor</h1>
      <OnlineEditor />
    </div>
  );
};

export default EditorPage;