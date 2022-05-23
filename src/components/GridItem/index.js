import React, { useState, useEffect } from "react";
import { FlatList, Image, SafeAreaView} from "react-native";

import Products from 'src/services/products';

import * as GridItem from './styles';

import ItemImage from 'src/assets/grid_item.png';
import AddItemImage from 'src/assets/add_item';

export default function GridItemComponent(){

  const newProducts = new Products();
  const [product, setProduct] = useState([]);

  useEffect(() => {
      newProducts.products().then((response) => setProduct(response.data)).catch(erro => console.log(erro));
    }, []);

  const renderItem = ({ item }) => {
      return (
        <GridItem.ContainerWrapper>
          
        <GridItem.Wrapper>
        <GridItem.ImageContainer>
        <Image source={ItemImage}/>
        <GridItem.Button>
        <AddItemImage/>
        </GridItem.Button>
        </GridItem.ImageContainer>

        <GridItem.Category>
        {item?.category}
        </GridItem.Category>

        <GridItem.Title>
        {item?.title}
        </GridItem.Title>

        <GridItem.Price>
        ${item?.price}
        </GridItem.Price>

        </GridItem.Wrapper>
        </GridItem.ContainerWrapper>
    );
  };
  
  const columns = 2; 
  return (
  <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        numColumns= {columns}
        nestedScrollEnabled={true}
      />
      </SafeAreaView>
  );
};