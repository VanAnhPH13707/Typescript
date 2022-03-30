import instance from "./instance";
import { UserType } from "../types/user";
export const signup = (user: UserType) =>{
    const url ='/signup';
    return instance.post(url, user);
}
export const signin = (user: UserType) =>{
    const url ='/signin';
    return instance.post(url, user);
}