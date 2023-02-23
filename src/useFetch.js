import { useState, useEffect } from "react";

const useFetch = (url) => {
// Good for fetching data

const [data, setData] = useState(null)
const [isPending, setIsPending] = useState(true)
const [error, setError] = useState(null)


useEffect(()=> {
    fetch(url)
    .then(res => {
        if(!res.ok) {
            throw Error('could not fetch the data for that resource')
        }
        return res.json()
    }).then(data => {
    setData(data)
    setIsPending(false)
    })
    .catch((err) => {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
    })
},[url] // varaibles can be added here as a dependency
)

return { data, isPending, error }
}


export default useFetch