import {
    Component,
    useRef, useState,
    forwardRef, useImperativeHandle, useEffect
} from "react";
import { Button } from "antd";

function Child(props, ref) {
    const [text, setText] = useState('hello,ref')
    const [num, setNum] = useState(0)
    useImperativeHandle(ref,  //forwardRef 供父组件可访问的ref
        () => {
            //返回需要的方法
            return {
                changeText() {
                    setNum(num + 1)
                    setText('change function' + num)
                }
            }
        }, [num])


    const refCallback = (node) => {
        console.log('refCallback text变化会发生两次回调', node)
        // ref的处理都是在commit阶段，所以ref的指向的地址总是相同的。
        // react底层对ref函数的处理会有两个方法处理
        // 一次更新中，
        // 1、在 commit 的 mutation 阶段, 执行commitDetachRef，
        // commitDetachRef 会清空之前ref值，使其重置为 null
        // 此时会打印第一次  ： null 
        // 2、DOM 更新阶段，这个阶段会根据不同的 effect 标签，真实的操作 DOM 。
        // 3、layout 阶段，在更新真实元素节点之后，此时需要更新 ref 。
        // 此时会打印第二次 ： 最新的dom
    }
    return <h3 ref={refCallback}>{text}</h3>
}

function Child2(props, ref) {
    const childRef = useRef(null)
    const childRef2 = useRef(null)
    useImperativeHandle(
        ref,  //接受 forWardRef 传递过来的 ref 。
        () => {
            return {
                childRef,
                childRef2
            }
        },//返回值作为暴露给父组件的 ref 对象
        []//:依赖项 deps，依赖项更改形成新的 ref 对象。
    )
    return <h3>
        <div>子组件2</div>
        <div ref={childRef}>这是想要获取的元素</div>
        <input value={'这是想要获取的元素2'} ref={childRef2} />
    </h3>
}

function Child3() {
    return <div><h3>Child3</h3></div>
}

class Child4 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <h3 >Child4</h3>
    }
}

const ChildForwardRef = forwardRef(Child)
// 父组件调用子组件的方法
const ChildHoc = forwardRef(Child2)
// 怎么跨层级获取多个子元素  合并转发？
// 高阶组件转发



// 可以执行子组件方法的组件
// 父组件用 ref 标记子组件，由于子组件 Son 是函数组件没有实例，所以用 forwardRef 转发 ref。
// 子组件 Son 用 useImperativeHandle 接收父组件 ref，将让 input 聚焦的方法 onFocus 和 改变 input 输入框的值的方法 onChangeValue 传递给 ref 。
// 父组件可以通过调用 ref 下的 onFocus 和 onChangeValue 控制子组件中 input 赋值和聚焦。
function RunChildFn() {
    const ref = useRef(null)
    //ref回调
    const refCallback = (node) => {
        console.log(`
            //1、ref的值为function时
            此时组件挂载完成之后会执行此函数
            // 2、ref值为useRef变量
            此时组件挂载完成之后会赋值给该变量
            (class组件可以传入字符串,会自动挂载在组件实例的refs属性上)
        `);
        ref.current = node
    }

    const handleClick = () => {
        console.log(`说明：
        通过 forwardRef + useImperativeHandle 的实现方式
        1、forwardRef(是一个插槽?) 包裹子组件,子组件将在props,后再多传入一个ref参数
        2、子组件通过useImperativeHandle 返回的对象可供父组件访问;
        
        `);
        console.log('子组件组件实例：${ref.current}', ref.current);
        const childNode = ref.current;
        childNode.changeText()
    }

    const ref2 = useRef(null)

    const handleClick2 = () => {
        console.log('handleClick2.childRef', ref2.current.childRef.current);
        console.log('handleClick2.childRef2', ref2.current.childRef2.current);
        const div = ref2.current.childRef.current
        const input = ref2.current.childRef2.current
        input.focus();
    }

    const ref3 = useRef(null)
    const ref4 = useRef(null)
    useEffect(() => {
        console.log('函数组件ref3', ref3.current);
        console.log('函数组件ref4', ref4.current);
    }, [])
    return <div>
        <Button onClick={handleClick}> 调用子组件方法 </Button>
        <Button onClick={handleClick2}> 跨层级获取子组件2 Dom </Button>
        <ChildForwardRef ref={ref}></ChildForwardRef>
        {/* <ChildForwardRef ref={refCallback}></ChildForwardRef> */}
        <ChildHoc ref={node => ref2.current = node}></ChildHoc>
        <Child3 ref={ref3}></Child3>
        <Child4 ref={ref4}></Child4>
    </div >
}


// 问 : 
//  React 被 ref 标记的 fiber，那么每一次 fiber 更新都会调用
//  commitDetachRef 和 commitAttachRef 更新 Ref 吗 ？

// 只有在 ref 更新的时候，才会调用如上方法更新 ref ，
// 究其原因还要从如上两个方法的执行时期说起

// if (effectTag & Ref) {
//     const current = nextEffect.alternate;
//     if (current !== null) {
//       commitDetachRef(current);
//     }
//   }

//  if (effectTag & Ref) {
//      commitAttachRef(nextEffect);
//  }

// 只有含有 Ref tag 的时候，才会执行更新 ref

// 什么时候会标记ref tag?
// function markRef(current: Fiber | null, workInProgress: Fiber) {
//     const ref = workInProgress.ref;
//     if (
//       (current === null && ref !== null) ||      // 初始化的时候
//       (current !== null && current.ref !== ref)  // ref 指向发生改变
//     ) {
//       workInProgress.effectTag |= Ref;
//     }
//   }

// 卸载ref  
// 被卸载的 fiber 会被打成 Deletion effect tag ，
// 然后在 commit 阶段会进行 commitDeletion 流程。
// 对于有 ref 标记的 ClassComponent （类组件） 和 HostComponent （元素），
// 会统一走 safelyDetachRef 流程，这个方法就是用来卸载 ref。
// ：
// if (typeof ref === 'function') {  // 函数式 ｜ 字符串
// ref(null)
// } else {
//   ref.current = null;  // ref 对象
// }


export default RunChildFn;