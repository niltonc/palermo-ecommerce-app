import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import Products from 'src/services/products';

import * as Button from './styles';

export default function FilterTagComponent(){

  const newProducts = new Products();
  const [product, setProduct] = useState([]);

  useEffect(() => {
      newProducts.products().then((response) => setProduct(response.data)).catch(erro => console.log(erro));
    }, []);

  const renderItem = ({ item, onPress, category, ...rest }) => {
      return (
      <Button.View type={'selected'} onPress={onPress} {...rest}>
        <Button.Text type={'selected'}>{item?.category}</Button.Text>
      </Button.View>
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
