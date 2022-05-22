import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: #8775FE;
    align-items:center;
    flex: 1;
`;
export const View = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    width: 375px;
    height: 300px;
    margin-top: 180px;
`;
export const h1 = styled.Text`
    display: flex;
    align-items: center;
    text-align: center;
    font-style: normal;
    color: #fff;
    font-weight: 700;
    font-size: 22px;
    top: 20px;
`;
export const h2 = styled(h1)`
    font-size: 15px;
`;
export const ContainerButton = styled.View`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 600px;
`;