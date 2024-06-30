import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';
import styles from "../../styles/Editor.module.css";

const OnlineEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');

  return (
    <div>
      <div className={styles.editorContainer}>
        <MarkdownEditor markdown={markdown} onMarkdownChange={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
};

export default OnlineEditor;