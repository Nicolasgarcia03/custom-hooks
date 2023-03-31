import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:null,
    });

    const getFetch = async () =>{

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = resp.json();
        console.log(data)

        setState({
            data,
            isLoading: false,
            hasError:null,
        });
    }
    
    useEffect(()=>{
        getFetch();
    },[url]);

    return {
        data,
        isLoading,
        hasError,
    }
}


