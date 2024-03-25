import { useEffect, useState, useRef } from "react";

function useThrottleState(initValue, delay = 200) {

    const [, update] = useState({})

    const value = useRef(null);
    const timer = useRef(null);


    useEffect(() => { value.current = initValue; }, [])


    const throttle = (val) => {
        value.current = val;
        if (timer.current) {
            return
        }
        timer.current = setTimeout(() => {
            update({})
            timer.current = null
        }, delay)
    }

    const dispatch = (val) => {
        console.log('dispatch', val);
        throttle(val)
    }

    return [value.current, (val) => dispatch(val)]
}


export default useThrottleState