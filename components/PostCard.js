import Link from "next/link"

export default function PostCard({ post }) {
    return (
        <Link href="/" className={"card"}>
            <h3>{post.title} &rarr;</h3>
        </Link>
    )
}