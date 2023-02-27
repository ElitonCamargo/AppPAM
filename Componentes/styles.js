import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700'
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20
  },  
  texto: {
    textAlign: "center"
  },
  botao:{
    marginTop: 50
  }
});

export default estilo;