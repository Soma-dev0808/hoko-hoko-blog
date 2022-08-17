import React, { useRef, useMemo } from 'react';
import useOffsetTop from '../customHooks/useOffsetTop';

const maxIconSize = 100;
const minIconSize = 20;

const SampleHeader = () => {
    const iconRef = useRef(null);
    const { pageOffsetTop, viewportTop } = useOffsetTop(iconRef);

    const iconSize = useMemo(() => {
        if (pageOffsetTop === undefined || viewportTop === undefined) return maxIconSize;

        const size = minIconSize + (viewportTop / pageOffsetTop) * (maxIconSize - minIconSize);

        return size.toFixed(1);
    }, [pageOffsetTop, viewportTop]);

    const upsideDownSize = useMemo(() => {
        if (pageOffsetTop === undefined || viewportTop === undefined) return maxIconSize;

        // eslint-disable-next-line max-len
        const size = maxIconSize + (1 - (viewportTop / pageOffsetTop)) * (maxIconSize - minIconSize);

        if (size >= maxIconSize * 2) return maxIconSize * 2;

        return size.toFixed(1);
    }, [pageOffsetTop, viewportTop]);

    return (
        <div style={{
            display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center',
        }}
        >
            <div
                ref={iconRef}
                style={{
                    width: `${iconSize}px`, height: `${iconSize}px`, backgroundColor: 'red', marginRight: '100px',
                }}
            />
            <div
                ref={iconRef}
                style={{
                    width: `${upsideDownSize}px`, height: `${upsideDownSize}px`, backgroundColor: 'red',
                }}
            />
        </div>
    );
};

export default SampleHeader;
