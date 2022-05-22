import styled, { css } from 'styled-components/native';

export const View = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    border-radius: 7px;
    width: 65px;
    height: 25px;
    margin-right: 5px;
    ${props => {
        if (props.type === 'selected')
        return `
            background-color: ${props.theme.colors.primary};
        `
        if (props.type === 'notselected')
        return `
            background-color: ${props.theme.colors.white};
            border-color: ${props.theme.colors.gray};
            border-width: 2px;
        `}}
`;

export const Text = styled.Text`
    display: flex;
    text-align:center;
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    width: 45px;
    ${props => {
        if (props.type === 'selected')
        return `
            color: ${props.theme.colors.white};
        `
        if (props.type === 'notselected')
        return `
            color: ${props.theme.colors.gray};
        `}}
`;