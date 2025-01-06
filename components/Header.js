import { Image, StyleSheet, View } from "react-native";


export default function Header(){
    return(
        <>
            <View style={styles.banner}>
                <Image style={styles.image} source={require('../assets/uovlogo.png')} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 350,
        alignItems: 'center',
        height:90,
        
    },
    banner:{
        backgroundColor: '#f1f1f1',
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems:"center",
        marginTop:10,
    }
})