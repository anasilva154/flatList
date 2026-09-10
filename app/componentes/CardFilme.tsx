import {Image, StyleSheet} from "react-native";
import {Link} from "expo-router";

export default function CardFilme({item}: {item: any}) {
    return(
        <Link href="/components/filme/{item.id}">
            <Image
                source={{uri: item.imagem}}
                style={styles.filme}
            />
        </Link>
    );
}
