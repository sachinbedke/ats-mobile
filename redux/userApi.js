import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { auth, db } from "./config"
import { signInWithEmailAndPassword } from "firebase/auth"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            getAllJobs: builder.query({
                queryFn: async () => {
                    const collectionRef = collection(db, "jobs")
                    const { docs } = await getDocs(collectionRef)
                    const reuslt = docs.map(item => {
                        return { ...item.data(), id: item.id }
                    })

                    return { data: reuslt }

                },
                providesTags: ["user"]
            }),
            getAllUsers: builder.query({
                queryFn: async () => {
                    const collectionRef = collection(db, "users")
                    const { docs } = await getDocs(collectionRef)
                    const reuslt = docs.map(item => {
                        return { ...item.data(), id: item.id }
                    })

                    return { data: reuslt }

                },
                providesTags: ["user"]
            }),
            getProfile: builder.query({
                queryFn: async uid => {
                    const collectionRef = collection(db, "users")
                    const q = query(collectionRef, where("uid", "==", uid))
                    const { docs } = await getDocs(q)
                    const reuslt = docs.map(item => {
                        return { ...item.data(), id: item.id }
                    })

                    return { data: reuslt }

                },
                providesTags: ["user"]
            }),
            login: builder.mutation({
                queryFn: async userData => {
                    try {
                        const { user } = await signInWithEmailAndPassword(auth, userData.email, userData.password)
                        console.warn(user.email, user.uid)
                        return {
                            data: {
                                email: user.email,
                                uid: user.uid
                            }

                        }
                    } catch (error) {
                        return { error: error.message || "Inavalid Creadential" }
                    }
                },
                providesTags: ["user"]
            }),


        }
    }
})

export const { useGetAllJobsQuery, useLoginMutation, useGetProfileQuery, useGetAllUsersQuery } = userApi
