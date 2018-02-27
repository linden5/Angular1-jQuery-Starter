export const STATE = Object.freeze({
    IS_FILE_PAGE: 'isFilePage',
    BIDDING_ACTIVITY: 'biddingActivity'
});

export const MUTATION = Object.freeze({
    SET_FILE_PAGE: 'setFilePage',
    SET_BIDDING_ACTIVITY: 'setBiddingActivity'
});

export default {
    state: {
        [STATE.IS_FILE_PAGE]: false,
        [STATE.BIDDING_ACTIVITY]: null
    },
    mutation: {
        [MUTATION.SET_FILE_PAGE](val, state) {
            state[STATE.IS_FILE_PAGE] = val;
        },
        [MUTATION.SET_BIDDING_ACTIVITY](val, state) {
            state[STATE.BIDDING_ACTIVITY] = val;
        }
    }
}