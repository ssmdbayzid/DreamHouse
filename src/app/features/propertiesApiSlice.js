import { apiSlice } from "./apiSlice";

const propertiesApiSlice = apiSlice.enhanceEndpoints({addTagTypes: ["Properties", "User"]}).injectEndpoints({
    endpoints: builder => ({
        getAllProperties: builder.query({
            query: ()=>`properties`,
            providesTags: ["Properties"]
        }),
        getProperty: builder.query({
            query: (id)=> `properties/${id}`,
            providesTags: ["Properties"]
        }),
        login: builder.mutation({
            query: (data)=> ({
                url:`auth/login`,
                method: "POST",
                body: data
            })
        }),
        signup: builder.mutation({
            query: (data)=> ({
                url:`auth/register`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),
        getSingleUser: builder.query({
            query: (id)=> `auth/user/${id}`  ,
            providesTags: ["User"]
        }),
        addProperty: builder.mutation({
            query: (data)=> ({
                url: `properties`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Properties"]
        }),
        addComment: builder.mutation({
            query: ({id, ...rest})=> ({
                url: `properties/${id}/comments`,
                method: "POST",
                body: rest
            }),
            invalidatesTags: ["Properties"]
        }),
        bookingProperty: builder.mutation({
            query: ({id, ...rest})=> ({
                url: `properties/${id}`,
                method: "POST",
                body: rest
            }),
            invalidatesTags: ["Properties", "User"]
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
    useBookingPropertyMutation,
    useGetSingleUserQuery,
} = propertiesApiSlice;