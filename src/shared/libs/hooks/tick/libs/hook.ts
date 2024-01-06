import {useEffect, useRef} from 'react';

export const useTick = (callback: (tick: number) => void, intervalMs = 1000) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const tickRef = useRef<number>(1);

    const startTick = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                callback(tickRef.current);
                tickRef.current++;
            }, intervalMs);
        }
    };

    const endTick = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            tickRef.current = 0;
        }
    };

    useEffect(() => {
        return () => {
            endTick(); // Stop the tick when the component is unmounted
        };
    }, []);

    return {startTick, endTick};
};