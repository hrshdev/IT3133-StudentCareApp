import { View } from "react-native";


export default function Footer(){
    return(
        <>
            <View>
            <Text styles={styles.footer}>UOV © 2024 </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'blue',
        
    }
})