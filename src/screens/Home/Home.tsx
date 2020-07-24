import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Center } from '../../components/Center'
import { FlatList, View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Platform, Image } from 'react-native'
import { getHomeItems } from '../../actions/HomeListAction'
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationProp } from "@react-navigation/native";
import IconBar from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Size } from '../../services/Services';



interface HomeProps {
    navigation: NavigationProp<any, any>,
    home: { isFetching: boolean, data: [any] },
    fetchData: () => {}
}

interface State {

}

class Home extends React.Component<HomeProps, State> {

    componentDidMount() {
    }

    getData = () => {
        let data = this.props.home.data ? [...this.props.home.data] : []
        if (data.length > 0) {
            data.map((item) => {
                item['amount'] = Math.floor(Math.random() * 1 * 100000) + 1
            })
        }
        return data
    }

    navigate(id: number) {
        let data = this.getData()
        this.props.navigation.navigate('Detail', {
            screen: 'Detail',
            params: { product: data[id] },
        });
    }

    handleRefresh = () => {
        this.props.fetchData()
    };


    render() {
        this.props.navigation.setOptions({
            headerTitle: "Inicio",
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
                <TouchableOpacity onPress={() => null} style={{ marginLeft: Size(45) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name='bars' size={24} color={"black"} />
                    </View>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {
                    screen: 'Cart',
                })} style={{ marginRight: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name='shoppingcart' size={24} color={"black"} />
                    </View>
                </TouchableOpacity>
            )
        });
        const isfetch = this.props.home.isFetching
        return (
            <Center>
                <View style={styles.body}>
                    <FlatList
                        style={[styles.bodyList]}
                        data={this.getData()}
                        numColumns={2}
                        updateCellsBatchingPeriod={6}
                        initialNumToRender={6}
                        windowSize={6}
                        extraData={this.props}
                        refreshing={isfetch}
                        ListHeaderComponent={() => {
                            return (
                                <View style={{ flex: 1, width: wp(100), justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flex: 1, width: wp(100) }}>
                                        <Image source={{ uri: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020000-03720102.png" }} resizeMode={"cover"} style={{
                                            width: Size(450),
                                            height: Size(608)
                                        }} />
                                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'absolute', width: wp(100), height: 80, bottom: 0 }}>
                                            <Text style={{ marginTop: 20, fontSize: RFValue(18), color: 'white', marginLeft: 20 }}>Destacado del dia</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                        onRefresh={() => this.handleRefresh()}
                        ListEmptyComponent={() => {
                            return (
                                <Center>
                                    <Text style={{ marginTop: 20, fontSize: RFValue(18) }}>No hay ordenes para mostrar</Text>
                                </Center>
                            )
                        }}
                        keyExtractor={(item) => item.name.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableWithoutFeedback onPress={() => { this.navigate(index) }}>
                                    <View style={
                                        {
                                            alignItems: "center",
                                            justifyContent: 'center',
                                            paddingTop: 0,
                                            height: hp(25),
                                            flex: 1,
                                            marginHorizontal: 20,
                                            marginVertical: 5,
                                            borderRadius: 10,
                                            borderColor: '#F1F2F6',
                                            borderWidth: 1,
                                            backgroundColor: "#F9F9F9",
                                            shadowColor: "#ababab",
                                            shadowOffset: {
                                                width: 0,
                                                height: 3,
                                            },
                                            shadowOpacity: 0.27,
                                            shadowRadius: 2.65,
                                            elevation: 3,
                                        }
                                    } >
                                        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }} >
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={{ uri: item.image }} width={50} height={70} resizeMode={"contain"} style={{
                                                    width: Size(608),
                                                    height: Size(288)
                                                }} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                            <View style={{ flex: 2 }}>
                                                <Text style={{ fontSize: RFValue(10), marginLeft: 10 }}>{item.amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")+" CLP"}</Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <TouchableOpacity onPress={() => null} style={{}}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                        <AntDesign name='shoppingcart' size={24} color={"black"} />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }}
                    />
                </View>
            </Center>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 2,
        backgroundColor: '#F1F2F6'
    },
    bodyList: {
        width: wp(100),
    },
})

const mapStateToProps = (state: any) => ({
    home: state.home,
})

const mapDispatchToProps = (dispatch: any) => ({

    fetchData: () => dispatch(getHomeItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
