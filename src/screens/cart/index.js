import React from 'react';
import { ScrollView } from 'react-native';
import * as Cart from './styles';


import CartItem from 'src/components/CartItem';
import Button from 'src/components/Button'
import Arrow from 'src/assets/arrow';

export default function CartPage ({ navigation }){
    return(
        <Cart.Wrapper>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        
            <Cart.CartButton onPress={() => navigation.navigate('Home')}>
                <Arrow/>
                <Cart.Text>
                    CARRINHO
                </Cart.Text>
            </Cart.CartButton>

            <Cart.Title>
                Meu Carrinho    
            </Cart.Title>

            {/* <CartItem/> */}

            <Cart.TotalContainer>        
            <Cart.Total>
                Total: 
            </Cart.Total>
            <Cart.TotalPrice>
                $549.75 
            </Cart.TotalPrice>
            </Cart.TotalContainer>
            
            <Cart.ContainerButton>
            <Button onPress={() => navigation.navigate('Confirmation')}>
                FINALIZAR COMPRA
            </Button>
            </Cart.ContainerButton>
     
         </ScrollView>
        </Cart.Wrapper>
    )
}