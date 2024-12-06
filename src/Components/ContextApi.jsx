import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
let apiData = createContext()

const ContextApi = ({ children }) => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get("https://api-fresh-harvest.code-commando.com/api/v1/products").then((response) => {
            setInfo(response.data.data)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [])


    

    return (
        <>

            <apiData.Provider value={info}>{children}</apiData.Provider>

        </>
    );
};

export { ContextApi, apiData };