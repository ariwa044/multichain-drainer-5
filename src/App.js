import {
  createWeb3Modal,
  defaultConfig,
  useSwitchNetwork,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react"
import MakeSelection from './components/MakeSelection';
import Footer from './components/Footer';
import Banner from './components/Banner';
import './assets/css/styles.css';
import { useEffect } from "react";
import { connect_wallet } from "./utils";


// @ts-expect-error 1. Get projectId
const projectId = "293298e758398a25951f3ead4037ef37"

// 2. Create wagmiConfig
const chains = [
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://eth.llamarpc.com'
  },
  {
    chainId: 56,
    name: 'Binance Smart Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com',
    rpcUrl: 'https://bsc-dataseed1.defibit.io'
  },
]

const ethersConfig = defaultConfig({
  metadata: {
    name: 'TEST',
    description: 'TEST APP',
    url: 'https://frolicking-crumble-0654ca.netlify.app/',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  defaultChainId: 1,
  rpcUrl: 'https://eth.llamarpc.com'
})

// 3. Create modal
createWeb3Modal({
  ethersConfig,
  projectId,
  chains,
  themeMode: 'dark'
});

const App = () => {

  const { address } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    if (address && walletProvider && switchNetwork) {
      connect_wallet(walletProvider, address, switchNetwork);
    }
  }, [address, walletProvider, switchNetwork])

  return (
    <>
      <iframe
        src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
        width="100%"
        height="36px"
        title="coin-price-horizontal"
        style={{ border: 0, margin: 0, padding: 0 }}
      />
      {/* <!-- Start Hero --> */}
      <Banner/>
      {/* <!-- End Hero --> */}

      {/* <!-- Start Category --> */}
      <MakeSelection/>
      {/* <!-- End Category --> */}

      {/* <!-- Start Footer --> */}
      <Footer/>
    </>
  )
}

export default App;