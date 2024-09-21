import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../features/counter/counterSlice"

const Counter = () => {

  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  const [inputToAdd, setInputToAdd] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.amountButton} onPress={() => dispatch(decrement())}>
          <Text style={styles.amountButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amountText}>{count}</Text>
        <TouchableOpacity style={styles.amountButton} onPress={() => dispatch(increment())}>
          <Text style={styles.amountButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TextInput
          placeholder="Cantidad a aumentar"
          placeholderTextColor="black"
          style={styles.spanInput}
          onChangeText={setInputToAdd}
          value={inputToAdd}
        />
      </View>
      <Pressable style={styles.button} onPress={() => dispatch(incrementByAmount(Number(inputToAdd)), setInputToAdd(null))}>
          <Text style={styles.buttonText}>Aumentar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => dispatch(reset(), setInputToAdd(null))}>
        <Text style={styles.buttonText}>Borrar</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.black,
    width: "60%",
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 5
  },
  span: {
    backgroundColor: colors.lightGray,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: colors.platinum,
  },
  spanInput: {
    backgroundColor: colors.white,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    color: colors.black,
    borderWidth: 2
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
  },

  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: colors.black,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
});
