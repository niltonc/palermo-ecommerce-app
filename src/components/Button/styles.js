import styled from 'styled-components/native';

export const View = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.purple};
    box-shadow: rgba(194, 193, 248, 0.3) 0px 7px 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 37px;
    width: 317px;
    height: 50px;
`;

export const Text = styled.Text`
    color: ${props => props.theme.colors.white};
    display: flex;
    text-align:center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    width: 150px;
`;