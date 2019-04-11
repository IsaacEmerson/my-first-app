import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';
import styles from '../assets/styles/main';

export default class Main extends Component {

  static navigationOptions = {
    title: "Lista de Produtos",
  }

  state = {
    productInfo: {},
    docs: [],
    page: 1,
  };

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productInfo } = response.data;
    this.setState({ docs: [... this.state.docs, ...docs], productInfo, page });
  };

  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>

      <TouchableOpacity 
        style={styles.productButton} 
        onPress={()=>{
          this.props.navigation.navigate("Product", { product: item })
        }}
      >

        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  loadMore = () =>{
    const { page, productInfo } = this.state;
    if(page == productInfo.pages) return;
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}
