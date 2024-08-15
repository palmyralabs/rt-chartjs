import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface codeHighlightInput {
    code: any,
    style?: any,
    language?: any
    showLineNumbers?: boolean
}

const customStyle: any = {
    lineHeight: '1.5',
    fontSize: '1.1rem',
    borderRadius: '5px',
    backgroundColor: '#282c34',
    padding: '20px'
};

const CodeHighlighter = (props: codeHighlightInput) => {
    const language = props.language || 'tsx';
    const codeStyle = props.style || dracula;
    const lineNumbers = props.showLineNumbers || false;

    const custom = {
        ...codeStyle,
        'pre[class*="language-"]': {
            ...codeStyle['pre[class*="language-"]'],
            background: '#282c34',
        },
    };
    return (
        <SyntaxHighlighter language={language} style={custom} customStyle={customStyle} showLineNumbers={lineNumbers}>
            {props.code}
        </SyntaxHighlighter>
    );
};

export default CodeHighlighter;
