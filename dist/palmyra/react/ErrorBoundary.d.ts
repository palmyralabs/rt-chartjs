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
    render(): string | number | boolean | Iterable<ReactNode> | import("react/jsx-runtime").JSX.Element;
}
export default ErrorBoundary;
