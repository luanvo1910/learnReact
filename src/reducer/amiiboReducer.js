export const amiiboReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case 'AMIIBOS_LOADED_SUCCESS':
            return {
                ...state,
                amiibos: payload,
                isLoading: false
            }
        case 'AMIIBOS_LOADED_FAIL':
            return {
                ...state,
                payload: [],
                isLoading: false
            }
        default:
            return state
    }
}