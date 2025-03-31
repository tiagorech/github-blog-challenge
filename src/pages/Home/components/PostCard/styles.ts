import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { stylesStandard } from "../../../../styles/stylesStandart";

export const LinkContainer = styled(NavLink)`
    text-decoration: none;

    color: ${props => props.theme['base-title']};
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: block;
`

export const Container = styled.div`
    background-color: ${props => props.theme['base-post']};

    height: 100%;
    border-radius: 10px;
    border: 2px solid transparent;

    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        border: 2px solid ${props => props.theme['base-label']};
    }

    header {
        display: flex;
        align-items: first baseline;
        justify-content: space-between;

        .title {
            max-width: 283px;
            color: ${props => props.theme['base-title']};

            ${stylesStandard.fonts.titleL}
        }

        span {
            ${stylesStandard.fonts.textS}
            color: ${props => props.theme['base-span']};
        }
    }

    .text {
        margin-top: 1.25rem;

        ${stylesStandard.fonts.textM}
        color: ${props => props.theme['base-text']};

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`