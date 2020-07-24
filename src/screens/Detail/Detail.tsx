import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Center } from '../../components/Center'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, Platform, TouchableOpacity } from 'react-native'
import { postBagsAction } from '../../actions/DetailAction'
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationProp } from "@react-navigation/native";
import IconChange from "react-native-vector-icons/AntDesign";
import { Size } from '../../services/Services';
import AntDesign from "react-native-vector-icons/AntDesign";



interface HomeProps {
    navigation: NavigationProp<any, any>,
    route: any,
    home: { isFetching: boolean, data: [any] },
    cart: { isFetching: boolean, shopingBag: [any] },
    addAction: (cart: Array<any>) => {}
}

interface State {

}

class Detail extends React.Component<HomeProps, State> {


    addToCart() {
        let product = Object.assign({}, this.props.route.params.product)
        if (Object.keys(product).length > 0) {
            let actualCart = [...this.props.cart.shopingBag]
            actualCart.push(product)
            this.props.addAction([...actualCart])
            this.props.navigation.navigate('Cart');
        }
    }


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
                        <IconChange name='left' size={24} color={"black"} />
                    </View>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')} style={{ marginRight: 20 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, width: wp(10), justifyContent: 'center', alignItems: 'center', }}>
                            <AntDesign name='shoppingcart' size={24} color={"black"} />
                            {
                                this.props.cart.shopingBag.length > 0 ?
                                    <View style={{ left: 22, position: 'absolute', width: 18, height: 18, borderRadius: 18 / 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', top: -3, zIndex: 10 }}>
                                        <Text style={{ color: 'white' }}>{this.props.cart.shopingBag.length}</Text>
                                    </View> : null
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            )
        });

        let product = Object.assign({}, this.props.route.params.product)
        if (Object.keys(product).length > 0) {
            return (
                <Center>
                    <View style={{ flex: 1, width: wp(100), justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: product.image }} width={50} height={90} resizeMode={"contain"} style={{
                            width: Size(750),
                            height: Size(650)
                        }} />
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'absolute', width: wp(100), height: 80, bottom: 0 }}>
                            <Text style={{ marginTop: 20, fontSize: RFValue(18), color: 'white', marginLeft: 20 }}>{product.amiiboSeries + " : " + product.amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + " CLP"}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 2, width: wp(100), justifyContent: 'flex-start', backgroundColor: '#ededed' }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ marginLeft: 20 }}>{product.amiiboSeries}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <TouchableWithoutFeedback onPress={() => { this.addToCart() }} style={{}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginRight: 20 }}>
                                        <Text style={{ marginRight: 5 }}>Add To Cart</Text>
                                        <AntDesign name='shoppingcart' size={24} color={"black"} />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <View style={{ flex: 3 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ marginLeft: 20, fontSize: RFValue(18) }}>{"Descripcion: " + product.gameSeries}</Text>
                                <Text style={{ marginLeft: 20, fontSize: RFValue(18) }}>{"Detalle: " + product.gameSeries}</Text>
                                <Text style={{ marginLeft: 20, fontSize: RFValue(18) }}>{"Caracteristicas: " + product.character}</Text>
                            </View>
                        </View>
                    </View>
                </Center>
            );
        }
        return (
            <Center>
                <Text>Sin data para mostrar</Text>
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

    addAction: (cart: Array<any>) => dispatch(postBagsAction(cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
