import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { Container, LinkContainer } from "./styles";
import { ptBR } from "date-fns/locale";
import { PostDataProps } from "../..";

interface PostCardProps {
    post: PostDataProps
}

export function PostCard({ post }: PostCardProps) {
    const { title, body, created_at: createdAt, number } = post

    const formattedDate = formatDistanceToNow(new Date(createdAt), {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <Container>
            <LinkContainer to={`/post/${number}`}>
                <header>
                    <span className="title">{title}</span>
                    <span>{formattedDate}</span>
                </header>
                <p className="text">{body}</p>
            </LinkContainer>
        </Container>
    )
}