import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

import Texto from '../../../componentes/texto';

export default function Item({item: {nome, imagem}}){
    return <View key={nome} style={estilo.item}>
        <Image source={imagem} style={estilo.imagem}/>
        <Texto style={estilo.nome}>{nome}</Texto>
        </View>
    return <>
        <Texto style={estilo.titulo}>{titulo}</Texto>
        
    </>
}

const estilo = StyleSheet.create({
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem:{
        width: 46,
        height: 46,
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }

});