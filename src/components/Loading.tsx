/** @format */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { Spinner } from './base/Spinner';

type PropsType = React.ComponentProps<typeof Spinner> & {
  cover?: boolean;
  fullscreen?: boolean;
  modalVisible?: boolean;
};

const Loading: React.FC<PropsType> = React.memo(
  ({ cover = false, fullscreen = false, modalVisible = true, ...res }) => {
    if (cover) {
      return (
        <View style={styles.coverOverlay}>
          <Spinner {...res} />
        </View>
      );
    } else if (fullscreen) {
      return (
        <Modal
          isVisible={modalVisible}
          backdropOpacity={0.3}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          useNativeDriver={true}
        >
          <View style={styles.modalInner}>
            <Spinner {...res} />
          </View>
        </Modal>
      );
    } else {
      return <Spinner {...res} />;
    }
  },
);

const styles = StyleSheet.create({
  modalInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.3)',
    zIndex: 9999,
  },
});

export { Loading };
