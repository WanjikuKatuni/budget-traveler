// import React from 'react'
// import { useState } from 'react';

// function Login({onLogin}) {

//     const [user_name, setUsername] = useState("");

//     function handleSubmit(e){
//         e.preventDefault()

//         fetch("/login",{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({user_name})
//         })
//         .then((res)=> res.json())
//         .then((user)=> onLogin(user))
//     }
//   return (
//     <form onSubmit={handleSubmit}>
//         <input type="text" value={user_name} onChange={(e)=> setUsername(e.target.value)}/>
//         <button type="submit" className="btn">Login</button>
//     </form>
//   )
// }

// export default Login