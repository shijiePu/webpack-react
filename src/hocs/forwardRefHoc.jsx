import { Component, forwardRef } from "react"

// 跨层级获取ref
export function HOC(Comp) {
    class Warp extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            const { forwardedRef, ...otherprops } = this.props
            return <Comp ref={forwardedRef}  {...otherprops} />
        }
    }
    return forwardRef((props, ref) => <Warp ref={ref} {...props} />)
}

// 转发ref

