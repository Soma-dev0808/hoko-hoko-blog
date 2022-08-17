export default {
    /**
     *
     * @param {string} type
     * @returns {object} redux action
     */
    getImageList: (type) => ({
        type,
        payload: {
            request: {
                method: 'get',
                url: 'http://localhost:3004/mock-images',
                headers: {},
            },
        },
    }),
};
