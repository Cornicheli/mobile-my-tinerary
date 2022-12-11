import { StyleSheet, View, Text, Image, Button, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import hotelActions from "../redux/actions/hotelActions";
import { useNavigation } from "@react-navigation/native";

export default function Hotels() {
  const navigation = useNavigation();
  const hotelList = useSelector((store) => store.hotelsReducers.listsHotels);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  console.log(search);
  useEffect(() => {
    dispatch(hotelActions.getHotels());
  }, []);
  useEffect(() => {
    let filter = {
      name: search,
      order: order,
    };
    dispatch(hotelActions.getHotelsFilters(filter));
  }, [search, order]);
  console.log(search);
  const Item = ({ name, img }) => (
    <>
      <View>
        <View style={styles.contedor}>
          <View style={styles.contedorCard}>
            <View style={styles.contedorImage}>
              <Image
                source={{ uri: img }}
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: 20,
                  borderColor: "black",
                  borderWidth: 3,
                }}
              />
            </View>
            <View>
              <Text style={styles.textTitle1}>{name}</Text>
            </View>
            <View>
              <Button
                styles={styles.textButton}
                color="#000"
                title="Enter"
                onPress={() => navigation.navigate("Show")}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );

  const CityCard = ({ item }) => <Item name={item.name} img={item.photo[0]} />;
  return (
    <>
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: "#172A3A",
            borderWidth: 1,
            marginVertical: 8,
            marginHorizontal: 16,
            borderdRadius: 10,
          }}
          placeholder="Search..."
          type="search"
          onChangeText={(text) => setSearch(text)}
        ></TextInput>
      </View>
      <FlatList
        data={hotelList}
        renderItem={CityCard}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  contedor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#171717",
  },
  contedorCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: "#20232a",
    marginBottom: 35,
    width: 300,
    marginTop: 35,
  },
  contedorImage: {
    padding: 3,
    margin: 15,
  },
  textTitle1: {
    fontSize: 28,
    textAlign: "center",
  },
  textTitle2: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    margin: 3,
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
