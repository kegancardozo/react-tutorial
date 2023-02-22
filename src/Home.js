import BlogList from './BlogList';
import { useState } from "react";
const Home = () => {

const [blogs, setBlogs] = useState([
    {title: "Guess how to mix coffee",body: "Yolo first blog",author: "mario", id:1},
    {title: "You MUST READ THIS POST",body: "Yolo second blog",author: "Kegan", id:2},
    {title: "OMG 10 ways to die",body:"Yolo third blog",author: "Adam", id:3}
])

    return ( 
        <div className="content">
            <h2>Homepage</h2>
           <BlogList blogs={blogs} title="All Blogs" />

        </div>
     );
}
 
export default Home;