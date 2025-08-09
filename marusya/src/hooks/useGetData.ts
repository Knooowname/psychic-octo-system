import { useCallback, useEffect, useState } from "react"


export function useGetData<T>(func: () => Promise<T>): {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
} {
    
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)
    const [reloadKey, setReloadKey] = useState<number>(0)

    const refetch = useCallback(() => {
        setReloadKey((prev) => prev + 1)
    }, [])

    useEffect(() => {
        let isMounted = true
        func()
            .then((res) => {
                if(isMounted) {
                    setData(res)
                    setError(null)
                }
            })
            .catch((error) => {
                setError(error)
                console.log(error)
            })
            .finally(() => {
                isMounted ? setLoading(false) : null   
            })

            return () => {
                isMounted = false
            }
    }, [func, reloadKey])

    return {
        data,
        loading, 
        error,
        refetch
    }
}