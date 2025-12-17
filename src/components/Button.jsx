import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'

const Button = ({ title, text }) => {

    const { open } = useWeb3Modal();
    const { isConnected } = useWeb3ModalAccount();

    return (
        <div className="col-xl-4 col-lg-6" onClick={() => isConnected ? null : open() }>
        <div className="cs-text_box cs-style1 cs-box_shadow text-center cs-white_bg">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        <div className="cs-height_30 cs-height_lg_30"></div>
        </div>
    );
};

export default Button;
