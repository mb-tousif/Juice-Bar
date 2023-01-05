import { useState, useEffect } from "react";

export default function useUser() {
    const [loader, setLoader]= useState(false);
    const [user, setUser]= useState([]);

    useEffect(() => {
      const url = "https://fruits-warehouse-server.vercel.app/api/v1/login";
      setLoader(true)
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setLoader(false);
            setUser(data)
        });
    }, [user, loader]);

    return [user, loader];
}
