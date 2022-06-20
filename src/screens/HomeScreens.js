import React, { useEffect, useState } from 'react';
import {Text, SafeAreaView, FlatList } from "react-native";

export default function HomeScreen({navigation }) {

  const [datos, setDatos] = useState([]);

   const getPosts = async() => {
    try{
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url); //consumoir los datos
      const json = await response.json(); //convertir a json
      setDatos(json);
    } catch (error) {
      console.error(error);
    } 
  }


  useEffect(()=>{
    getPosts();
  }, [])

  return (
    <SafeAreaView>
      
      <FlatList 
              data={datos}
              keyExtractor = { ({ id }, index) => id }
              renderItem = {
                ({item}) => (
                  <Text onPress={

                    () => {
                      navigation.navigate('Detail',{ itemId: item.id })
                    }

                  }>{item.title}</Text>
                )
              }
      />

      

    </SafeAreaView>
  );
}