import {
    useEffect, useRef, useState, useCallback, useMemo,
} from 'react';

// const useThrottle = (fn, durationMS) => {
//     const scrollingTimer = useRef();

//     return useCallback((args) => {
//         if (scrollingTimer.current) return; // 既にタイマーがある時は何もしない
//         scrollingTimer.current = setTimeout(() => {
//             fn(args);
//             scrollingTimer.current = undefined; // タイマーをリセット
//         }, durationMS);
//     }, [durationMS, scrollingTimer, fn]);
// };

const useThrottle2 = (fn, durationMS) => {
    const scrollingTimer = useRef();

    // handlerでscrollの度に呼ばれる
    return useCallback((args) => {
        if (scrollingTimer.current) return;
        scrollingTimer.current = setTimeout(() => {
            fn(args);
            scrollingTimer.current = undefined;
        }, durationMS);
    }, [durationMS, fn, scrollingTimer]);
};

const useOffsetTop = (ref = null) => {
    const [viewportTop, setViewportTop] = useState(undefined);
    const [pageOffsetTop, setPageOffsetTop] = useState(undefined);

    // useStateが動くたびに新しいコールバックが渡される
    const handler = useThrottle2(() => {
        if (!ref?.current) return;

        console.log('executed');
        const clientRect = ref.current.getBoundingClientRect();
        setViewportTop(clientRect.top);
        const newPageOffsetTop = clientRect.top + window.pageYOffset;
        setPageOffsetTop(newPageOffsetTop);
    }, 1000);

    useEffect(() => {
        if (!ref?.current) return;

        handler();
        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);
    }, [handler]);

    return useMemo(() => ({ viewportTop, pageOffsetTop }), [viewportTop, pageOffsetTop]);
};

export default useOffsetTop;
