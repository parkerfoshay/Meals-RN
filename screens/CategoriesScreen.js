import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriesScreen = ({ navigation: { navigate }}) => {
    return (
        <View style={styles.screen}>
            <Text>CategoriesScreen</Text>
            <Button title='Go to Meals' onPress={() => {
                navigate({routeName: 'CategoryMeals'})
            }} />
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen
