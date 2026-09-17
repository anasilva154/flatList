import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import DadosDosFilmes from '../DadosDosFilmes';
 
 
export interface FilmeProps {
  id?: string;
  titulo?: string;
  subtitulo?: string;
  ano?: string;
  duracao?: string;
  classificacao?: string;
  nota?: string;
  genero?: string;
  sinopse?: string;
  elenco?: string;
  imagem?: string;
}
 
const filmeExemploPadrao: FilmeProps = {
  id: '1c',
  titulo: 'Barbie',
  subtitulo: 'O filme',
  ano: '2023',
  duracao: '1h 54m',
  classificacao: '12',
  nota: '8.9',
  genero: 'Comédia  •  Fantasia  •  Aventura',
  sinopse:
    'Barbie vive uma vida perfeita na Barbieland, onde todos os dias são cheios de diversão. Porém, quando ela começa a enfrentar situações inesperadas, decide viajar para o mundo real em busca de respostas.',
  elenco: 'Margot Robbie, Ryan Gosling e America Ferrera',
  imagem:
    'https://i.pinimg.com/736x/e8/92/9b/e8929bfe52f769365b0b988df0944bc0.jpg',
};
 
 
export default function Filme(props?: FilmeProps) {
  const params = useLocalSearchParams<Record<string, string>>();
  const {id}= useLocalSearchParams();
 
  console.log(id)

  const categorias = DadosDosFilmes();
const filmesEncontrados = categorias
  .flatMap((categoria) => categoria.filmes)
  .find((f) => f.id === id);
 
 console.log('Filme encontrado:', filmesEncontrados);
 
  const filme=filmesEncontrados;
 
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      
      <View style={styles.posterContainer}>
        <Image
          source={{ uri: filme.imagem }}
          style={styles.poster}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
      </View>
 
        <View style={styles.detalhesContainer}>
        <Text style={styles.titulo}>{filme.titulo}</Text>
        {filme.subtitulo ? (
          <Text style={styles.subtitulo}>{filme.subtitulo}</Text>
        ) : null}
 
       
        <View style={styles.tagsContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>{filme.ano}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>{filme.duracao}</Text>
          </View>
          <View style={[styles.badge, styles.badgeClassificacao]}>
            <Text style={styles.badgeTexto}>{filme.classificacao}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingTexto}>{filme.nota}</Text>
          </View>
        </View>
 

        <Text style={styles.genero}>{filme.genero}</Text>
 
    
        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.botaoAssistir} activeOpacity={0.8}>
            <Ionicons name="play" size={20} color="#000" />
            <Text style={styles.textoBotaoAssistir}>Assistir</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.botaoMinhaLista} activeOpacity={0.8}>
            <Ionicons name="add" size={20} color="#FFF" />
            <Text style={styles.textoBotaoMinhaLista}>Minha Lista</Text>
          </TouchableOpacity>
        </View>
 

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.secaoConteudo}>{filme.sinopse}</Text>
        </View>
 

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Elenco Principal</Text>
          <Text style={styles.secaoConteudo}>{filme.elenco}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  posterContainer: {
    width: '100%',
    height: 320,
    position: 'relative',
    backgroundColor: '#1E293B',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 23, 42, 0.25)',
  },
  detalhesContainer: {
    paddingHorizontal: 20,
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#0F172A',
    paddingTop: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  badge: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeClassificacao: {
    backgroundColor: '#DC2626',
  },
  badgeTexto: {
    color: '#E2E8F0',
    fontSize: 12,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 4,
  },
  ratingTexto: {
    color: '#F8FAFC',
    fontWeight: 'bold',
    fontSize: 14,
  },
  genero: {
    fontSize: 13,
    color: '#38BDF8',
    fontWeight: '500',
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  botaoAssistir: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  textoBotaoAssistir: {
    color: '#0F172A',
    fontWeight: 'bold',
    fontSize: 15,
  },
  botaoMinhaLista: {
    flex: 1,
    backgroundColor: '#1E293B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  textoBotaoMinhaLista: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  secao: {
    marginBottom: 18,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 6,
  },
  secaoConteudo: {
    fontSize: 14,
    color: '#CBD5E1',
    lineHeight: 22,
  },
});
 
 
 