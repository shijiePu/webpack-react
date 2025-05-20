import { useEffect, useState } from "react";

export function useDelayedValue(value, delay) {
  const [delValue, setdelValue] = useState(value);
  useEffect(() => {
    setTimeout(() => {
      return setdelValue(value);
    }, delay);
  }, [delay]);

  return delValue;
}
