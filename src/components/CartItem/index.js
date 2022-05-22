import React, { useState, useEffect } from "react";
import { FlatList, Image} from "react-native";

import Products from 'src/services/products';

import * as CartItem from './styles';

import CartImage from 'src/assets/cart_item.png';
import Add from 'src/assets/add'
import Min from 'src/assets/min';

export default function CartItemComponent(){

  const newProducts = new Products();
  const [product, setProduct] = useState([]);

  useEffect(() => {
      newProducts.products().then((response) => setProduct(response.data)).catch(erro => console.log(erro));
    }, []);

  const renderItem = ({ item }) => {
      return (
        <CartItem.View>
            <CartItem.Image>
            <Image source={CartImage}/>
            </CartItem.Image>

        <CartItem.Container>
        <CartItem.Title>
        {item?.title}
        </CartItem.Title>
        <CartItem.Price>
            1 x ${item?.price}
        </CartItem.Price>
        </CartItem.Container>
        
        <CartItem.ButtonView>
        <CartItem.ButtonMin>
            <Min/>
        </CartItem.ButtonMin>
        
        <CartItem.ButtonAdd>
            <Add/>
        </CartItem.ButtonAdd>
        </CartItem.ButtonView>
        </CartItem.View>
    );
  };

  return (
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      />
  );
};