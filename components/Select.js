import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Select({ label, options, initialValue, onSelect }) {
  // valor seleccionado
  const [selectedValue, setSelectedValue] = useState(initialValue);

  // actualizar valor
  const handleChange = (itemValue) => {
    if (itemValue === 'placeholder') {
      onSelect(null);
      return; 
    }
    setSelectedValue(itemValue);
    if (onSelect) {
      onSelect(itemValue); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerWrapper}>
        <Picker style={styles.picker} selectedValue={selectedValue} onValueChange={handleChange}>
          <Picker.Item label="SELECCIONAR" color="#999" value="placeholder" />
          {options.map((item) => (
            <Picker.Item 
              key={item.value} 
              label={item.label} 
              value={item.value} 
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      width: "auto", 
      paddingHorizontal: 5,
      paddingBottom: 5,
      marginBottom: 5,
  },
  label:{
      fontSize: 14,
      fontWeight: "bold",
      color: "#000",
      marginBottom: 5
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#999',
    overflow: 'hidden',
  },
  picker: {
    height: 55,
    width: '100%',
  },
});