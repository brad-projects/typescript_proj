import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/Editor.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {tomorrow} from "react-syntax-highlighter/dist/esm/styles/prism";


interface CodeProps {
    node?: any,
    inline?: any,
    className?: any,
    children?: any,
}

interface MarkdownPreviewProps {
    markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
    return (
        <div className={styles.previewSection}>
            <h2>Preview</h2>
            <div className={styles.previewContent}>
                <ReactMarkdown
                components={{
                    code({node, inline, className, children, ...props}: CodeProps) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                
                }}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default MarkdownPreview;
