import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';

interface Props {
  data: {
    name?: string | null;
    price?: number | null;
  };
}

const ProductCard: React.FC<Props> = ({ data }) => {
   return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.text}>{data.price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
  },
  details: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
