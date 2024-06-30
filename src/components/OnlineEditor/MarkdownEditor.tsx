import React from 'react';
import styles from "../../styles/Editor.module.css";

interface MarkdownPreviewProps {
  markdown: string;
  onMarkdownChange: (markdown: string) => void;
}

const MarkdownEditor: React.FC<MarkdownPreviewProps> = ({ markdown, onMarkdownChange }) => {
    return (
        <div className={styles.editorSection}>
          <h2>Editor</h2>
          <textarea className={styles.editorTextarea}
            value={markdown}
            onChange={(e) => onMarkdownChange(e.target.value)}
            style={{ width: '100%', height: '400px' }}
          />
        </div>
      );
};

export default MarkdownEditor;