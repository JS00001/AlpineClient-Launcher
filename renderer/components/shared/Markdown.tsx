import { PropsWithChildren } from 'react';
import { CodeProps } from 'react-markdown/lib/ast-to-react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export interface MarkdownProps {
	children: string;
}

const CodeComponent = (props: PropsWithChildren<CodeProps>) => {
	const match = /language-(\w+)/.exec(props.className || '');
	return !props.inline && match ? (
		<SyntaxHighlighter
			children={String(props.children).replace(/\n$/, '')}
			style={nord}
			language={match[1]}
			PreTag={'div'}
		/>
	) : (
		<code className={props.className} {...props}>
			{props.children}
		</code>
	);
};

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
	return (
		<ReactMarkdown
			rehypePlugins={[rehypeRaw]}
			remarkPlugins={[remarkGfm]}
			components={{
				code: CodeComponent,
				h1: (props: any) => <h1 {...props} className='text-3xl font-bold' />,
				h2: (props: any) => <h2 {...props} className='text-2xl font-semibold' />,
				h3: (props: any) => <h3 {...props} className='text-xl font-medium' />,
				h4: (props: any) => <h4 {...props} className='text-lg font-normal' />,
			}}
			className='w-full text-white'
		>
			{children}
		</ReactMarkdown>
	);
};

export default Markdown;
