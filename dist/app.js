Vue.createApp({
  data() {
    return {
      contractABI: [
        {
          inputs: [
            {
              internalType: "address payable",
              name: "tokenAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AlreadyClaimed", type: "error" },
        {
          inputs: [],
          name: "arrayLength",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "blameCount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "blameOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "__blameId", type: "uint256" },
          ],
          name: "boostBlame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimBlame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "userName", type: "string" },
            { internalType: "string", name: "yourBlame", type: "string" },
          ],
          name: "createBlame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_blameId", type: "uint256" },
          ],
          name: "deleteBlame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
          name: "getBlameDetail",
          outputs: [
            { internalType: "string", name: "", type: "string" },
            { internalType: "string", name: "", type: "string" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
          name: "ownerClaim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "userClaimed",
          outputs: [
            { internalType: "uint256", name: "claimed", type: "uint256" },
            { internalType: "uint256", name: "earnedCoin", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "witdhdrawEarnings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],

      tokenContractABI: [
        {
          inputs: [
            { internalType: "uint256", name: "initialSupply", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],

      tokenContractOwner: "0x6a411Be2a84eaf31d9F6092CA08F364Fb9Fe1350",
      contractAdress: "0x4711E63E388662BD129ed14605046b4223d0625E",

      isBack: false,
      isConnected: false,
      isApproved: false,
      userWallet: null,
      contract: null,
      tokenContract: null,
      isClaimed: false,
      blames: [],

      isTransaction: false,
    };
  },

  methods: {
    async connectWallet() {
      if (window.ethereum) {
        this.showAlert(
          "This transaction may take a few seconds",
          3000,
          "#ffbf00"
        );
        var connect = ethereum
          .request({ method: "eth_requestAccounts" })
          .then((wallet) => {
            this.showAlert("Connection Success", 2000, "#21ce67");
            this.userWallet = wallet[0];

            let shortWallet = `${wallet[0].substr(0, 6)}...${wallet[0].substr(
              wallet[0].length - 6,
              wallet[0].length
            )}`;
            this.isConnected = true;
            this.$refs.userWallet.textContent = shortWallet;

            localStorage.setItem("wallet", this.userWallet);
              
            //check user cliamed or not
            this.contract.methods
              .userClaimed(this.userWallet)
              .call()
              .then((data) => {
                if(data["0"] == 1){

                  this.isClaimed = true;
                }else{
                  this.isClaimed = false;

                }
              });
            //check user approved or not

            this.tokenContract.methods
              .allowance(this.userWallet, this.contractAdress)
              .call()
              .then((data) => {
                if (data > 0) {
                  this.isApproved = true;
                }
              });
          })
          .catch(() => {
            this.showAlert("Transaction Rejected", 2300, "#f13131");
          });
      } else {
        this.showAlert("You should download metamask", 2300, "#f13131");
      }
    },

    approve() {
      this.showAlert(
        "This transaction may take a few seconds",
        3000,
        "#ffbf00"
      );
      this.tokenContract.methods
        .allowance(this.userWallet, this.contractAdress)
        .call()
        .then((data) => {
          if (data > 0) {
            this.showAlert("You Already Approved", 2000, "#21ce67");
            this.isApproved = true;
          } else {
            this.tokenContract.methods
              .approve(this.contractAdress, "9999999999999999999")
              .send({
                from: this.userWallet,
              })
              .then(() => {
                this.showAlert("Approved Succes", 2000, "#21ce67");
                this.isApproved = true;
              })
              .catch(() => {
                this.showAlert("Transaction Rejected", 2300, "#f13131");
              });
          }
        });
    },
    getToken() {
      this.showAlert(
        "This transaction may take a few seconds",
        3000,
        "#ffbf00"
      );
      const tokenAddress = '0x48116fF4c9d494D5300Ac6524508Fec3B36E1734';
      const tokenSymbol = 'BLAME';
      const tokenDecimals = 6;
      const tokenImage = './imgs/logo.png';
     
      const wasAdded =  ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: "0x48116fF4c9d494D5300Ac6524508Fec3B36E1734", // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      }).then(()=>{

        this.contract.methods
        .claimBlame()
        .send({
          from: this.userWallet,
        })
        .then(() => {
          this.showAlert("Free Tokens Claimed", 2000, "#21ce67");
          this.isClaimed = true;
        })
        .catch(() => {
          this.showAlert("Transaction Rejected", 2300, "#f13131");
        });
      })
    
    },

    sendBlame() {
      this.showAlert(
        "This transaction may take a few seconds",
        3000,
        "#ffbf00"
      );

      //nickInputblameInput
      let nickname = this.$refs.nickInput.value;
      let blameText = this.$refs.blameInput.value;
      this.contract.methods
        .createBlame(nickname, blameText)
        .send({
          from: this.userWallet,
        })
        .then(() => {
          this.showAlert("Blame Sended", 2000, "#21ce67");
        })
        .catch(() => {
          this.showAlert("Transaction Rejected", 2300, "#f13131");
        });
    },

    searchBlame() {
      Array.from(this.$refs.searchBlameWrap.children).forEach(
        (blames, index) => {
          if (
            blames.children[2].textContent
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          ) {
            blames.style.display = "block";
          } else {
            blames.style.display = "none";
          }
        }
      );
    },
    showAlert($childMessage, $stayMiliSecond, bgColor) {
      let walletAlert = this.$refs.alertBox;
      let closeWalletAlertBtn = this.$refs.closeAlertBtn;
      walletAlert.style.backgroundColor = bgColor;
      walletAlert.children[1].innerHTML = $childMessage;
      walletAlert.style.animationName = "showFTop";
      setTimeout(() => {
        walletAlert.style.animationName = "hideFTop";
      }, $stayMiliSecond);

      closeWalletAlertBtn.addEventListener("click", () => {
        walletAlert.style.animationName = "hideFTop";
      });
    },
  },
  async mounted() {
    //localStorage.clear();
    // console.log(window.innerHeight-60);

    this.$refs.blamesGeneralWrap.style.height = `${window.innerHeight}px`;

    const web3 = await new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(
      this.contractABI,
      this.contractAdress
    );

    this.contract = contract;
    this.tokenContract = await new web3.eth.Contract(
      this.tokenContractABI,
      "0x48116fF4c9d494D5300Ac6524508Fec3B36E1734"
    );
 
    //only pure blames
    let blameCount = Number(await this.contract.methods.blameCount().call());
    //blames array count with free blame
    let totalBlame = await this.contract.methods.arrayLength().call();
    for (let i = 0; i < totalBlame; i++) {
      //get every blame and add to dom
      this.contract.methods
        .getBlameDetail(i)
        .call()
        .then((data) => {
          if (data["0"] != "") {
            let blameOwner = data["0"];
            let blameContent = data["1"];
            let boostCount = data["2"];
            let blameID = data["3"];
            let blameItemSyntax = `
            <div class="blameItem relative" >
            <div blameId="${blameID}" class="absolute hidden left-0 top-0 w-full h-full rounded-md flex justify-center space-x-5 items-center hover:bg-[rgb(124,44,229,0.9)] ">
              <div blameId="${blameID}"><i class="fa-solid fa-angles-up cursor-pointer text-[2.5rem] rounded-xl py-3 px-6 hover:bg-white hover:text-green-500"></i></div>
              <div><i class="fa-solid fa-trash-can cursor-pointer text-[2.5rem] py-5 px-6  rounded-xl hover:bg-white hover:text-red-500 "></i></div>
            </div>
            <div class="flex mb-4 ">
              <img
                src="imgs/pp.jpeg"
                class="rounded-full mr-3 min-w-[50px]"
                width="50px"
                alt=""
              />
              <div class="mr-20">
                <div class="font-semibold">${blameOwner}</div>
                <div>Jun 24 14:48</div>
              </div>
              <div class="font-semibold boostCount">
              <i class="fa-solid fa-star"></i><span>${boostCount}</span> 
              </div>
            </div>
            <div>
             ${blameContent}
            </div>
          </div> `;

            this.blames.push(blameItemSyntax);
            //add items to dom
            if (this.blames.length == blameCount) {
              this.blames.forEach((item) => {
                this.$refs.blameItemContainer.innerHTML += item;
                //add click event for all boost
              });
              Array.from(this.$refs.blameItemContainer.children).forEach(
                (blames) => {
                  var id = blames.children[0].getAttribute("blameId");
                  blames.children[0].children[0].addEventListener(
                    "click",
                    (E) => {
                      this.showAlert(
                        "This transaction may take a few seconds",
                        3000,
                        "#ffbf00"
                      );

                      this.contract.methods
                        .getBlameDetail(id)
                        .call()
                        .then((data) => {});
                      this.contract.methods
                        .boostBlame(id)
                        .send({
                          from: this.userWallet,
                        })
                        .then((data) => {
                          this.showAlert("Blame Boosted", 2000, "#21ce67");
                        })
                        .catch(() => {
                          this.showAlert(
                            "Transaction Rejected",
                            2300,
                            "#f13131"
                          );
                        });
                    }
                  );
                  blames.children[0].children[1].addEventListener(
                    "click",
                    (E) => {
                      this.showAlert(
                        "This transaction may take a few seconds",
                        3000,
                        "#ffbf00"
                      );

                      this.contract.methods
                        .deleteBlame(id)
                        .send({
                          from: this.userWallet,
                        })
                        .then(() => {
                          this.showAlert("Blame Deleted", 2000, "#21ce67");
                        })
                        .catch(() => {
                          this.showAlert(
                            "Transaction Rejected",
                            2300,
                            "#f13131"
                          );
                        });
                    }
                  );
                }
              );
              let before;
              //Add to search blame
              this.blames.forEach((blames) => {
                let blameSyntax = blames;
                this.$refs.searchBlameWrap.innerHTML += blameSyntax;
              });
              Array.from(this.$refs.searchBlameWrap.children).forEach(
                (blames) => {
                  let id = blames.children[0].getAttribute("blameid");
                  blames.addEventListener("mouseenter", (E) => {
                    blames.children[0].classList.remove("hidden");
                  });
                  blames.children[0].addEventListener("mouseleave", (E) => {
                    blames.children[0].classList.add("hidden");
                  });
                  //boost
                  blames.children[0].children[0].addEventListener(
                    "click",
                    () => {
                      this.contract.methods
                        .boostBlame(id)
                        .send({
                          from: this.userWallet,
                        })
                        .then((data) => {
                          this.showAlert("Blame Boosted", 2000, "#21ce67");
                        })
                        .catch(() => {
                          this.showAlert(
                            "Transaction Rejected",
                            2300,
                            "#f13131"
                          );
                        });
                    }
                  );
                  //delete
                  blames.children[0].children[1].addEventListener(
                    "click",
                    () => {
                      this.contract.methods
                        .deleteBlame(id)
                        .send({
                          from: this.userWallet,
                        })
                        .then(() => {
                          this.showAlert("Blame Deleted", 2000, "#21ce67");
                        })
                        .catch(() => {
                          this.showAlert(
                            "Transaction Rejected",
                            2300,
                            "#f13131"
                          );
                        });
                    }
                  );
                }
              );

              //add to boosted section
              let top10 = [];
              this.blames.forEach((blames) => {
                const container = document.createElement("span");
                container.innerHTML = blames;

                let boostValue =
                  container.children[0].children[1].children[2].children[1]
                    .textContent;
                let blameId =
                  container.children[0].children[0].getAttribute("blameId");
                top10.push(boostValue);
              });
              top10.sort((a, b) => {
                return b - a;
              });
              let addedTopList = []
              top10.forEach((boostCount) => {
                
                Array.from(this.$refs.searchBlameWrap.children).forEach(
                  (blames) => {
                    if ( blames.children[1].children[2].children[1].textContent == boostCount && blames.children[1].children[2].children[1].textContent != 0 && !addedTopList.includes(blames.children[0].getAttribute("blameid"))) {
                      const cloneBlame = blames.cloneNode(true);
                      let addedBlameİd = cloneBlame.children[0].getAttribute("blameid");
                      addedTopList.push(addedBlameİd);
                      this.$refs.boostedBlames.append(cloneBlame);
                      
                    }
                  }
                );
              });

              this.blames;
              this.$refs.boostedBlames.innerHTML;
              //time is for set interval
              let time = null;
              function moveBlame(blameWrapper) {
                const blameContainer = blameWrapper;
                let blemeContainerStyle = getComputedStyle(blameContainer);
                let containerWidth = blemeContainerStyle.width.slice(0, -2);
                time = (containerWidth / 2) * 10;
                blameContainer.style.transitionDuration = `${
                  (containerWidth / 2) * 10
                }ms`;
                let letfValue = containerWidth - window.innerWidth;
                blameContainer.style.left = `-${letfValue}px`;
              }

              moveBlame(this.$refs.blameItemContainer);
              Array.from(this.$refs.blameItemContainer.children).forEach(
                (item) => {
                  item.addEventListener("mouseenter", () => {
                    item.children[0].classList.remove("hidden");
                  });
                  item.addEventListener("mouseleave", () => {
                    item.children[0].classList.add("hidden");
                  });
                }
              );
              setInterval(() => {
                if (this.isBack == false) {
                  this.$refs.blameItemContainer.style.left = `-${0}px`;
                  this.isBack = true;
                } else {
                  moveBlame(this.$refs.blameItemContainer);
                  this.isBack = false;
                }
              }, time);
            }
          } else {
            --i;
          }
        });
    }

    //check user already connected
    if (localStorage.getItem("wallet").length > 5) {
      let wallet = localStorage.getItem("wallet");
      this.userWallet = wallet;
      let shortWallet = `${wallet.substr(0, 6)}...${wallet.substr(
        wallet.length - 6,
        wallet.length
      )}`;
      this.isConnected = true;
      this.$refs.userWallet.textContent = shortWallet;
      //checkh user already approved
      this.contract.methods
      .userClaimed(this.userWallet)
      .call()
      .then((data) => {
        console.log(data["0"],this.userWallet);
        if(data["0"] == 1){
      
          this.isClaimed = true;
        }else{
          this.isClaimed = false;

        }
      });
    //check user approved or not

    this.tokenContract.methods
      .allowance(this.userWallet, this.contractAdress)
      .call()
      .then((data) => {
        if (data > 0) {
          this.isApproved = true;
        }
      });
    }

    //if user already connected
  },
}).mount("#app");
