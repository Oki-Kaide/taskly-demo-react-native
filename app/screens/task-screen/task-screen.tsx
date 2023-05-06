import { Avatar } from "react-native-elements"
import { View, Image } from "react-native"
import { observer } from "mobx-react-lite"
import { useNavigation } from "@react-navigation/native"
import React from "react"

import { Screen } from "../../components"
import { Title, Description, Row, AddTask, NewTask, Redline } from "./task-screen.styled"
import { color } from "../../theme"
import { useStores } from "../../models"
import Button from "../../components/button"
import Logo from "./logo.png"
import Plus from "./plus.png"
import ProtonSDK from "../../utils/ProtonSDK"

export const TaskScreen = observer(function TaskScreen() {
  const navigation = useNavigation()
  const rootStore = useStores()

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Screen preset="fixed" backgroundColor={color.transparent}>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 25 }}>
          <Image source={Logo} />
          <View style={{ flex: 1 }} />
          <Avatar
            rounded
            size={49}
            icon={{ name: "user", type: "font-awesome" }}
            source={{
              uri: rootStore.avatarUrl,
            }}
            onPress={async () => {
              ProtonSDK.logout()
              navigation.navigate("welcome")
            }}
          />
        </View>
        <View style={{ height: 117 }} />
        <Title>
          Thanks, now{"\n"}
          let's get started!
        </Title>

        <Description>
          What can we help you with? Add the tasks below that you would like help with.
        </Description>
        <View style={{ height: 30 }} />
        <NewTask>New Task</NewTask>
        <Redline />
        <View style={{ height: 22 }} />
        <Row>
          <AddTask>Add another Task</AddTask>
          <View style={{ flex: 1 }} />
          <Image source={Plus} />
        </Row>

        <View style={{ height: 51 }} />
        <Button
          onPress={async () => {
            ProtonSDK.logout()
            navigation.navigate("welcome")
          }}
          text="Finish"
        />
      </Screen>
    </View>
  )
})
