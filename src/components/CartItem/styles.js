import styled from 'styled-components/native';

export const View = styled.View`
    background-color: ${props => props.theme.colors.secundary};
    display: flex;
    flex-direction: row;
    margin: 7px;
    padding: 10px;
    border-radius: 12px;
    width: 342px;
    height: 72px;
    top: 20px;
    left: 25px;
`;
export const Title = styled.Text`
    color: ${props => props.theme.colors.black};
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
export const Container = styled.View`
    flex-direction: column;
    width: 160px;
    left: 60px;
`;
export const Image = styled.View`
    position: absolute;
    border-radius: 10px;
    right: 135px;
    top: 9px;
`;
export const ButtonMin = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.white};
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    border: 1px solid #CCCCCC;
    width: 36px;
    height: 23px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
`;
export const ButtonAdd = styled(ButtonMin)`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
`;
export const ButtonView = styled.View`
    flex-direction: row;
    align-items: center;
    left: 80px
`;