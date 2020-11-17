import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
    margin-bottom: 40px;
    @media (max-width: 600px) {
        margin-bottom: 0;
    }
`;

export const Inner = styled.div`
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    max-width: 815px;
    width: 100%;
    margin: auto;
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 28px;
    }
`;

export const Item = styled.div`
    color: white;
    margin: auto;
    width: 100%;
    max-width: 815px;

    &:first-of-type {
        margin-top: 1em;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    margin-top: 10px;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.8em 2.2em 0.8em 1.2em;
    white-space: pre-wrap;
    user-select: none;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;
