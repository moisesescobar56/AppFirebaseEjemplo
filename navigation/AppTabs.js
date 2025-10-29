import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// importar screens de los tabs
import NewScreen from '../screens/NewScreen';
import ProfileScreen from '../screens/ProfileScreen';

// crear tabs
const Tab = createBottomTabNavigator();

// exportar tabs
export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#0051CA', // color tabs
          tabBarInactiveTintColor: 'gray',

          // configurar icono segun name
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'New') {
              iconName = focused ? 'newspaper' : 'newspaper-outline'; // LoginScreen Icon
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline'; // RegisterScreen Icon
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}  
    >
      <Tab.Screen name="New" component={NewScreen} options={{ title: "Noticias" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
    </Tab.Navigator>
  );
}