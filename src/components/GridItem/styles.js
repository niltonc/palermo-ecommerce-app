import styled from "styled-components/native";

export const ContainerWrapper = styled.View`
   flex: 1;
   display: flex;
`; 
export const Wrapper = styled.View`
    position: relative;
    display: flex;
    width: 170px;
    height: 200px;
    margin: 7px;
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
export const Price = styled.Text`
    color: ${props => props.theme.colors.primary};
    display: flex;
    font-weight: 700;
    font-size: 20px;
`;
export const Button = styled.TouchableOpacity`
    box-sizing: border-box;
    display: flex;
    border-radius: 20px;
    gap: 10px;
    left: 59px;
    bottom: 30px;
`;
export const ImageContainer = styled.View`
    flex-direction: column;
    align-items: center;
    height: 145px;
    width: 155px;
`;