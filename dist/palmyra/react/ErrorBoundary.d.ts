import { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
    children?: ReactNode;
    errorMessage?: string;
}
interface State {
    hasError: boolean;
}
declare class ErrorBoundary extends Component<Props, State> {
    state: State;
    static getDerivedStateFromError(_: Error): State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import('react').ReactPortal | import('react').ReactElement<unknown, string | import('react').JSXElementConstructor<any>> | Iterable<ReactNode>> | import("react/jsx-runtime").JSX.Element;
}
export default ErrorBoundary;
