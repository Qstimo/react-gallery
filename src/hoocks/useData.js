import React from "react"

export const useData = (callback) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [erorr, setErorr] = React.useState('');
    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback()
        } catch (error) {
            setErorr(error);
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, erorr]
}