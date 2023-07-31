import { useRef } from "react";

export default function useEffectEvent(callback) {
  const fn = useRef(null);
  fn.current = callback;
  return () => {
    fn.current();
  };
}
