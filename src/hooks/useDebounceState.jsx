import { useEffect, useState, useRef } from "react";

function useDebounceState(initValue, delay = 200) {
    const [, update] = useState({})
    const value = useRef(null);
    const timer = useRef(null);

    // 设置初始值
    useEffect(() => { value.current = initValue; }, [])

    const debounce = (val) => {
        value.current = val;
        if (timer.current) {
            clearTimeout(timer.current)
            timer.current = null
        }
        timer.current = setTimeout(() => {
            update({})
            timer.current = null
        }, delay)
    }

    const dispatch = (val) => {
        debounce(val)
    }

    return [value.current, (val) => dispatch(val)]
}


export default useDebounceState