import BlogList from "@/app/ui/blog/blog-list";
import { Suspense } from "react";
import { getBlog } from "@/app/lib/actions";

export default function Page() {
    const postsPromise = getBlog();
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-12">Blog</h1>
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <BlogList postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
}
