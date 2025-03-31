import styled from "styled-components";
import { stylesStandard } from "../../styles/stylesStandart";

export const ProfileContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    border-radius: 10px;
    margin-top: -9rem;

    display: flex;
    align-items: center;

    background-color: ${props => props.theme['base-profile']};

    img {
        height: 9.25rem;
        width: 9.25rem;
        border-radius: 8px;
    }

`
export const ProfileContent = styled.div`
    padding: 2rem 2.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 0.5rem;

    header {
        display: flex;
        justify-content: space-between;
        color: ${props => props.theme['base-title']};
        ${stylesStandard.fonts.titleL}

        a {
            display: flex;
            height: min-content;
            align-items: center;
            justify-content: center;
            gap: 8px;

            ${stylesStandard.fonts.link}
            color: ${(props) => props.theme.blue};
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            padding-bottom: 2px;

            &:hover {
                border-bottom-color: ${(props) => props.theme.blue};
            }
        }
    }

    main, .bio {
        ${stylesStandard.fonts.textM}
        color: ${props => props.theme['base-text']};
    }

    footer, .info {
        list-style: none;

        margin-top: 1rem;

        display: flex;
        align-items: center;
        gap: 1.5rem;

        .username {
            ${stylesStandard.fonts.textM}
            color: ${props => props.theme['base-subtitle']};

            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
`
