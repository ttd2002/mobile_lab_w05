import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, SafeAreaView } from 'react-native';

export default function Screen1() {

    const navigator = useNavigation();
    const route = useRoute();
    const [img, setImg] = useState(require('../assets/vs_blue.png'));

    useEffect(() => {
        if (route.params?.img) {
            setImg(route.params.img)
        }
    }, [route.params?.img])

    const btnHandle = () => {
        navigator.navigate('S2');
    }

    const btnMua = () => {

        var mau = '';
        if (img == '/static/media/vs_silver.a64810c71fe2bda8952f.png')
            mau = 'Silver';
        else if (img == '/static/media/vs_blue.6f9fdf8955497b5153d5.png')
            mau = 'Blue';
        else if (img == '/static/media/vs_red.0ba29d74ac59ed89211a.png')
            mau = 'Red';
        else if (img == '/static/media/vs_black.652441dbf7bc2dfd9366.png')
            mau = 'Black';
        alert(`Đã chọn mua màu ${mau}`);

    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{}}>
                <Image source={img} style={{ width: 300, height: 350 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Điện thoại Vsamrt Joy 3 - hàng chính hãng</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <Image style={{ width: 40, height: 40 }} source={require('../assets/star.png')} />
                <Image style={{ width: 40, height: 40 }} source={require('../assets/star.png')} />
                <Image style={{ width: 40, height: 40 }} source={require('../assets/star.png')} />
                <Image style={{ width: 40, height: 40 }} source={require('../assets/star.png')} />
                <Image style={{ width: 40, height: 40 }} source={require('../assets/star.png')} />
                <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold' }}>Xem 828 đánh giá</Text>
            </View>
            <View style={{ marginBottom: 20, flexDirection: 'row', width: '90%' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'flex-start' }}>1.790.000 đ</Text>
                <Text style={{ fontSize: 12, color: 'grey', marginLeft: 90 }}>1.790.000 đ</Text>
            </View>
            <View style={{ width: '90%' }}>
                <Text style={{ alignItems: 'flex-start', color: 'red', fontSize: 16, fontWeight: 'bold', marginBottom: 20 }}>Ở đâu rẻ hơn hoàn tiền</Text>
            </View>
            <Pressable
                onPress={btnHandle}
                style={{ marginBottom: 20, width: '90%', height: 30, borderRadius: 5, borderWidth: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>4 MÀU CHỌN MÀU </Text>
            </Pressable>
            <Pressable
                onPress={btnMua}
                style={{ width: '90%', height: 30, backgroundColor: 'red', borderRadius: 5, color: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>CHỌN MUA</Text>
            </Pressable>
        </SafeAreaView>
    )
}