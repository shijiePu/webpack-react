import { useEffect, useRef } from "react";


function useDebounceEffect(callback, delay = 200, deps) {

    const timer = useRef(null)

    useEffect(() => {
        if (timer.current) {
            cancel()
        }
        timer.current = setTimeout(() => {
            callback()
            clearTimeout(timer.current)
            timer.current = null;
        }, delay)
    }, deps)

    /**
     * @cancel 强行终止当前fn执行
     */
    const cancel = () => {
        clearTimeout(timeout.current)
        timer.current = null
    }

    return { cancel }
}


export default useDebounceEffect
