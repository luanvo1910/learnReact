import { createContext, useReducer, useState } from "react";
import { amiiboReducer } from "../reducer/amiiboReducer"
import axios from "axios";

export const AmiiboContext = createContext()

const AmiiboContextProvider = ({children}) => {
    const [amiiboState, dispatch] = useReducer(amiiboReducer, {
        amiibo: null,
        amiibos: [],
        isLoading: true
    })

    const [showModal, setShowModal] = useState(false);
    const [searchString, setSearchString] = useState("");

    // fetch API = axios và set giá trị trả về vào fetchdata
    const getAmiibo = async () => {
        try {
        const response = await axios.get('https://amiiboapi.com/api/amiibo/')
        if (response.status === 200) {
            dispatch({type: 'AMIIBOS_LOADED_SUCCESS', payload: response.data.amiibo});
        }
        } catch (error) {
            console.log(error);
            dispatch({type: 'AMIIBOS_LOADED_FAIL'});
        }
    }

    // lấy giá trị được truyền vào để search sản phẩm 
    const searchAmiibos = async query => {
        try {
            const response = await axios.get(`https://www.amiiboapi.com/api/amiibo/?name=${query}`)
            if (response.status === 200) {
                dispatch({type: 'AMIIBOS_LOADED_SUCCESS', payload: response.data.amiibo});
            }
        } catch (error) {
            dispatch({type: 'AMIIBOS_LOADED_FAIL'})
        }
    }

    // lấy thông tin của 1 Amiibo và truyền vào amiibo
    const findAmiibo = amiiboId => {
		const amiibo = amiiboState.amiibos.find(amiibo => amiibo.head + amiibo.tail === amiiboId)
		dispatch({ type: 'FIND_AMIIBO', payload: amiibo })
	}
    
    const amiiboContextData = {
        amiiboState,
        getAmiibo,
        findAmiibo,
        showModal,
        setShowModal,
        searchAmiibos,
        searchString,
        setSearchString
    }

    return (
        <AmiiboContext.Provider value={amiiboContextData}>
            {children}
        </AmiiboContext.Provider>
    )
}

export default AmiiboContextProvider