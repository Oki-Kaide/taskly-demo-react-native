import { Alert, View, Image, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { useStores } from "../../models"

import { Screen } from "../../components"
import { Title, Description, Row, ItemText } from "./subscription-screen.styled"
import { color } from "../../theme"
import CheckIcon from "./checkicon.png"
import Logo from "./logo.png"
import ProtonSDK from "../../utils/ProtonSDK"
import { Avatar } from "react-native-elements"

import Button from "../../components/button"
import { CURRENCY } from "@env"

const CONTAINER: ViewStyle = {
  backgroundColor: "white",
  paddingHorizontal: 30,
}

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <Row>
    <Image source={CheckIcon} />
    <ItemText>{text}</ItemText>
  </Row>
)

export const SubscriptionScreen = observer(function SubscriptionScreen() {
  const navigation = useNavigation()
  const rootStore = useStores()

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
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
        <View style={{ height: 81 }} />
        <Title>
          Welcome back{"\n"}
          {rootStore.name}.
        </Title>

        <Description>
          We’ve proud to say that we have completed all the tasks you requested. If you wish to
          continue using our server purchase another month.
        </Description>
        <View style={{ height: 81 }} />
        <CheckItem text="Filled your tax return" />
        <CheckItem text="Organized all your contacts" />
        <CheckItem text="Contact DMV about updated tags" />

        <View style={{ height: 25 }} />
        <Button
          onPress={async () => {
            try {
              const actions = [
                {
                  account: "xtokens",
                  name: "transfer",
                  authorization: [
                    {
                      actor: rootStore.actor,
                      permission: rootStore.permission,
                    },
                  ],
                  data: {
                    from: rootStore.actor,
                    to: ProtonSDK.requestAccount,
                    quantity: `5.000000 ${CURRENCY}`,
                    memo: "Taskly",
                  },
                },
              ]
              const tx = await ProtonSDK.sendTransaction(actions)
              console.log("transaction", tx)
              navigation.navigate("task")
            } catch (ex) {
              Alert.alert("Error", ex.message)
            }
          }}
          leftText="1 month of service"
          rightText="$5.00"
        />
      </Screen>
    </View>
  )
})
