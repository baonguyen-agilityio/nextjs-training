"use client";

import { Post } from "@/app/lib/definitions";
import { use } from "react";

export default function BlogList({
  postsPromise,
}: {
  postsPromise: Promise<Post[]>;
}) {
  const posts = use(postsPromise);

  return (
    <ul>
      {posts.map((post: Post, index: number) => (
        <li key={post.id} onClick={() => {}}>
          <span style={{ marginRight: "8px", fontWeight: "bold" }}>
            {index + 1}.
          </span>
          {post.title}
        </li>
      ))}
    </ul>
  );
}
