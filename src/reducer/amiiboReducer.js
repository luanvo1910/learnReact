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
        case 'FIND_AMIIBO':
            return { ...state, amiibo: payload }
        default:
            return state
    }
}