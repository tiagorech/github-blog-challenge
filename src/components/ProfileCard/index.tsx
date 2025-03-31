
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from "react-icons/fa6";
import { ProfileContainer, ProfileContent } from "./styles";
import { useProfile } from "../../hooks/useProfile";


export function ProfileCard() {
    const profile = useProfile()

    if(profile === null){
        throw new Error('Erro ao carregar usuário');
    }

    const {name, bio, login, company, followers, avatar_url, html_url} = profile;

    return (
        <ProfileContainer>
            <img className="avatar" src={avatar_url} alt="" />
            <ProfileContent>
                <header className="name">
                    <span>{name ?? "Nome não encontrado"}</span>
                    <a href={html_url}>
                        <span>GITHUB</span>
                        <FaArrowUpRightFromSquare size={12} />
                    </a>
                </header>

                <main>
                    <p className="bio">{bio}</p>
                </main>

                <footer>
                    <ul className="info">
                        <li className="username">
                            <FaGithub size={18} />
                            {login ?? "Login não encontrado"}
                        </li>
                        <li className="username">
                            <FaBuilding size={18} />
                            {company ?? "Não definido"}
                        </li>
                        <li className="username">
                            <FaUserGroup size={18} />
                            {
                            followers
                            }
                        </li>
                    </ul>
                </footer>
            </ProfileContent>
        </ProfileContainer>
    )
}