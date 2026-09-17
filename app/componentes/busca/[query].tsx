import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

export default function Busca(){
    const {query} = useLocalSearchParams();

    console.log('Query recebida:', query);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: query,
                    headerStyle: { backgroundColor: '#111' },
                    headerTintColor: '#fff',
                }}
            />
            <Text style={styles.texto}>Termo buscado: {query}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
})