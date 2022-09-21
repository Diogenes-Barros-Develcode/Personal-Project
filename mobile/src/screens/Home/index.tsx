import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import {Header} from '../../components/Header';
import {styles} from './styles';
import {Background} from '../../components/Background';
import {ThemeCard} from '../../components/ThemeCard';

interface UserProps {
  id: string;
  userName: string;
  userPhotoUrl: string;
  _count: {
    themes: number;
  };
}

interface UserThemeProps {
  id: string;
  name: string;
  themeImage: string;
}

export function Home() {
  const [userData, setUserData] = useState<UserProps>({} as UserProps);
  const [userTheme, setUserTheme] = useState<UserThemeProps[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    try {
      axios(
        'http://172.22.19.61:3333/users/b65a503e-49c6-41fd-8d21-b0aca3321b72/favoritethemes',
      ).then(response => {
        setUserTheme(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderItem = ({item}: {item: UserThemeProps}) => {
    return <ThemeCard data={item} onPress={() => handleOpenScreenGame(item)} />;
  };

  function handleOpenScreenGame({id, name}: UserThemeProps) {
    navigation.navigate('ThemePage', {id, name});
  }

  useEffect(() => {
    try {
      axios(
        'http://172.22.19.61:3333/users/b65a503e-49c6-41fd-8d21-b0aca3321b72',
      ).then(response => {
        setUserData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header data={userData} />
        </View>

        <View style={styles.favoriteView}>
          <Text style={styles.favoriteText}>
            Você tem {userData?._count?.themes} tema(s) favorito(s)
          </Text>
        </View>

        <FlatList
          data={userTheme}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
