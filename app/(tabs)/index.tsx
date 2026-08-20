import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      {
        id: "1a",
        titulo: "Oppenheimer",
        cor: "#1a1a2e",
        imagem:
          "https://i.pinimg.com/736x/06/c8/70/06c87059cd71c7b46d8d5e25d8aab08b.jpg",
      },
      {
        id: "1b",
        titulo: "Duna 2",
        cor: "#16213e",
        imagem:
          "https://i.pinimg.com/736x/ec/53/e6/ec53e6a1733537aba98ef4198c1c1af0.jpg",
      },
      {
        id: "1c",
        titulo: "Barbie",
        cor: "#0f3460",
        imagem:
          "https://i.pinimg.com/736x/e8/92/9b/e8929bfe52f769365b0b988df0944bc0.jpg",
      },
      {
        id: "1d",
        titulo: "Poor Things",
        cor: "#533483",
        imagem:
          "https://i.pinimg.com/736x/4a/83/72/4a8372dab16ffd2e96528e21a35fd7ed.jpg",
      },
      {
        id: "1e",
        titulo: "Saltburn",
        cor: "#2b2d42",
        imagem:
          "https://i.pinimg.com/736x/2d/41/e3/2d41e37be938c9390886092cf1410b17.jpg",
      },
    ],
  },

  {
    id: "2",
    titulo: "Ação",
    filmes: [
      {
        id: "2a",
        titulo: "John Wick 4",
        cor: "#1b1b2f",
        imagem:
          "https://i.pinimg.com/736x/5e/05/43/5e05435115b807d7ae9a83edbb7532db.jpg",
      },
      {
        id: "2b",
        titulo: "Missão Impossível",
        cor: "#162447",
        imagem:
          "https://i.pinimg.com/736x/15/d1/a5/15d1a510bda1fd065e01d12dda417be7.jpg",
      },
      {
        id: "2c",
        titulo: "Top Gun",
        cor: "#1f4068",
        imagem:
          "https://i.pinimg.com/736x/af/fe/2d/affe2dce7c4848a31ff13dd9fb4c7f09.jpg",
      },
      {
        id: "2d",
        titulo: "Mad Max",
        cor: "#1b262c",
        imagem:
          "https://i.pinimg.com/736x/fa/de/e8/fadee85208ca3164b62e6c6b38662330.jpg",
      },
    ],
  },

  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      {
        id: "3a",
        titulo: "Superbad",
        cor: "#2d132c",
        imagem:
          "https://i.pinimg.com/736x/cb/55/96/cb55964e79157d6b2b0b25d4ca848bf8.jpg",
      },
      {
        id: "3b",
        titulo: "The Grand Budapest",
        cor: "#1c3334",
        imagem:
          "https://i.pinimg.com/736x/bb/bf/aa/bbbfaabc78a6ea7e90e43b6af11c39d0.jpg",
      },
      {
        id: "3c",
        titulo: "Knives Out",
        cor: "#2c003e",
        imagem:
          "https://i.pinimg.com/736x/74/ad/7c/74ad7c5833e5b90303b9eff70f507300.jpg",
      },
    ],
  },

  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      {
        id: "4a",
        titulo: "Free Solo",
        cor: "#0d0d0d",
        imagem:
          "https://i.pinimg.com/736x/3e/79/2b/3e792b9c21ea0324fb365fce75147dd6.jpg",
      },
      {
        id: "4b",
        titulo: "The Social Dilemma",
        cor: "#001011",
        imagem:
          "https://i.pinimg.com/736x/71/77/18/7177187de139c1db9c469b7a09979aa6.jpg",
      },
      {
        id: "4c",
        titulo: "My Octopus Teacher",
        cor: "#002b36",
        imagem:
          "https://i.pinimg.com/736x/a7/c0/a8/a7c0a83b5245ec39fad893f6ff478815.jpg",
      },
    ],
  },

  {
    id: "5",
    titulo: "Terror",
    filmes: [
      {
        id: "5a",
        titulo: "Hereditary",
        cor: "#200122",
        imagem:
          "https://i.pinimg.com/736x/ca/75/0e/ca750e4311aed0b9dbd0bfa0dced5841.jpg",
      },
      {
        id: "5b",
        titulo: "Midsommar",
        cor: "#190a05",
        imagem:
          "https://i.pinimg.com/736x/c0/75/e3/c075e3236ac661386c005e399e2252af.jpg",
      },
      {
        id: "5c",
        titulo: "Get Out",
        cor: "#0a0a0a",
        imagem:
          "https://i.pinimg.com/736x/bb/6d/29/bb6d2980e7352cfbf00b404ea0360ed3.jpg",
      },
    ],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoria}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function renderCategoria({ item }: { item: any }) {
  return (
    <View style={styles.categoria}>

      {/* NOME DO GÊNERO */}
      <Text style={styles.tituloCategoria}>
        {item.titulo}
      </Text>

      {/* FILMES DO GÊNERO */}
      <FlatList
        data={item.filmes}
        horizontal
        keyExtractor={(filme) => filme.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: filme }) => (
          <View
            style={[
              styles.card,
              { backgroundColor: filme.cor },
            ]}
          >

            {/* FOTO DO FILME */}
            <Image
              source={{ uri: filme.imagem }}
              style={styles.imagem}
            />

            {/* NOME DO FILME */}
            <View style={styles.nomeFilme}>
              <Text style={styles.tituloFilme}>
                {filme.titulo}
              </Text>
            </View>

          </View>
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