import { StyleSheet, Text, View, Image } from "react-native";

export default function Netflix() {
  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.logo}>N</Text>
      </View>

      {/* CONTEÚDO DO FILME */}
      <View style={styles.conteudo}>

        {/* CAPA DO FILME */}
        <View style={styles.capa}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/e8/92/9b/e8929bfe52f769365b0b988df0944bc0.jpg"
            }}
            style={styles.fotoCapa}
          />
        </View>

        {/* INFORMAÇÕES DO FILME */}
        <View style={styles.informacoes}>

          <Text style={styles.titulo}>
            Barbie
          </Text>

          <Text style={styles.dados}>
            2023  •  12 anos  •  1h 54min
          </Text>

          <Text style={styles.generos}>
            Comédia  •  Fantasia  •  Aventura
          </Text>

          {/* RESUMO */}
          <Text style={styles.tituloResumo}>
            Barbie
          </Text>

  <Text style={styles.resumo}>
  Barbie vive uma vida perfeita na Barbieland,{'\n'}
  onde todos os dias são cheios de diversão.{'\n'}
  Porém, quando ela começa a enfrentar situações{'\n'}
  inesperadas, decide viajar para o mundo real{'\n'}
  em busca de respostas.
</Text>

          {/* INFORMAÇÕES EXTRAS */}
          <Text style={styles.detalhes}>
            Direção: Greta Gerwig
          </Text>

          <Text style={styles.detalhes}>
            Elenco: Margot Robbie, Ryan Gosling e America Ferrera
          </Text>

          <Text style={styles.detalhes}>
            Classificação: 12 anos
          </Text>

          {/* BOTÃO ASSISTIR */}
          <View style={styles.botaoAssistir}>
            <Text style={styles.textoBotao}>
              ▶  Assistir
            </Text>
          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#141414",
  },

  /* CABEÇALHO */

  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  logo: {
    color: "#E50914",
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 2,
  },

  /* CONTEÚDO */

  conteudo: {
    flexDirection: "row",
    padding: 25,
    gap: 30,
  },

  /* CAPA */

  capa: {
    width: 280,
    height: 400,
  },

  fotoCapa: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },

  /* INFORMAÇÕES */

  informacoes: {
    flex: 1,
    paddingTop: 10,
  },

  titulo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },

  dados: {
    color: "#aaa",
    fontSize: 13,
    marginBottom: 8,
  },

  generos: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 25,
  },

  /* RESUMO */

  tituloResumo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  resumo: {
    color: "#ddd",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 15,
  },

  /* DETALHES */

  detalhes: {
    color: "#888",
    fontSize: 12,
    marginBottom: 6,
  },

  /* BOTÃO */

  botaoAssistir: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 13,
    alignItems: "center",
    width: 180,
    marginTop: 20,
  },

  textoBotao: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },

});