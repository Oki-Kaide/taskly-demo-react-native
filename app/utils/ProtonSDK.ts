import { ConnectWallet, LinkSession, ProtonLink } from "@proton/react-native-sdk"
import {CHAIN_ID, ENDPOINT, REQUEST_ACCOUNT, RETURN_URL} from "@env";


class ProtonSDK {
  chainId: string
  endpoints: string[]
  requestAccount: string
  session: LinkSession
  link: ProtonLink

  constructor() {
    this.chainId = CHAIN_ID;
    this.endpoints = [ENDPOINT] // Multiple for fault tolerance
    this.requestAccount = REQUEST_ACCOUNT // optional
    this.session = null
    this.link = null
  }

  login = async () => {
    const { session, link } = await ConnectWallet({
      linkOptions: { chainId: this.chainId, endpoints: this.endpoints },
      transportOptions: {
        requestAccount: this.requestAccount,
        getReturnUrl: () => RETURN_URL,
      },
    })

    this.link = link
    this.session = session
    return { auth: session.auth, accountData: session.accountData[0] }
  }

  sendTransaction = async (actions: any) => {
    return this.session.transact({ actions: actions }, { broadcast: true })
  }

  logout = async () => {
    await this.link.removeSession(this.requestAccount, this.session.auth)
    this.session = null
    this.link = null
  }

  restoreSession = async () => {
    try {
      const { link, session } = await ConnectWallet({
        linkOptions: { chainId: this.chainId, endpoints: this.endpoints, restoreSession: true },
        transportOptions: {
          requestAccount: this.requestAccount,
          getReturnUrl: () => RETURN_URL,
        },
      })
      this.link = link
      this.session = session
      console.log("session", this.session)
      if (session) {
        return { auth: this.session.auth, accountData: this.session.accountData[0] }
      } else {
        return { auth: { actor: "", permission: "" }, accountData: {} }
      }
    } catch (e) {
      return e
    }
  }
}

const protonSDK = new ProtonSDK()

export default protonSDK
