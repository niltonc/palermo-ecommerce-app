import React from 'react';
import { ScrollView} from 'react-native';

import * as Home from './styles';

import Item from '@components/Item'
import GridItem from '@components/GridItem';
import FilterTag from '@components/FilterTag';
import Button from '@components/Button';
import BagIcon from 'src/assets/bag'

export default function HomePage ({ navigation }){
    
    return(
        <Home.Wrapper>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <Home.TitleContainer>
            <Home.Title>Produtos</Home.Title>
            <Home.ButtonBag onPress={() => navigation.navigate('Cart')}>
            <BagIcon/>
            </Home.ButtonBag>
            </Home.TitleContainer>

            <Home.TextGray>
            FILTRAR CATEGORIA
            </Home.TextGray>

            <Home.ContainerTag>
            <FilterTag/>
            </Home.ContainerTag>
          
           <Home.News>
               Novidades
           </Home.News>
           <Home.ContainerNews>
           <Item/>
           </Home.ContainerNews>
        

           <Home.List>
               Listagem
           </Home.List>

        <Home.ContainerGrid>
           <GridItem/>
        </Home.ContainerGrid>
           
        <Home.ContainerButton>
        <Button onPress={() => navigation.navigate('Cart')}>
            IR PARA CARRINHO
        </Button>
        </Home.ContainerButton>

        </ScrollView>
      </Home.Wrapper>
    )
}