import { useState, useEffect } from 'react';
import { Layout, Input, ButtonRounded, Select } from '../components';
import { Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

const GENEROS = [
  { label: "Femenino", value: "Femenino" },
  { label: "Masculino", value: "Masculino" },
];

export default function RegisterScreen({ navigation }){
    const [nombre, setNombre] = useState('');
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const [confirmarClave, setConfirmarClave] = useState('');
    const { register } = useAuth();

    async function registrar() {
        //validar
        if (!nombre || !genero || !email || !clave || !confirmarClave) {
          Alert.alert( "Error", "Por favor, completa todos los campos obligatorios." );
          return;
        }
        // Confirmar claves
        if (clave != confirmarClave) {
          Alert.alert( "Error", "Las contraseñas no coinciden" );
          return;
        }

        try {
          const data = {
            nombre: nombre,
            genero: genero,
          };
          await register(email, clave, data);

        } catch (error) {
            console.error(error);
            if (error.code === "auth/email-already-in-use") {
                Alert.alert("Este correo electrónico ya está en uso.");
            } else if (error.code === "auth/weak-password") {
                Alert.alert("La contraseña debe tener al menos 6 caracteres.");
            } else {
                Alert.alert("Error al registrar la cuenta.");
            }
        }

    }

    return (
        <Layout>
            <Input 
                label="Nombre"
                placeholder="Juan Perez"
                type="default"
                value={nombre}
                onChangeText={setNombre} />
            {/* <Input 
                label="Genero"
                placeholder="Femenino/Masculino"
                type="default"
                value={genero}
                onChangeText={setGenero} />                   */}
            <Select
                label="Seleccionar genero"
                options={GENEROS}
                initialValue={genero} // valor inicial
                onSelect={setGenero} // actualizar seleccion
            /> 
            <Input 
                label="Correo electronico"
                placeholder="codigo@esfe.agape.edu.sv"
                type="email-address"
                value={email}
                onChangeText={setEmail} />
            <Input 
                label="Constraseña"
                placeholder="*****"
                hideText={true}
                value={clave}
                onChangeText={setClave} />
            <Input 
                label="Confirmar constraseña"
                placeholder="*****"
                hideText={true}
                value={confirmarClave}
                onChangeText={setConfirmarClave} />
            <ButtonRounded title="Confirmar" onPress={registrar} />    
            <ButtonRounded title="Iniciar sesion" isPrimary={false} onPress={() => navigation.popToTop() } />    
        </Layout>
    );
}