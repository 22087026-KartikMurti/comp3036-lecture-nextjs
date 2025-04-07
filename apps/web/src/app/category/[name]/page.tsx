import { posts } from '@repo/db/data';
import { toUrlPath } from '@repo/utils/url';
import Link from 'next/link';

export default async function Page({ params }: { params: { name: string } }) {
    const { name } = await params;

    const filteredPosts = posts.filter((post) => {
        return toUrlPath(post.category) === name && post.active;
    });

    console.log('Filtered posts for category', name, ':', filteredPosts);

    return (
        <>
            <h1>Category: {name} </h1>
            <hr />

            <ul>
                {filteredPosts.map((post) => (
                    <li key={post.id}>
                        <h2 style={{ fontWeight: "bold"}}>
                            <Link href={`/post/${post.urlId}`}>{post.title}</Link>
                        </h2>

                        <div>{post.description}</div>
                        <div>{post.category}</div>
                        <div>{post.date.toLocaleDateString("en-US")}</div>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
}