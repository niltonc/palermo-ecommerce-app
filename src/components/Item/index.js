import React, { useState, useEffect } from "react";
import { FlatList, Image} from "react-native";

import Products from 'src/services/products';

import * as NewItem from './styles';

import ItemImage from 'src/assets/item.png';
import AddItemImage from 'src/assets/add_item';

export default function ItemComponent(){

  const newProducts = new Products();
  const [product, setProduct] = useState([]);

  useEffect(() => {
      newProducts.products().then((response) => setProduct(response.data)).catch(erro => console.log(erro));
    }, []);

  const renderItem = ({ item }) => {
      return (
        <NewItem.Wrapper>
          <Image source={ItemImage}/>
          
          <NewItem.Category>
          {item?.category}
          </NewItem.Category>

          <NewItem.Title>
          {item?.title}
          </NewItem.Title>

          <NewItem.Description>
          {item?.description}
          </NewItem.Description>

          <NewItem.PriceContainer>
          <NewItem.Price>
          ${item?.price}
          </NewItem.Price>

          <NewItem.Button>
          <AddItemImage/>
          </NewItem.Button>
          
          </NewItem.PriceContainer>
        </NewItem.Wrapper>
    );
  };

  return (
      <FlatList
        horizontal
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
  );
};