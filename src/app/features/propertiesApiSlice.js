import { apiSlice } from "./apiSlice";

const propertiesApiSlice = apiSlice.enhanceEndpoints({addTagTypes: ["Properties"]}).injectEndpoints({
    endpoints: build => ({
        getAllProperties: build.query({
            query: ()=>`properties`,
            providesTags: ["Properties"]
        }),
        getProperty: build.query({
            query: (id)=> `properties/${id}`,
            providesTags: ["Properties"]
        })
    })
})

export const {
    useGetAllPropertiesQuery,
    useGetPropertyQuery,
} = propertiesApiSlice;