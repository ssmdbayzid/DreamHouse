import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, {useState} from 'react'
import {useNavigate}  from 'react-router-dom'
import { auth } from '../../firebase.init'
import { CircleLoader } from 'react-spinners';
import {useDispatch} from 'react-redux'

import { BASE_URL } from '../utility/BASE_URL';
import { setUser } from '../app/features/userSlice';


const GoogleSignIn = () => {
    const [loading, setLoading] = useState(false)
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleSignIn = async ()=>{
        setLoading(true)
        try {
            const {user} = await signInWithPopup(auth, provider)  
            
            console.log(user)
            const userData = {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL
            }
            
           if(userData){

            console.log(userData)
            
            fetch(`${BASE_URL}auth/google/login`, {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response=>response.json())
            .then(data=> {
                
                dispatch(setUser(data?.user))
                localStorage.setItem("accessToken", (data?.token))
                setLoading(false)
                navigate("/")
                window.location.reload()
            })
            .catch(err=>console.log(err))
        }            
        } catch (error) {
            
        }
    }
  return (
    <div>
        <button onClick={()=>handleSignIn()}
        className='w-full flex items-center justify-center gap-5 py-2.5 bg-red-700 hover:bg-red-700 text-white rounded-full mt-5'
        >
        {loading && 
        <CircleLoader 
        size={30}
        color= "#fff"
        speedMultiplier={1}
        />
        } Sign In With Google
        </button>
    </div>
  )
}

export default GoogleSignIn