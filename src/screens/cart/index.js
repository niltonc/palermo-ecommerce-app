import React from 'react';
import { ScrollView } from 'react-native';
import * as Cart from './styles';

import CartItem from 'src/components/CartItem';
import Button from 'src/components/Button';

import Arrow from 'src/assets/arrow';
import CartImage from 'src/assets/cart_image';

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

            <Cart.TextContainer>
            <CartImage />
            <Cart.TextBold>
                NENHUM ITEM ADICIONADO NO CARRINHO.
            </Cart.TextBold>
            </Cart.TextContainer>

            {/* <CartItem/> */}

            {/* <Cart.TotalContainer>        
            <Cart.Total>
                Total: 
            </Cart.Total>
            <Cart.TotalPrice>
                $549.75 
            </Cart.TotalPrice>
            </Cart.TotalContainer> */}
            
            <Cart.ContainerButton>
            <Button onPress={() => navigation.navigate('Confirmation')}>
                ADICIONAR ITENS
            </Button>
            </Cart.ContainerButton>
     
         </ScrollView>
        </Cart.Wrapper>
    )
}