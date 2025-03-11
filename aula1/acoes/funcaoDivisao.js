import { Alert } from 'react-native';

export default function funcaoDivisao(number1, number2) {
    const sum = parseFloat(number1) / parseFloat(number2);
    if (isNaN(sum)) {
        alert('Por favor, insira números válidos.');
    } else if (parseFloat(number2) === 0) {
        alert('0 não é um denominador válido');
    } else {
        alert(`O resultado é: ${sum}`);
    }
}
