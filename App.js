import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';

const pizzas = [
  {
    id: '1',
    nome: 'Pizza Margherita',
    descricao: 'Massa artesanal, molho de tomate, mussarela fresca e manjericão',
    valor: 32.90,
    imagem: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    nome: 'Pizza Calabresa',
    descricao: 'Molho de tomate, mussarela, calabresa fatiada, cebola e azeitona',
    valor: 35.90,
    imagem: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    nome: 'Pizza Portuguesa',
    descricao: 'Molho de tomate, mussarela, presunto, ovos, cebola, pimentão e azeitona',
    valor: 38.90,
    imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    nome: 'Pizza Quatro Queijos',
    descricao: 'Mussarela, gorgonzola, parmesão e provolone com molho de tomate',
    valor: 39.90,
    imagem: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    nome: 'Pizza Frango com Catupiry',
    descricao: 'Frango desfiado, catupiry cremoso, milho verde e mussarela',
    valor: 36.90,
    imagem: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop'
  },
  {
    id: '7',
    nome: 'Pizza Napolitana',
    descricao: 'Molho de tomate, mussarela de búfala, tomate fresco e manjericão',
    valor: 41.90,
    imagem: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop'
  },
  {
    id: '8',
    nome: 'Pizza Bauru',
    descricao: 'Mussarela, presunto, tomate, requeijão cremoso e orégano',
    valor: 37.90,
    imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'
  },
  {
    id: '9',
    nome: 'Pizza Vegetariana',
    descricao: 'Mussarela, pimentão, cebola, champignon, azeitona e manjericão',
    valor: 34.90,
    imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
  },
  {
    id: '10',
    nome: 'Pizza Chocolate com Morango',
    descricao: 'Massa doce, chocolate, morangos frescos e leite condensado',
    valor: 44.90,
    imagem: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop'
  },
  {
    id: '11',
    nome: 'Pizza Toscana',
    descricao: 'Calabresa, mussarela, catupiry, alho e azeitona preta',
    valor: 36.90,
    imagem: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop'
  },
  {
    id: '12',
    nome: 'Pizza Strogonoff',
    descricao: 'Frango ao molho strogonoff, mussarela, batata palha e azeitona',
    valor: 40.90,
    imagem: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop'
  }
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: item.imagem }}
      style={styles.imagemProduto}
      contentFit="cover"
      transition={200}
    />
    
    <View style={styles.cardContent}>
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      
      <Text style={styles.descricaoProduto}>{item.descricao}</Text>
      
      <Text style={styles.valorProduto}>R$ {item.valor.toFixed(2).replace('.', ',')}</Text>
      
      <TouchableOpacity 
        style={styles.botaoAdicionar}
        onPress={() => {
          console.log(`Adicionar ${item.nome} ao carrinho`);
        }}
      >
        <Text style={styles.textoBotao}>Adicionar Item</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.titulo}>🍕 Pizzaria do Chamas</Text>
        <Text style={styles.subtitulo}>Cardápio Completo</Text>
      </View>
      
      <FlatList
        data={pizzas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#d32f2f',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 16,
    color: '#ffccbc',
    fontWeight: '500',
  },
  lista: {
    padding: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imagemProduto: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
  },
  cardContent: {
    padding: 16,
  },
  nomeProduto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 8,
  },
  descricaoProduto: {
    fontSize: 15,
    color: '#757575',
    lineHeight: 22,
    marginBottom: 12,
  },
  valorProduto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 16,
  },
  botaoAdicionar: {
    backgroundColor: '#d32f2f',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#d32f2f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

