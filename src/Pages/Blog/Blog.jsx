import MyAwesomeBlog from "./MyAwesomeBlog";
import { useEffect, useState } from "react";

const Blog = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blog.map(myBlog => <MyAwesomeBlog key={myBlog.id} myBlog={myBlog}></MyAwesomeBlog>)
                }
            </div>
        </div>
    );
};

export default Blog;