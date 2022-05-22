import styled from "styled-components/native";

export const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
    width: 170px;
    height: 293px;
    margin: 19px;
`;
export const Category = styled.Text`
    color: ${props => props.theme.colors.primary};
    display: flex;
    font-weight: 700;
    font-size: 14px;
`;
export const Title = styled.Text`
    color: ${props => props.theme.colors.black};
    justify-content: center;
    display: flex;
    font-weight: 700;
    height: 21px;
    font-size: 16.42px;
`;
export const Description = styled.Text`
    color: ${props => props.theme.colors.gray};
    display: flex;
    font-weight: 500;
    font-size: 10px;
    height:37px;
`;
export const Price = styled.Text`
    color: ${props => props.theme.colors.primary};
    position: absolute;
    display: flex;
    font-weight: 700;
    font-size: 20px;
    
`;
export const Button = styled.TouchableOpacity`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    border-radius: 20px;
    left: 140px;
`;
export const PriceContainer = styled.View`
    flex-direction: row;
    top: 5px;
`;