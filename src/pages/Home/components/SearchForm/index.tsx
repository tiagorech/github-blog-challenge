import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";

import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchFormProps {
    amountOfPost: number
    onFetchPosts: (query: string) => void
}

const searchFormSchema = zod.object({
    query: zod.string()
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

export function SearchForm({ amountOfPost, onFetchPosts }: SearchFormProps) {
    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    })

    function handleSearchForPosts(data: SearchFormInput) {
        onFetchPosts(data.query)
    }

    return (
        <SearchFormContainer onChange={handleSubmit(handleSearchForPosts)}>
            <header>
                <span className="title">Publicações</span>
                <span className="count-publication">
                    {amountOfPost > 1 ? `${amountOfPost} publicações` : `${amountOfPost} publicação`}
                </span>
            </header>

            <input
                type="text"
                placeholder="Buscar conteúdo"
                {...register('query')}    
            />
        </SearchFormContainer>
    )
}