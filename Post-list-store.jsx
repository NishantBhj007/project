import {  createContext, useReducer } from "react";

 export const PostList=createContext({
postList:[],
addPost:()=>{},
deletePost:()=>{},
});


 
 const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;
  if(action.type==='DELETE_POST'){
newPostList=currPostList.filter((post)=> post.id!==action.payload.postid)
  }else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currPostList]


  }
  return newPostList;
 }



 const PostListProvider=({children})=>{
const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);

const addPost=(userid,postTitle,postBody,reaction,tags)=>{
 dispatchPostList({
  type:'ADD_POST',
  payload:{
 id:new Date().getTime().toString(),
title:postTitle,
body:postBody,
reaction:reaction,
userId:userid,
tags:tags,
  }
 })
  
};



const deletePost=(postid)=>{
 dispatchPostList({
type:"DELETE_POST",
payload:{
 postid,
}

 })
 
};



return (
<PostList.Provider value={{postList, addPost,deletePost}}>
 {children}
 </PostList.Provider>
 )}

const DEFAULT_POST_LIST=[
 {
id:"1",
title:'going to Mumbai',
body:'Hi friends I am going to Mumbai , to enjoy my vacations,',
reaction:2,
userId:'user-9',
tags:['vacation','Mumbai','enjoying']
},
{id:"2",
 title:'getting a job',
 body:'I have got a job in a company as a software developer.',
 reaction:15,
 userId:'user-12',
 tags:['employment','carrer']
 
 }]

 export default PostListProvider;