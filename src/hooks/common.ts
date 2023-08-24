import { useEffect, useState } from "react";

export const usePersistValue = (initialValue: string) => {
    const [persistValue, setPersistValue] = useState<string>("");

    useEffect(() => {
        const getLocalStorage = window.localStorage.getItem("persist:root");
        if (getLocalStorage) {
            setPersistValue(JSON.parse(getLocalStorage)[initialValue]);
        }
    }, []);

    return persistValue;
};
