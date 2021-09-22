import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Product, useGetProductsQuery } from '../common/generated/graphql';

import ProductCard from '../common/components/ProductCard';

const Home = () => {
  const { data, loading } = useGetProductsQuery();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>GraphCMS Demo App</Text>
      <FlatList
        data={data?.products}
        renderItem={({ item }) => <ProductCard data={item as Product} />}
        contentContainerStyle={styles.productList}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  productList: {
    padding: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
});
