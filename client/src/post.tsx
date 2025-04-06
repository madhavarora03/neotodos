import {Post} from "@/types/interfaces.ts";

export default function Posts({posts}: {posts: Post[]}){
    console.log(posts)
    return (
        <h1>hi there</h1>
    )
}