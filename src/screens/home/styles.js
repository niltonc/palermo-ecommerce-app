import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${props => props.theme.background};
    flex: 1;
`;
export const TitleContainer = styled.View`
    flex-direction: row;
    margin: 19px;
    top: 30px;
`;
export const Title = styled.Text`
    color: ${props => props.theme.colors.black};
    font-size: 20px;
    font-weight: 700;
    width: 330px;
`;
export const ButtonBag = styled.TouchableOpacity``;
export const TextGray = styled.Text`
    color: ${props => props.theme.colors.gray};
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 9px;
    margin-left: 19px;
    top: 20px;
`;
export const ContainerTag = styled.View`
    margin-left: 19px;
    top: 25px;
`;
export const News = styled.Text`
    color: ${props => props.theme.colors.black};
    display: flex;
    margin-left: 19px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    top: 45px;
`;
export const ContainerNews = styled.View`
    top: 40px;
`;
export const List = styled(News)`
    top: 30px;
`;
export const ContainerGrid = styled.View`
    top: 30px;
`;
export const ContainerButton = styled.View`
    background-color: ${props => props.theme.colors.white};
    justify-content: center;
    align-items: center;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    height: 108px;
    box-shadow: 0 0 10px black;
`;
