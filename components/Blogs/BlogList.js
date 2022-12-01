import React from "react";
import Blog from "./Blog";


const BlogList = (props) => {
    return (
        <ul style={{padding: 0, margin:0}}>

            {props.blogs.map((blog) => (
                <Blog 
                key ={blog.id}
                id = {blog.id}
                titleBean = {blog.titleBean}
                aroma = {blog.aroma}
                body= {blog.body}
                acidity = {blog.acidity}
                experience = {blog.experience}
                flavor = {blog.flavor}
                dateTasted = {blog.dateTasted}
                brewMethod = {blog.brewMethod}
                />
                ))}
                

        </ul>
    );
};

export default BlogList;