'use client'

import { useStorage } from "./store"

export function getGlobalUser(){
const userInfo = useStorage((state)=> state.user)
return userInfo
}