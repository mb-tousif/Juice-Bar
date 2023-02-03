import { useState, useEffect } from "react";

export default function useUser() {
    const [loader, setLoader]= useState(false);
    const token = localStorage.getItem("token");
    useEffect(() => {
        if(!token){
            setLoader(true)
        }
    }, [token, loader]);

    return [token, loader];
}
