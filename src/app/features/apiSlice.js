import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


let token = "this token"


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    prepareHeaders:(header)=> {
        if(token){
            header.set("Authorization", `Bearer ${token}`)
        }
        return header;
    }
})

export const apiSlice  = createApi({
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions)

        if(result?.error?.status === 401){
            alert("Authorization failed")
        }
        return result;
    },
    endpoints: () => ({})
});