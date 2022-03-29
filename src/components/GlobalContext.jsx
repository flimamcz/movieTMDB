import {createContext, useState, useCallback} from 'react'

export const GlobalContext = createContext()

export const GlobalDatas = ({children}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)


    const request = useCallback(async(url) => {
        let response;
        let json
        try {
            setError(null)
            setLoading(true)
            response = await fetch(url)
            json = await response.json()
        } catch (error) {
            setError('Erro')
            json = null
        } finally{
            setData(json)
            setLoading(false)
        }
    }, [])


    return (
        <GlobalContext.Provider value={{data, loading, error, request}}>
            {children}
        </GlobalContext.Provider>
    )
}