import { View, TextInput,  StyleSheet,} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Usamos Ionicons para el icono

export default function SearchBar({ text, setText, onSearch }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={text}
          onChangeText={setText}
          returnKeyType="search"
          onSubmitEditing={onSearch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
    },
    inputWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 6,
        borderColor: "#ddd",
        marginRight: 10,
        height: 40,
    },
    input: {
        flex: 1,
        height: "100%",
        fontSize: 16,
    },
    icon: {
        paddingLeft: 10, 
        paddingRight: 5,
    },
});
