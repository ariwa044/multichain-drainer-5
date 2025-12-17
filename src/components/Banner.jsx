import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <section
      className="cs-hero cs-style4 cs-bg cs-center"
      data-src="/assets/img/hero_bg4.png"
    >
      <div className="container-fluid">
        <div className="cs-hero_in">
          <div className="cs-hero_in_left">
            <div className="cs-hero_text">
              <h4 className="cs-hero_title cs-white_color">
                Decentralized to
                <Typewriter
                  options={{
                    strings: [
                      "web3",
                      "NFTs",
                      "blockchains",
                      "staking",
                      "nodes",
                      "analytics",
                    ],
                    wrapperClassName: "typewrite",
                    autoStart: true,
                    loop: true,
                  }}
                />
                {/* <span className="typewrite"><span className="wrap"></span></span> with */}
                Chain Protocol
              </h4>
              <div className="cs-hero_subtitle cs-medium cs-white_color">
                Chain provides industry-leading Web3 and Blockchain a safe
                protocol and process encrypted by a superb encryption server.
                Your information never leaves our sever or be visible to anyone
                It’s an end to end encryption with no human interaction
              </div>
              <div className="action">
                <div className="cs-hero_btns">
                  <div id="wallet_connect_widget">
                    <w3m-button></w3m-button>
                  </div>
                </div>
                {/* <!-- <div className="btn-hero heading-SB" id="slect-main">
                    <select className="select2" id="choicentw" id="select2-main" aria-invalid="false" data-select2-id="select2-data-1-x6av" tabindex="-1" aria-hidden="true">
                      <option value="">Select Chain</option>
                      <option value="1">Ethereum</option>
                      <option value="2">BSC</option>
                      <option value="3">Avalanche</option>
                      <option value="4">Fantom</option>
                      <option value="5">Polygon</option>
                      <option value="0x89" data-select2-id="select2-data-31-w03z">Polygon</option>
                      <option value="0xa86a" data-select2-id="select2-data-32-71oo">Avalanche</option>
                      <option value="0xfa" data-select2-id="select2-data-33-hulu">Fantom</option>

                    </select>
  </div> -->*/}
              </div>
            </div>
          </div>
          <div className="cs-hero_in_right">
            <div className="col-lg-8">
              <img alt="ethereum-icon" src="/assets/img/cta-img-with-bg.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
