import BlogList from './BlogList';
import { useState, useEffect } from "react";

const Home = () => {

const [blogs, setBlogs] = useState([
    {title: "Guess how to mix coffee",body: "Yolo first blog",author: "mario", id:1},
    {title: "You MUST READ THIS POST",body: "Yolo second blog",author: "Kegan", id:2},
    {title: "OMG 10 ways to die",body:"Yolo third blog",author: "Adam", id:3}
])

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
} 

// Good for fetching data
useEffect(()=> {
    console.log('use effect ran')
},[] // varaibles can be added here as a dependency
)

    return ( 
        <div className="content">
            <h2>Homepage</h2>
           <BlogList handleDelete={handleDelete} blogs={blogs} title="All Blogs" />
           {/* <BlogList blogs={blogs.filter((blog)=> blog["author"] === 'Kegan')} title="Marios Blogs" /> */}

        </div>
     );
}
 
export default Home;