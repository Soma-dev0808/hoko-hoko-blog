export default {
    /**
     *
     * @param {string} type
     * @returns {object} redux action
     */
    getBlogList: (type) => ({
        type,
        payload: {
            request: {
                method: 'get',
                url: 'http://localhost:3004/mock-blogs',
                headers: {},
            },
        },
    }),
};
