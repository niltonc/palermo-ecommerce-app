import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${props => props.theme.background};
    flex: 1;
`;
export const CartButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 19px;
    top: 30px;
`;
export const Text = styled.Text`
    color: ${props => props.theme.colors.gray};
    display: flex;
    align-items: center;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    width: 333px;
    height: 14px;
`;
export const ContainerTitle = styled.View`
    background-color: #1221;
    
`;
export const Title = styled.Text`
    color: ${props => props.theme.colors.black};
    display: flex;
    margin-left: 19px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin-top: 50px;
`;
export const Container = styled.View`
    align-items: center;
    top: 70px;
`;
export const TotalContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-color: #EBEBED;
    height: 38px;
    margin-top: 3%;
`;
export const Total = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    right: 130px;
`;
export const TotalPrice = styled(Total)`
    right: 0px;
    left: 125px;
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
