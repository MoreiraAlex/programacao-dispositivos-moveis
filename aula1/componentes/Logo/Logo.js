import { Image } from 'react-native';
import Styles from "./Style"

function Logo() {
  return (
    <Image 
        style={Styles.logo}
        source={require('../../assets/favicon.png')}
    />
  )
}

export default Logo;
