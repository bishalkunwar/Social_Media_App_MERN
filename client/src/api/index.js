import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});
// const url = 'http://localhost:5000/posts';

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const fetchPosts = () => API.get(url);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost);
export const likePost = (id)=> API.patch(`/posts/${id}/likePost`);
export const deletePost = (id)=> API.delete(`/posts/${id}`);


export const signUp = (formData) => API.post('/user/signUp', formData);
export const signIn = (formData) => API.post('/user/signUp', formData);