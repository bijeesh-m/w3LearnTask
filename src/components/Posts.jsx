import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
    const [value, setValue] = useState(false);
    const [otherValue, setOtherValue] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
        };
        fetchPosts();
    }, [value]);

    const handleRenderComponent = () => {
        setValue((prev) => !prev);
    };
    const handleChangeOtherState = () => {
        setOtherValue((prev) => !prev);
    };

    return (
        <div>
            <button className=" border rounded-2xl p-2" onClick={handleRenderComponent}>
                Render component
            </button>
            <button className=" border rounded-2xl p-2" onClick={handleChangeOtherState}>
                Change other state
            </button>
            <div className=" p-5  grid grid-cols-5 gap-3">
                {posts.map((post) => {
                    return (
                        <div key={post.id} className=" border p-3 ">
                            <h1 className=" font-black">{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Posts;
