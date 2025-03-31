import { styled } from 'styled-components';
import BackgroundImg from '../../assets/bg_cover.svg';

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 29vh;
`

export const HeaderContent = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 4rem;
    padding-bottom: 8.375rem;

    background: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;

    img {
        width: 9.25rem;
        height: 6.125rem;
    }
`


