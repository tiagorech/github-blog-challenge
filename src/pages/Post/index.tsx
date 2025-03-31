import { NavLink, useParams } from "react-router-dom";
import { Container, LinkReturn, PostContainer, PostContent, PostInfoContent } from "./styles";
import { FaAngleLeft, FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useProfile } from "../../hooks/useProfile";

interface PostInfo {
    title: string
    comments: number
    createdAt: string
    githubUsername?: string
    url: string
    body: string
}

export function Post() {
    const profile = useProfile()
    const [postInfo, setPostInfo] = useState<PostInfo | null>(null)
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await api.get(`repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`)
                const {
                    title,
                    comments,
                    created_at: createdAt,
                    html_url: url,
                    body, 
                } = response.data
                setPostInfo({
                    title,
                    comments,
                    createdAt: formatDistanceToNow(new Date(createdAt), {
                        locale: ptBR,
                        addSuffix: true
                    }),
                    githubUsername: profile?.login,
                    url: url,
                    body,
                })
            } catch (error) {
                console.error("Erro ao buscar dados do post:", error)
            }
        }
        fetchPost()
    } ,[id])

    return (
        <Container>
            <PostContainer>
                <PostContent>
                    <header>
                        <LinkReturn>
                            <NavLink to="/">
                                <FaAngleLeft size={12} />
                                Voltar  
                            </NavLink>    
                            <a href={postInfo?.url} target="_blank">
                                <span>VER NO GITHUB</span>
                                <FaArrowUpRightFromSquare size={12} />
                            </a>
                        </LinkReturn>
                    </header>
                    
                    <main>
                        <h1 className="title"> {postInfo?.title} </h1>
                    </main>

                    <footer>
                    <ul className="info">
                        <li className="username">
                            <FaGithub size={18} />
                            {postInfo?.githubUsername ?? "Login não encontrado"}
                        </li>
                        <li className="username">
                            <FaBuilding size={18} />
                            {postInfo?.createdAt ?? "Não definido"}
                        </li>
                        <li className="username">
                            <FaUserGroup size={18} />
                            {`${postInfo?.comments} comentários`}
                        </li>
                    </ul>
                    </footer>
                </PostContent>
            </PostContainer>

            <PostInfoContent>
                <p>{postInfo?.body}</p>
            </PostInfoContent>
        </Container>
    )
}