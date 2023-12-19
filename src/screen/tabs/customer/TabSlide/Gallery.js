import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GalleryDataList from '../../../../components/GalleryDataList';
import {GalleryData} from '../../../../helper/dummyData';

const Gallery = () => {
  return (
    <View style={styles.container}>
      <GalleryDataList DATA={GalleryData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
});

export default Gallery;
