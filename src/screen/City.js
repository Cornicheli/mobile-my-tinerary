import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const image = {
  uri: "https://wallpapers.com/images/file/omnia-night-club-bar-party-d17al9m73c3im6oe.jpg",
};

export default function City() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.content}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.contedor}>
          <View style={styles.contedorCard}>
            <View style={styles.contedorImage}>
              <Image
                source={{
                  uri: "https://images.squarespace-cdn.com/content/v1/560dbc25e4b0969564758eb5/1573164962122-94NZA8RDIIHBIDJZSXSV/InterContinental+Amstel+Amsterdam+%2B%2B+www.thetravelpockets.com+%23amstelamsterdam?format=1500w",
                }}
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
              <Text style={styles.textTitle1}>
                Intercontinental Amstel Amsterdam
              </Text>
            </View>
            <View>
              <Button
                styles={styles.textButton}
                color="#000"
                title="Enter"
                onPress={() => navigation.navigate("Hotels")}
              />
            </View>
          </View>
        </View>
        <View style={styles.contedor}>
          <View style={styles.contedorCard}>
            <View>
              <Text style={styles.textTitle1}>An air show and water dance</Text>
            </View>
            <View style={styles.contedorImage}>
              <Image
                source={{
                  uri: "https://www.eventoplus.com/content/thumbs/960_540/content/imgsxml/galerias/articulos/3614/big-connections-sintonizart376.jpg",
                }}
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
              <View>
                <Text style={styles.textTitle2}>
                  Show: Capacity: Capacity: Live flamenco chill music and
                  artists in white costumes who led the attendees towards the
                  pool, where a spectacular staging was carried out on the
                  water. The Gala began with the arrival of a group of artists
                  who seemed to have come from the sea and who gave way to the
                  awards ceremony, accompanied by a music ceremony and which
                  closed with a contemporary and traditional flamenco show.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contedor}>
          <View style={styles.contedorCard}>
            <View>
              <Text style={styles.textTitle1}>
                futuristic atmosphere to the interactive flamenco
              </Text>
            </View>
            <View style={styles.contedorImage}>
              <Image
                source={{
                  uri: "https://www.eventoplus.com/content/thumbs/960_540/content/imgsxml/galerias/articulos/3614/big-tenerife-mariposa-sintonizartweb409.jpg",
                }}
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
              <View>
                <Text style={styles.textTitle2}>
                  Show: Capacity: a futuristic party for 2,000 people, in which
                  different artists participated: LED stilt walkers that danced
                  among the public playing with their lasers and cheering, Light
                  Juggling passes or personalized LED juggling every hour
                  showing the logos of the sponsors, plasma effects, fire ,
                  lightning
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contedor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
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
  },
  contedorImage: {
    padding: 3,
    margin: 15,
  },
  textTitle1: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    padding: 7,
  },
  textTitle2: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    margin: 3,
    padding: 7,
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
