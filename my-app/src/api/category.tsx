import instance from './instance';
import { CategoryType } from '../types/category';


export const listCate = () => {
    const url = '/category';
    return instance.get(url);
}
export const removeCate = (_id: string) => {
    const url = `/category/${_id}`;
    return instance.delete(url);
}
export const addCate = (category:CategoryType) => {
    const url = `/category`;
    return instance.post(url, category);
}
export const updateCate = (category: CategoryType) => {
    const url = `/category/${category._id}`;
    return instance.put(url, category);
}
export const readCate = (id: string | undefined) => {
    const url = `/category/${id}`;
    return instance.get(url);
}