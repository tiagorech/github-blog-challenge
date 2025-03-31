import styled from "styled-components";
import { stylesStandard } from "../../styles/stylesStandart";

export const Container = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const PostContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    border-radius: 10px;
    margin-top: -9rem;

    display: flex;
    align-items: center;

    background-color: ${props => props.theme['base-profile']};
`

export const PostContent = styled.div`
    padding: 2rem 2.5rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    main, .title {
        ${stylesStandard.fonts.titleL}
        color: ${(props) => props.theme['base-title']};
    }

    footer, .info {
        list-style: none;

        margin-top: 0.5rem;

        display: flex;
        align-items: center;
        gap: 1.5rem;

        .username {
            ${stylesStandard.fonts.textM}
            color: ${(props) => props.theme['base-span']};

            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
`

export const PostInfoContent = styled.section`
    padding: 2.5rem 2rem;

    display: flex;
    flex-direction: column;

    color: ${(props) => props.theme['base-text']};
    ${stylesStandard.fonts.textM}
    
`

export const LinkReturn = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
`