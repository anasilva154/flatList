import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import DadosDosFilmes from '../componentes/DadosDosFilmes';
import renderCategoria from '../componentes/CardCategorias';

const categorias = DadosDosFilmes();
console.log(categorias);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoria}
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
})