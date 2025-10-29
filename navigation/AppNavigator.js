// importar tabs
import AppTabs from '../navigation/AppTabs';

// importar screens que no se usan tabs
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from  '../screens/RegisterScreen';
import ViewNewScreen from '../screens/ViewNewScreen';

// importar react navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// crear Stack y Componentes nativos
const Stack = createStackNavigator();
import { View, ActivityIndicator } from 'react-native';

// AuthContext
import { AuthProvider, useAuth } from '../context/AuthContext';

// Stack de autenticación (pantallas para usuarios no logueados)
const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} options={{title: "Iniciar sesion"}}  />
    <Stack.Screen name="Register" component={RegisterScreen} options={{title:"Registrarse"}}  />
  </Stack.Navigator>
);

// Stack principal de la App (pantallas para usuarios logueados)
const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={AppTabs} options={{ headerShown:false }}  />
    <Stack.Screen name="ViewNew" component={ViewNewScreen} options={{ title: "Ver Noticia" }}  />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const { user, loading } = useAuth(); // Obtiene el usuario y estado de carga

  // Mostramos un spinner mientras el AuthContext verifica el estado
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* Si 'user' existe, muestra el AppStack, si no, muestra el AuthStack */}
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default function AppNavigator () {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};