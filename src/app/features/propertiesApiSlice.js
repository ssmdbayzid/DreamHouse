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
        }),
        addProperty: build.mutation({
            query: (data)=> ({
                url: `properties`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Properties"]
        })
    })
})

export const {
    useGetAllPropertiesQuery,
    useGetPropertyQuery,
    useAddPropertyMutation,
} = propertiesApiSlice;