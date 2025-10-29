// // importar menu lateral
// import AppDrawer from './navigation/AppDrawer';
// import AppTabs from './navigation/AppTabs';

// // importar screens que no se usan en el menu lateral
// import NewScreen from './screens/NewScreen';
// import ViewNewScreen from './screens/ViewNewScreen';

// // importar react navigation
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// // crear Stack
// const Stack = createStackNavigator();

// // Auth
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { View, ActivityIndicator } from 'react-native';

// // Stack de autenticación (pantallas para usuarios no logueados)
// const AuthStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={AppTabs} options={{ headerShown: false }} />
//   </Stack.Navigator>
// );

// // Stack principal de la App (pantallas para usuarios logueados)
// const AppStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="New" component={NewScreen} options={{ title: "Noticias" }}  />
//     <Stack.Screen name="ViewNew" component={ViewNewScreen} options={{ title: "Ver Noticia" }}  />
//   </Stack.Navigator>
// );

// const RootNavigator = () => {
//   const { user, loading } = useAuth(); // Obtiene el usuario y estado de carga

//   // Mostramos un spinner mientras el AuthContext verifica el estado
//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {/* Si 'user' existe, muestra el AppStack, si no, muestra el AuthStack */}
//       {user ? <AppStack /> : <AuthStack />}
//     </NavigationContainer>
//   );
// };

import AppNavigator from './navigation/AppNavigator';

// exportar App
export default function App() {

  return (
    // <AuthProvider>
    //   <RootNavigator />
    //   {/* <NavigationContainer>
    //     <Stack.Navigator  >

    //       <Stack.Screen name="Home" component={AppTabs} options={{ headerShown: false }} />
    //       <Stack.Screen name="New" component={NewScreen} options={{ title: "Noticias" }}  />
    //       <Stack.Screen name="ViewNew" component={ViewNewScreen} options={{ title: "Ver Noticia" }}  />
    //     </Stack.Navigator>
    //   </NavigationContainer> */}

    // </AuthProvider>
    <AppNavigator />
  );
}