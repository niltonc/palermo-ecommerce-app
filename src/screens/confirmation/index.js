import React from 'react';
import { ScrollView} from 'react-native';

import * as Confirm from './styles';

import Button from 'src/components/Button';
import ConfirmationImage from 'src/assets/confirmation';

export default function ConfirmationPage ({ navigation }){
    return(
        <Confirm.Wrapper>
            <Confirm.View>
            <ConfirmationImage/>
            <Confirm.h1> SUCESSO!</Confirm.h1>
            <Confirm.h2>Compra realizada com sucesso, aproveite!</Confirm.h2>
            </Confirm.View>

            <Confirm.ContainerButton>
                <Button onPress={() => navigation.navigate('Home')}>
                    PROSSEGUIR
                </Button>
            </Confirm.ContainerButton>
      </Confirm.Wrapper>
    )
}