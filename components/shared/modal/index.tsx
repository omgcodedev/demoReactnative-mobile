import React, { useState } from 'react';
import { Modal, StyleSheet, Pressable, View } from 'react-native';
import { ModalComponentProps } from './types';

const ModalComponent = ({
  modalVisible,
  setModalVisible,
  children,
}: ModalComponentProps) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Pressable
          style={styles.modalView}
          onPress={(e) => e.stopPropagation()}
        >
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '100%',
  },
});

export default ModalComponent;
