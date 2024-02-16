
"use client"

import { useEffect, useState } from "react"


// async function getUser () {
//     const res = await fetch('/api/user/me',{
//         method:'GET'
//     })

//     return res.json()
// }


export default async function page () {

    const [user,setUser] = useState(null)
    // client side data fetch
    const getUser = async () => {
        const res = await fetch('/api/user/me')
        const data = await res.json()
        console.log(data)
    }
    useEffect(()=> {
        getUser()
    },[])
    return (
        <h1>hello world</h1>
    )
}