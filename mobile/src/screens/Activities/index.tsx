import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {Button, StyleSheet, Platform, View} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import {ImageParams} from '../../@types/navigation';
import {Background} from '../../components/Background';

interface Props {
  image: string;
}

export function Activities() {
  const route = useRoute();
  const theme = route.params as ImageParams;
  const [images, setImages] = useState<Props>({} as Props);

  useEffect(() => {
    try {
      axios(
        'http://172.22.19.61:3333/users/951c21f7-3ad7-4fc7-a4e9-9d55c37fe2b5/imagetocolor',
      )
        .then()
        .then(response => {
          setImages(response.data);
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function printHTML() {
    await RNPrint.print({
      html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>',
    });
  }

  async function printPDF() {
    const results = await RNHTMLtoPDF.convert({
      html: '<h1>Custom converted PDF Document</h1>',
      fileName: 'test',
      base64: true,
    });

    await RNPrint.print({filePath: results.filePath});
  }

  async function printRemotePDF() {
    await RNPrint.print({
      filePath:
        'https://www.desenhosimprimir.com.br/pdf/desenhos-de-dinossauros-para-colorir-bebe.pdf',
    });
  }

  return (
    <Background>
      <View style={styles.container}>
        {Platform.OS === 'ios' && this.customOptions()}
        <Button onPress={printHTML} title="Print HTML" />
        <Button onPress={printPDF} title="Print PDF" />
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
