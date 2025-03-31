import { useEffect, useState } from "react";
import { ProfileCard } from "../../components/ProfileCard";
import { PostCard } from "./components/PostCard";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PostCardContainer } from "./styles";
import { api } from "../../lib/axios";

export interface PostDataProps {
    title: string
    body: string
    created_at: string
    number: string
}

export function Home() {
    const [posts, setPosts] = useState<PostDataProps[]>([])

    async function fetchPosts(query?: string | null) {
        try {
            const response = await api.get(
                `search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`
            )
            setPosts(response.data.items)
        } catch (error) {
            console.error("Erro ao buscar os posts:", error)
        }
    }

    useEffect(() => {
        fetchPosts('')
    }, [])

    return (
        <HomeContainer>
            <ProfileCard />

            <section>

                <SearchForm amountOfPost={posts.length} onFetchPosts={fetchPosts} />

                <PostCardContainer>
                    {posts.map((post) => (
                        <PostCard key={post.number} post={post} />
                    ))}
                </PostCardContainer>

            </section>
        </HomeContainer>
    )
}