"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {

  const router = useRouter()
  const { data: session} = useSession()
  const [post, setPost] = useState()

  useEffect(() => {
    const fetchPost = async() => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPost(data);
    }
    if(session?.user.id){
      fetchPost()
    }
  }, [session?.user.id, post]);

  const handleEdit = (post:any) => {
    router.push(`/update-prompt?id=${post._id}`)
  };

  const handleDelete = async (post:any) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = post.filter((item:any) => item._id !== post._id);

        setPost(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={post}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
