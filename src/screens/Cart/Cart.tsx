import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Center } from '../../components/Center'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, Platform, TouchableOpacity } from 'react-native'
import { postBagRemoveAction } from '../../actions/DetailAction'
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationProp } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Size } from '../../services/Services';
import { ScrollView } from 'react-native-gesture-handler'



interface HomeProps {
    navigation: NavigationProp<any, any>,
    route: any,
    home: { isFetching: boolean, data: [any] },
    cart: { isFetching: boolean, shopingBag: [any] },
    removeAction: (cart: Array<any>) => {}
}

interface State {

}

class Cart extends React.Component<HomeProps, State> {


    removeFromCart(index: number) {
        let actualCart = [...this.props.cart.shopingBag]
        actualCart.splice(index, 1);
        this.props.removeAction([...actualCart])
    }

    getTotal = () => {
        let actualCart = [...this.props.cart.shopingBag]
        let total = 0
        actualCart.map((item) => {
            total = total + item.amount
        })

        return total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + " CLP"
    };


    render() {
        this.props.navigation.setOptions({
            headerTitle: "Carrito de compras",
            headerStyle: {
                backgroundColor: "white",
            },
            headerStatusBarHeight: Platform.OS == 'ios' ? Size(150) : Size(35),
            headerTitleStyle: {
                textAlign: 'center',
                flexGrow: 1,
                alignSelf: 'center',
                color: "black",
                fontSize: Size(65),

            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ marginLeft: Size(45) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name='left' size={24} color={"black"} />
                    </View>
                </TouchableOpacity>
            ),
        });

        return (
            <Center>

                <View style={{ flex: 2, width: wp(100), justifyContent: 'flex-start', backgroundColor: '#ededed' }}>
                    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginLeft: 20, fontSize: RFValue(19) }}>Bolsa de compra</Text>
                        <Text style={{ marginLeft: 20, fontSize: RFValue(19) }}>({this.props.cart.shopingBag.length} productos)</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            {
                                this.props.cart.shopingBag.map((item, index) => {
                                    return (
                                        <View style={{ flexDirection: 'row', flex: 1, width: wp(100) }}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={{ uri: item.image }} width={50} height={70} resizeMode={"contain"} style={{
                                                    width: wp(10),
                                                    height: hp(5)
                                                }} />
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ marginLeft: 20 }}>{item.amiiboSeries}</Text>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ marginLeft: 20 }}>{item.amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + " CLP"}</Text>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                                <TouchableWithoutFeedback onPress={() => { this.removeFromCart(index) }} style={{}}>
                                                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginRight: 5 }}>
                                                            
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginRight: 20 }}>
                                                            <AntDesign name='closecircleo' size={24} color={"black"} />
                                                        </View>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>

                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <View style={{ height: hp(8), width: wp(100), justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: RFValue(18), color: '#333333', marginRight: 20 }}>{"Total: " + this.getTotal()}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#32CD32', height: hp(8), width: wp(45), borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: RFValue(18), color: '#333333' }}>{"Ir a comprar"}</Text>
                        </View>
                    </View>
                </View>
            </Center>
        );


    }

}

const styles = StyleSheet.create({
})

const mapStateToProps = (state: any) => ({
    home: state.home,
    cart: state.cartshop,
})

const mapDispatchToProps = (dispatch: any) => ({

    removeAction: (cart: Array<any>) => dispatch(postBagRemoveAction(cart)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
