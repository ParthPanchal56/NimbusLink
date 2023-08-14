import axios from "axios";


export const createPost = async (type, user, text, images) => {
    try {
        const { data } = await axios.post(`http://localhost:5000/createPost`, {
            type,
            user,
            text,
            images
        });
        return "Post created successfully";


    } catch (error) {
        return error.response.data.message;
    }
};