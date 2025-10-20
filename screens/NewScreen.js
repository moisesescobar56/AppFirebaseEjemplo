import { useState, useEffect } from "react";
import { Layout, Input, ButtonRounded, SearchControl } from "../components";
import { FlatList, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { obtenerNoticias, formatDate } from "../services/newService";

export default function NewScreen({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function buscar() {
    try {
      setLoading(true);
      if (!titulo) {
        const lista = await obtenerNoticias();
        setDatos(lista);
      } else {
        const lista = await obtenerNoticias(titulo);
        setDatos(lista);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscar();
  }, []);

  // presentacion
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ViewNew", { id: item.id })}
      >
      <Image style={styles.image} source={{ uri: item.imagenUrl }} />
      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.date}>{formatDate(item.fechaHora)}</Text>
    </TouchableOpacity>
  );

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <Layout>
      <FlatList
        data={datos}
        renderItem={renderItem}
        keyExtractor={(x) => x.id}
        ListHeaderComponent={ <SearchControl text={titulo} setText={setTitulo} onPress={buscar} /> }
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  date: {
    color: "#666",
    marginTop: 5,
  },
  image: {
    height: 160,
    width: '100%',
    marginTop: 5,
  },
});
