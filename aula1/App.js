import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker, ScrollView } from 'react-native-web';
import { useState } from 'react';
import TextInputBox from './componentes/TextInputBox/TextInputBox';
import CustomButton from './componentes/CustomButton/CustomButton';
import FuncaoSoma from './acoes/funcaoSoma';
import FuncaoSubtracao from './acoes/funcaoSubtracao';
import FuncaoMultiplicacao from './acoes/funcaoMultiplicacao';
import FuncaoDivisao from './acoes/funcaoDivisao';
import Logo from './componentes/Logo/Logo';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operacao, setOperacao] = useState('1');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>
        <Logo />
        <Text style={styles.title}>Cálculo de Dois Números</Text>
        <TextInputBox
          value={number1}
          onChangeText={setNumber1}
          placeholder="Digite o primeiro número"
          keyboardType="numeric"
        />
        <TextInputBox
          value={number2}
          onChangeText={setNumber2}
          placeholder="Digite o segundo número"
          keyboardType="numeric"
        />

        <Picker
          selectedValue={operacao}
          style={{ width: 100, marginBottom: 10 }}
          onValueChange={(itemValue) => 
            setOperacao(itemValue)
          }>
          <Picker.Item label="Soma" value="1" />
          <Picker.Item label="Subtração" value="2" />
          <Picker.Item label="Multiplicação" value="3" />
          <Picker.Item label="Divisão" value="4" />
        </Picker>

        <CustomButton
          title="Calcular"
          onPress={() => {
            switch (operacao) {
              case '1':
                FuncaoSoma(number1, number2)                
                break;
              case '2':
                FuncaoSubtracao(number1, number2)                
                break;
              case '3':
                FuncaoMultiplicacao(number1, number2)                
                break;
              case '4':
                FuncaoDivisao(number1, number2)                
                break;            
              default:
                break;
            }
          }}
          style={styles.button}
        />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});