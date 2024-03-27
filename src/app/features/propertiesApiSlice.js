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
        login: build.mutation({
            query: (data)=> ({
                url:`auth/login`,
                method: "POST",
                body: data
            })
        }),
        signup: build.mutation({
            query: (data)=> ({
                url:`auth/register`,
                method: "POST",
                body: data
            })
        }),
        addProperty: build.mutation({
            query: (data)=> ({
                url: `properties`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Properties"]
        }),
        addComment: build.mutation({
            query: ({id, ...rest})=> ({
                url: `properties/${id}/comments`,
                method: "POST",
                body: rest
            }),
            invalidatesTags: ["Properties"]
        }),
        bookingProperty: build.mutation({
            query: ({id, ...rest})=> ({
                url: `properties/${id}`,
                method: "POST",
                body: rest
            }),
            invalidatesTags: ["Properties"]
        }),
    })
})

export const {
    useGetAllPropertiesQuery,
    useGetPropertyQuery,
    useAddPropertyMutation,
    useLoginMutation,
    useSignupMutation,
    useAddCommentMutation,
    useBookingPropertyMutation
} = propertiesApiSlice;