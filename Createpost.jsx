import { useContext, useRef } from "react";

import { PostList } from "../store/Post-list-store";

function Createpost(){
 const{addPost}= useContext(PostList);

   const useridElement= useRef();
   const postTitleElement= useRef();
   const postBodyElement= useRef();
   const reactionElement= useRef();
   const tagsElement= useRef();


   const handleSumbit=(event)=>{
event.preventDefault();
const userid=useridElement.current.value;
const postTitle=postTitleElement.current.value;
const postBody=postBodyElement.current.value;   
const reaction=reactionElement.current.value; 
const tags=tagsElement.current.value.split(" ") 


 useridElement.current.value="";
  postTitleElement.current.value="";
 postBodyElement.current.value="";   
 reactionElement.current.value=""; 
tagsElement.current.value="";







addPost(userid,postTitle,postBody,reaction,tags);
}

 return (<form className="create-post" onSubmit={handleSumbit}>

<div className="mb-3">
    <label htmlfor="userid" className="form-label">Enter your UserId </label>
    <textarea type="text"  ref={useridElement} className="form-control" id="userid"  placeholder="Your user id"/>
    
  </div>

  <div className="mb-3">
    <label htmlfor="title" className="form-label">Post title </label>
    <input type="text"  ref={postTitleElement}className="form-control" id="title"  placeholder="How are u feeling today"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="body" className="form-label">Post Content </label>
    <textarea type="text" ref={postBodyElement}  rows="4" className="form-control" id="body"  placeholder="Tell us more about it"/>
  </div>

  <div className="mb-3">
    <label htmlfor="reaction" className="form-label">Number of Reactions </label>
    <textarea type="text"  ref={reactionElement} className="form-control" id="reaction"  placeholder="How many people reacted to this Post"/>
    
  </div>
  <div className="mb-3">
    <label htmlfor="tags" className="form-label">Enter your Hashtags here</label>
    <textarea type="text"  ref={tagsElement} className="form-control" id="tags"  placeholder="Please enter your tags using space"/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
)
}

export default Createpost;