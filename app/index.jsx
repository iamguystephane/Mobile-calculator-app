import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

function Calculator() {
  const colorScheme = useColorScheme();
  const [currentBtn, setCurrentBtn] = useState("0");
  const [operator, setOperator] = useState("");

  function buttonSetter(btn) {
    if (currentBtn === "0") {
      if (btn === ".") {
        setCurrentBtn("0" + btn);
      } else {
        setCurrentBtn(btn);
      }
    } else if (currentBtn.includes(".") && btn === ".") {
      btn.replace(".", "");
    } else {
      setCurrentBtn((prev) => prev + btn);
    }
  }

  function deleteBtn() {
    if (currentBtn.length === 1) {
      setCurrentBtn("0");
    } else {
      setCurrentBtn((prev) => prev.slice(0, -1));
    }
  }

  function clear() {
    setCurrentBtn("0");
    setOperator("");
  }

  function operatorSetter(op) {}

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100vh",
    },
    display: {
      height: 230,
      width: "100%",
      backgroundColor: theme.displayColor,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      gap: 5,
    },
    buttons: {
      height: "100%",
      backgroundColor: theme.button,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: 20,
      gap: 15,
    },
    displayText: {
      fontSize: 40,
      fontWeight: 600,
      paddingVertical: 17,
    },
    buttonText: {
      width: 65,
      height: 65,
      backgroundColor: theme.displayColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    buttonContent: {
      fontSize: 25,
    },
  });

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.display}>
        <ThemedText style={styles.displayText}> {currentBtn} </ThemedText>
      </ThemedView>
      <ThemedView style={styles.buttons}>
        <TouchableOpacity style={styles.buttonText}>
          <Text
            style={[styles.buttonContent, { color: "cyan" }]}
            onPress={clear}
          >
           
            AC{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={[styles.buttonContent, { color: "cyan" }]}> +/- </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={[styles.buttonContent, { color: "cyan" }]}> % </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={[styles.buttonContent, { color: "red" }]}> ÷ </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter("7")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter("8")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter("9")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            9
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={[styles.buttonContent, { color: "red" }]}> × </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
            onPress={() => buttonSetter("4")}
          >
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter("5")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter("6")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            6
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={[styles.buttonContent, { color: "red" }]}> – </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter("1")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter("2")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter("3")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={[styles.buttonContent, { color: "red" }]}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText} onPress={deleteBtn}>
          <Ionicons
            name="refresh-outline"
            size={27}
            color={colorScheme === "dark" ? "#fff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter("0")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => buttonSetter(".")}
        >
          <Text
            style={[
              styles.buttonContent,
              { color: colorScheme === "dark" ? "#fff" : "#000" },
            ]}
          >
            .
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}>
          <Text style={[styles.buttonContent, { color: "red" }]}> = </Text>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

export default Calculator;
