import React, { useEffect, useRef } from 'react';

export function useInterval(callback: any, delay: any) {
    const callbackRef: any= useRef();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const interval = setInterval(() => callbackRef.current(), delay);
        return () => clearInterval(interval);
    }, [delay]);
}
