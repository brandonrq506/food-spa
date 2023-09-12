import { useState, useEffect } from "react";

export const useHTTP = <T,>(callback: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log('Running useEffect in useHTTP');
        const execute = async () => {
            try {
                setIsLoading(true);
                const response = await callback();
                console.log(response);
                setData(response);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        execute();
    }, [callback]);



    return { data, error, isLoading };
};