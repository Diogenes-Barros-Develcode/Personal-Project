import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import RNPrint from 'react-native-print';
import {ImageParams} from '../../@types/navigation';
import {Background} from '../../components/Background';

export function Activities() {
  const route = useRoute();
  const theme = route.params as ImageParams;

  async function printRemotePDF() {
    await RNPrint.print({
      filePath: theme.imageToColor,
    });
  }

  return (
    <Background>
      <View style={styles.container}>
        <Button onPress={printRemotePDF} title="Print Remote PDF" />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
