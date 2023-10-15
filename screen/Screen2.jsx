import { useNavigation } from '@react-navigation/native';
import react, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, SafeAreaView, Dimensions } from 'react-native';

export default function Screen2() {

    const [img, setImg] = useState(require('../assets/vs_blue.png'));
    const onPressColorRed = () => {
        setImg(require('../assets/vs_red.png'))
    }
    const onPressColorWhite = () => {
        setImg(require('../assets/vs_silver.png'))
    }
    const onPressColorBlue = () => {
        setImg(require('../assets/vs_blue.png'))
    }
    const onPressColorBlack = () => {
        setImg(require('../assets/vs_black.png'))
    }

    const navigation = useNavigation();

    const btnHandle = () => {
        navigation.navigate('S1', { img })
    }

    return (
        <SafeAreaView style={{ width: Dimensions.get("window").width }}>
            <View style={{ flexDirection: 'row' }}>
                <Image resizeMode='contain' source={img} style={{ width: 110, height: 140, marginLeft: 10, marginTop: 10 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, marginLeft: 5 }}>Điện thoại Vsmart joy 3 - hàng chính hãng</Text>
            </View>
            <View style={{ backgroundColor: 'grey', width: '100%', height: 600, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-start' }}>Chọn một màu bên dưới:</Text>
                <Pressable
                    onPress={onPressColorWhite}
                    style={{ width: 90, height: 90, backgroundColor: 'white', marginBottom: 5, marginTop: 5 }}></Pressable>
                <Pressable
                    onPress={onPressColorBlue}
                    style={{ width: 90, height: 90, backgroundColor: 'blue', marginBottom: 5, marginTop: 5 }}></Pressable>
                <Pressable
                    onPress={onPressColorRed}
                    style={{ width: 90, height: 90, backgroundColor: 'red', marginBottom: 5, marginTop: 5 }}></Pressable>
                <Pressable
                    onPress={onPressColorBlack}
                    style={{ width: 90, height: 90, backgroundColor: 'black', marginBottom: 5, marginTop: 5 }}></Pressable>
                <Pressable
                    onPress={btnHandle}
                    style={{ marginTop: 10, backgroundColor: '#1952E2', width: '90%', height: 45, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                        CHỌN
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}