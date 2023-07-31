import { useEffect, useState } from "react";

export function useDelayedValue(value, delay) {
  const [delValue, setdelValue] = useState(value);
  // TODO: 实现这个 Hook
  useEffect(() => {
    setTimeout(() => {
      return setdelValue(value);
    }, delay);
  }, [delay]);

  return delValue;
}
