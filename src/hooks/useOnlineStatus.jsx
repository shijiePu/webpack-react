import React, { useState, useEffect } from "react";

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}

// React 18.0

// import { useSyncExternalStore } from 'react';

// function subscribe(callback) {
//   window.addEventListener('online', callback);
//   window.addEventListener('offline', callback);
//   return () => {
//     window.removeEventListener('online', callback);
//     window.removeEventListener('offline', callback);
//   };
// }

// export function useOnlineStatus() {
//   return useSyncExternalStore(
//     subscribe,
//     () => navigator.onLine, // 如何在客户端获取值
//     () => true // 如何在服务端获取值
//   );
// }

