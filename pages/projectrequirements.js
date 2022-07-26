import React, { useState } from "react";
import axios from "axios";

function ProjectRequirements() {
  const [inputField, setInputField] = useState({
    collection_name: "",
    secondary_color: "",
    primary_color: "",
    symbol: "",
    logo: "",
    website: "",
    content: "",
    network: "",
    total_supply: "",
    want_freesale: "",
    freelase_quantity: "",
    want_presale: "",
    want_whitelist: "",
    presale_quantity: "",
    presale_per_wallet: "",
    presale_price: "",
    publicsale_quantity: "",
    publicsale_per_wallet: "",
    public_sale_price: "",
    want_reveal: "",
    reveal_timeline: "",
    information: "",
  });

  ProjectRequirements = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://admin.nftconstructer.com/api/contract",
      inputField
    );
  };

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // States
  const [activeStep, setActiveStep] = useState(1);

  // Info: Branding Info
  const [primaryColorScheme, setPrimaryColorScheme] = useState("#000000");
  const [secondaryColorScheme, setSecondaryColorScheme] = useState("#555555");

  // Submits
  const brandInfoSubmit = (e) => {
    e.preventDefault();
    setActiveStep(2);
  };

  const websiteInfoSubmit = (e) => {
    e.preventDefault();
    setActiveStep(3);
  };

  const smartContractInfoSubmit = (e) => {
    e.preventDefault();
    setActiveStep(4);
  };

  const allInfoSubmit = (e) => {
    e.preventDefault();
    setActiveStep(5);
  };
  return (
    <React.Fragment>
      <main className="project-requirements-page">
        <section className="hero">
          <div className="container">
            <a
              href="javascript:void();"
              className="logo"
              onClick={() => {
                setActiveStep(1);
              }}
            >
              <img src="/images/brand/logo.webp" alt="" />
              <h1>NFT Constructer</h1>
            </a>

            <div className="steps">
              <form
                onSubmit={brandInfoSubmit}
                className={activeStep === 1 ? "step active" : "step"}
              >
                <h2>Branding Info</h2>
                <p className="subtitle">
                  To get started we need these information appropriately filled
                </p>

                <div className="input-group">
                  <label>Collection Name</label>
                  <input
                    type="text"
                    name="collection_name"
                    onChange={inputsHandler}
                    value={inputField.collection_name}
                    required
                  />
                </div>

                <div className="inputs-group">
                  <div className="input-group">
                    <label>Symbol</label>
                    <input
                      type="text"
                      placeholder="ex. MTV Morrisers - MM"
                      name="symbol"
                      onChange={inputsHandler}
                      value={inputField.symbol}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>Logo</label>

                    <div className="placeholder-input">
                      <input
                        type="file"
                        name="logo"
                        onChange={inputsHandler}
                        value={inputField.logo}
                        required
                      />
                      <button>Choose</button>
                    </div>
                  </div>
                </div>

                <div className="inputs-group">
                  <div className="input-group">
                    <label>Color Scheme</label>

                    <div className="placeholder-input">
                      <input
                        type="color"
                        name="primary_color"
                        value={inputField.primary_color}
                        onChange={(e) => {
                          setPrimaryColorScheme(e.target.value);
                          inputsHandler;
                        }}
                        required
                      />
                      <button style={{ background: primaryColorScheme }}>
                        Primary
                      </button>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Color Scheme</label>

                    <div className="placeholder-input">
                      <input
                        type="color"
                        name="secondary_color"
                        value={inputField.secondary_color}
                        onChange={(e) => {
                          setSecondaryColorScheme(e.target.value);
                          inputsHandler;
                        }}
                        required
                      />
                      <button style={{ background: secondaryColorScheme }}>
                        Secondary
                      </button>
                    </div>
                  </div>
                </div>

                <div className="btns">
                  <button className="next-btn">
                    <svg
                      width="5"
                      height="8"
                      viewBox="0 0 5 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM4 4L4.70711 4.70711C5.09763 4.31658 5.09763 3.68342 4.70711 3.29289L4 4ZM0.292893 6.29289C-0.0976311 6.68342 -0.0976311 7.31658 0.292893 7.70711C0.683417 8.09763 1.31658 8.09763 1.70711 7.70711L0.292893 6.29289ZM0.292893 1.70711L3.29289 4.70711L4.70711 3.29289L1.70711 0.292893L0.292893 1.70711ZM3.29289 3.29289L0.292893 6.29289L1.70711 7.70711L4.70711 4.70711L3.29289 3.29289Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              <form
                onSubmit={websiteInfoSubmit}
                className={activeStep === 2 ? "step active" : "step"}
              >
                <h2>Website Content</h2>
                <p className="subtitle">
                  To get started we need these information appropriately filled
                </p>

                <div className="input-group">
                  <label>Example Websites</label>
                  <input
                    type="text"
                    name="website"
                    onChange={inputsHandler}
                    value={inputField.website}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Content Document</label>

                  <div className="placeholder-input">
                    <input
                      type="file"
                      name="content"
                      onChange={inputsHandler}
                      value={inputField.content}
                      required
                    />
                    <button>Choose</button>
                  </div>
                </div>

                <div className="btns">
                  <button
                    type="button"
                    className="prev-btn"
                    onClick={() => {
                      setActiveStep(1);
                    }}
                  >
                    <svg
                      width="5"
                      height="8"
                      viewBox="0 0 5 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_21093_3467)">
                        <path
                          d="M3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.09763 7.31658 5.09763 6.68342 4.70711 6.29289L3.29289 7.70711ZM1 4L0.29289 3.29289C-0.0976299 3.68342 -0.0976299 4.31658 0.29289 4.70711L1 4ZM4.70711 1.70711C5.09763 1.31658 5.09763 0.68342 4.70711 0.29289C4.31658 -0.0976299 3.68342 -0.0976299 3.29289 0.29289L4.70711 1.70711ZM4.70711 6.29289L1.70711 3.29289L0.29289 4.70711L3.29289 7.70711L4.70711 6.29289ZM1.70711 4.70711L4.70711 1.70711L3.29289 0.29289L0.29289 3.29289L1.70711 4.70711Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_21093_3467">
                          <rect
                            width="5"
                            height="8"
                            fill="white"
                            transform="translate(5 8) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <button className="next-btn">
                    <svg
                      width="5"
                      height="8"
                      viewBox="0 0 5 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM4 4L4.70711 4.70711C5.09763 4.31658 5.09763 3.68342 4.70711 3.29289L4 4ZM0.292893 6.29289C-0.0976311 6.68342 -0.0976311 7.31658 0.292893 7.70711C0.683417 8.09763 1.31658 8.09763 1.70711 7.70711L0.292893 6.29289ZM0.292893 1.70711L3.29289 4.70711L4.70711 3.29289L1.70711 0.292893L0.292893 1.70711ZM3.29289 3.29289L0.292893 6.29289L1.70711 7.70711L4.70711 4.70711L3.29289 3.29289Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              <form
                onSubmit={smartContractInfoSubmit}
                className={activeStep === 3 ? "step active" : "step"}
              >
                <h2>Smart Contract Info</h2>
                <p className="subtitle">
                  To get started we need these information appropriately filled
                </p>

                <div className="input-group">
                  <label>Network</label>
                  <select
                    required
                    name="network"
                    onChange={inputsHandler}
                    value={inputField.network}
                  >
                    <option value="" disabled selected>
                      N/A
                    </option>
                    <option value="Ethereum">Ethereum</option>
                    <option value="Polygon">Polygon</option>
                    <option value="MultiVAC">MultiVAC</option>
                    <option value="Solana">Solana</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Total Supply</label>
                  <input
                    type="text"
                    name="total_supply"
                    onChange={inputsHandler}
                    value={inputField.total_supply}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Do you want freesale?</label>
                  <select
                    required
                    name="want_freesale"
                    onChange={inputsHandler}
                    value={inputField.want_freesale}
                  >
                    <option value="" disabled selected>
                      N/A
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Freesale quantity</label>
                  <input
                    type="text"
                    name="freelase_quantity"
                    onChange={inputsHandler}
                    value={inputField.freelase_quantity}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Do you want presale?</label>
                  <select
                    required
                    name="want_presale"
                    onChange={inputsHandler}
                    value={inputField.want_presale}
                  >
                    <option value="" disabled selected>
                      N/A
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Do you want whitelist on presale?</label>
                  <select
                    required
                    name="want_whitelist"
                    onChange={inputsHandler}
                    value={inputField.want_whitelist}
                  >
                    <option value="" disabled selected>
                      N/A
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Presale quantity</label>
                  <input
                    type="text"
                    name="presale_quantity"
                    onChange={inputsHandler}
                    value={inputField.presale_quantity}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Presale per wallet & transaction limit</label>
                  <input
                    type="text"
                    name="presale_per_wallet"
                    onChange={inputsHandler}
                    value={inputField.presale_per_wallet}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Presale price</label>
                  <input
                    type="text"
                    name="presale_price"
                    onChange={inputsHandler}
                    value={inputField.presale_price}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Publicsale quantity</label>
                  <input
                    type="text"
                    name="publicsale_quantity"
                    onChange={inputsHandler}
                    value={inputField.publicsale_quantity}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Publicsale per wallet & transaction limit</label>
                  <input
                    type="text"
                    name="publicsale_per_wallet"
                    onChange={inputsHandler}
                    value={inputField.publicsale_per_wallet}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Publicsale price</label>
                  <input
                    type="text"
                    name="public_sale_price"
                    onChange={inputsHandler}
                    value={inputField.public_sale_price}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Do you want reveal feature?</label>
                  <select
                    required
                    name="want_reveal"
                    onChange={inputsHandler}
                    value={inputField.want_reveal}
                  >
                    <option value="" disabled selected>
                      N/A
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Reveal timeline</label>
                  <input
                    type="text"
                    name="reveal_timeline"
                    onChange={inputsHandler}
                    value={inputField.reveal_timeline}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Additional Information</label>
                  <input
                    type="text"
                    name="information"
                    onChange={inputsHandler}
                    value={inputField.information}
                    required
                  />
                </div>

                <div className="btns">
                  <button
                    type="button"
                    className="prev-btn"
                    onClick={() => {
                      setActiveStep(2);
                    }}
                  >
                    <svg
                      width="5"
                      height="8"
                      viewBox="0 0 5 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_21093_3467)">
                        <path
                          d="M3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.09763 7.31658 5.09763 6.68342 4.70711 6.29289L3.29289 7.70711ZM1 4L0.29289 3.29289C-0.0976299 3.68342 -0.0976299 4.31658 0.29289 4.70711L1 4ZM4.70711 1.70711C5.09763 1.31658 5.09763 0.68342 4.70711 0.29289C4.31658 -0.0976299 3.68342 -0.0976299 3.29289 0.29289L4.70711 1.70711ZM4.70711 6.29289L1.70711 3.29289L0.29289 4.70711L3.29289 7.70711L4.70711 6.29289ZM1.70711 4.70711L4.70711 1.70711L3.29289 0.29289L0.29289 3.29289L1.70711 4.70711Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_21093_3467">
                          <rect
                            width="5"
                            height="8"
                            fill="white"
                            transform="translate(5 8) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <button className="next-btn">
                    <svg
                      width="5"
                      height="8"
                      viewBox="0 0 5 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM4 4L4.70711 4.70711C5.09763 4.31658 5.09763 3.68342 4.70711 3.29289L4 4ZM0.292893 6.29289C-0.0976311 6.68342 -0.0976311 7.31658 0.292893 7.70711C0.683417 8.09763 1.31658 8.09763 1.70711 7.70711L0.292893 6.29289ZM0.292893 1.70711L3.29289 4.70711L4.70711 3.29289L1.70711 0.292893L0.292893 1.70711ZM3.29289 3.29289L0.292893 6.29289L1.70711 7.70711L4.70711 4.70711L3.29289 3.29289Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              <form
                onSubmit={allInfoSubmit}
                className={activeStep === 4 ? "step active" : "step"}
              >
                <h2>Confirm & Submit</h2>
                <p className="subtitle">
                  To get started we need these information appropriately filled
                </p>

                <button className="cta-btn">Submit Requirements</button>

                <div className="btns">
                  <button
                    type="button"
                    className="prev-btn"
                    onClick={() => {
                      setActiveStep(3);
                    }}
                  >
                    <svg
                      width="5"
                      height="8"
                      viewBox="0 0 5 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_21093_3467)">
                        <path
                          d="M3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.09763 7.31658 5.09763 6.68342 4.70711 6.29289L3.29289 7.70711ZM1 4L0.29289 3.29289C-0.0976299 3.68342 -0.0976299 4.31658 0.29289 4.70711L1 4ZM4.70711 1.70711C5.09763 1.31658 5.09763 0.68342 4.70711 0.29289C4.31658 -0.0976299 3.68342 -0.0976299 3.29289 0.29289L4.70711 1.70711ZM4.70711 6.29289L1.70711 3.29289L0.29289 4.70711L3.29289 7.70711L4.70711 6.29289ZM1.70711 4.70711L4.70711 1.70711L3.29289 0.29289L0.29289 3.29289L1.70711 4.70711Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_21093_3467">
                          <rect
                            width="5"
                            height="8"
                            fill="white"
                            transform="translate(5 8) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </form>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className={activeStep === 5 ? "step active" : "step"}
              >
                <h2>Thanks,</h2>
                <p className="subtitle">
                  your project requirements have been submitted
                </p>

                <button className="cta-btn">Emergency Contact</button>
              </form>
            </div>

            <p className="copyright">
              &copy; 2022 NFT Constructer All Rights Reserved
            </p>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default ProjectRequirements;
