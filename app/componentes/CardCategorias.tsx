import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Link } from "expo-router";

export default function renderCategoria({ item }: { item: any }) {
  return (
    <View style={styles.categoria}>

    
      <Text style={styles.tituloCategoria}>
        {item.titulo}
      </Text>

    
      <FlatList
        data={item.filmes}
        horizontal
        keyExtractor={(filme) => filme.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: filme }) => (
        
        <Link href={`/filme`} style={styles.tituloFilme}>
          <View
            style={[
              styles.card,
              { backgroundColor: filme.cor },
            ]}>

            <Image
              source={{ uri: filme.imagem }}
              style={styles.imagem}
            />

        
            /*<View style={styles.nomeFilme}>
              <Text style={styles.tituloFilme}>
                {filme.titulo}
              </Text>

            </View>
          </View>
          
          
                    </Link>
                  )}
                />
              </View>
            );
          }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 40,
  },

  categoria: {
    marginBottom: 28,
  },

  tituloCategoria: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 12,
  },

  card: {
    width: 130,
    height: 190,
    borderRadius: 8,
    marginLeft: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },

  imagem: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  nomeFilme: {
    backgroundColor: "rgba(0,0,0,0.65)",
    padding: 8,
  },

  tituloFilme: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});