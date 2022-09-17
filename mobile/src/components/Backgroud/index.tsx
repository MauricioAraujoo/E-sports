
import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Backgroud({ children }: Props) {
    return (
        <ImageBackground
            source={backgroundImg}
            defaultSource={backgroundImg}
            style={styles.container}
        >

            {children}
        </ImageBackground>
    );
}