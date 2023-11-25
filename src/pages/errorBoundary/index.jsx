import { Component, Suspense } from "react";

// 
function ErrorComp(props) {
    const { title } = props
    return (<>
        <h3>{title.name}</h3>
    </>)
}

// 1 捕获异常抛出
class CatchError extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log('getDerivedStateFromError');
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log('componentDidCatch', { error, info });
    }

    render() {
        console.log('render');
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback;
        }
        return this.props.children;
    }
}


function View() {
    return (<>
        <h1>可以正常显示的元素</h1>
        <CatchError fallback={<div>组件发生错误；</div>}>
            <ErrorComp />
        </CatchError>
    </>)
}


export default View;