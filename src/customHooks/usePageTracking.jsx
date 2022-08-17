import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AccessLogCreator from '../utils/AccessLogCreattor';

const accessLogCreator = new AccessLogCreator({ logLocation: '/somewhere' });

console.log('created');

const usePageTracking = () => {
    const location = useLocation();
    useEffect(() => {
        accessLogCreator.postLog(location);
    }, [location, accessLogCreator]);
};

export default usePageTracking;
