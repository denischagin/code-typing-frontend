import {useEffect, useRef, useState} from 'react';

export const useTick = (callback: (tick: number) => void, intervalMs = 1000) => {
    const [tick, setTick] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startTick = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTick((prevTick) => prevTick + 1);
            }, intervalMs);
        }
    };

    const endTick = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setTick(0);
        }
    };

    useEffect(() => {
        return () => {
            endTick();
        };
    }, []);

    useEffect(() => {
        if (tick === 0) return
        callback(tick);
    }, [tick]);

    return {startTick, endTick};
};