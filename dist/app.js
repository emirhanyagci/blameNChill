Vue.createApp({
  data() {
    return {
      contractABI: [{"inputs":[{"internalType":"address payable","name":"tokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"arrayLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blameCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"__blameId","type":"uint256"}],"name":"boostBlame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"userName","type":"string"},{"internalType":"string","name":"yourBlame","type":"string"}],"name":"createBlame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blameId","type":"uint256"}],"name":"deleteBlame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getBlameDetail","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],

      tokenContractOwner: "0x6a411Be2a84eaf31d9F6092CA08F364Fb9Fe1350",
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
      isBack: false,
      isConnected: false,
      isApproved: false,
      userWallet: null,
      contract: null,
      tokenContract: null,
      blames: [],

      isTransaction: false,
    };
  },

  methods: {
    connectWallet() {
      if (window.ethereum) {
        alert;
        var connect = ethereum
          .request({ method: "eth_requestAccounts" })
          .then((wallet) => {
            this.userWallet = wallet[0];

            let shortWallet = `${wallet[0].substr(0, 6)}...${wallet[0].substr(
              wallet[0].length - 6,
              wallet[0].length
            )}`;
            this.isConnected = true;
            this.$refs.userWallet.textContent = shortWallet;

            localStorage.setItem("wallet", this.userWallet);
          });
      } else {
        alert("Meta Mask Yükleyin");
      }
    },
    approve() {
      this.tokenContract.methods
        .allowance(this.tokenContractOwner, this.userWallet)
        .call()
        .then((data) => {
          if (false) {
            this.isApproved = true;
          } else {
            this.tokenContract.methods
              .approve(
                "0x09C4e9088Fa3080C9A3652808002eDbc2534d576",
                "9999999999999999999"
              )
              .send({
                from: this.userWallet,
              })
              .then(() => {
                event.currentTarget.classList.add("hidden");
                this.isApproved = true;
              })
              .catch(() => {
                alert("rejected");
              });
          }
        });
    },
    async sendBlame() {
      if (this.isConnected == true) {
        this.contract.methods
          .createBlame(this.$refs.nickInput.value, this.$refs.blameInput.value)
          .send({
            from: this.userWallet,
          })
          .then(()=>{
            alert("blame gönderildi ")
          })
      }
    },
    sendBlame() {
      this.tokenContract.methods
        .allowance(
          "0x6a411Be2a84eaf31d9F6092CA08F364Fb9Fe1350",
          this.userWallet
        )
        .call()
        .then((data) => {
        });
      //nickInputblameInput
      let nickname = this.$refs.nickInput.value;
      let blameText = this.$refs.blameInput.value;
      this.contract.methods.createBlame(nickname, blameText).send({
        from: this.userWallet,
      });
    },
    boostBlame(id) {
      this.contract.methods
        .getBlameDetail(id)
        .call()
        .then((data) => {
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
  },
  async mounted() {

    const web3 = await new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(
      this.contractABI,
      "0x09C4e9088Fa3080C9A3652808002eDbc2534d576"
    );

    this.contract = contract;
    this.tokenContract = await new web3.eth.Contract(
      this.tokenContractABI,
      "0x48116fF4c9d494D5300Ac6524508Fec3B36E1734"
    );

    let blameCount =Number(await this.contract.methods.blameCount().call());
    let totalBlame = await this.contract.methods.arrayLength().call();
    for (let i = 0; i < totalBlame; i++) {
      console.log(i);
      this.contract.methods
        .getBlameDetail(i)
        .call()
        .then((data) => {
        
          if (data["0"] != '') {
           
            
            let blameOwner = data["0"];
            let blameContent = data["1"];
            let blameID = data["3"];
            let blameItemSyntax = `
            <div class="blameItem relative" >
            <div blameId="${blameID}" class="absolute hidden left-0 top-0 w-full h-full rounded-md flex justify-center space-x-5 items-center hover:bg-[rgb(124,44,229,0.9)] ">
              <div blameId="${blameID}"><i class="fa-solid fa-angles-up cursor-pointer text-[2.5rem] rounded-xl py-5 px-6 hover:bg-white hover:text-green-500"></i></div>
              <div><i class="fa-solid fa-trash-can cursor-pointer text-[2.5rem] py-5 px-6  rounded-xl hover:bg-white hover:text-red-500 "></i></div>
            </div>
            <div class="flex mb-4 ">
              <img
                src="imgs/pp.jpeg"
                class="rounded-full mr-3 min-w-[50px]"
                width="50px"
                alt=""
              />
              <div>
                <div class="font-semibold">${blameOwner}</div>
                <div>Jun 24 14:48</div>
              </div>
            </div>
            <div>
             ${blameContent}
            </div>
          </div> `;
      
            this.blames.push(blameItemSyntax);
            //add items to dom
            console.log(this.blames.length,blameCount);
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
                      this.contract.methods
                        .getBlameDetail(id)
                        .call()
                        .then((data) => {
                        });
                      this.contract.methods
                        .boostBlame(id)
                        .send({
                          from: this.userWallet,
                        })
                        .then((data) => {
                          alert("boostlandı");
                        });
                    }
                  );
                  blames.children[0].children[1].addEventListener(
                    "click",
                    (E) => {
                      this.contract.methods
                        .deleteBlame(id)
                        .send({
                          from: this.userWallet,
                        })
                        .then(() => {
                          alert("silindi");
                        });
                    }
                  );
                }
              );
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
                        .getBlameDetail(id)
                        .call()
                        .then((data) => {
                          alert("boostlandı")
                        });
                    }
                  );
                  //delete
                  blames.children[0].children[1].addEventListener(
                    "click",
                    () => {
                      blames.children[0].children[1].addEventListener(
                        "click",
                        (E) => {
                          this.contract.methods
                            .deleteBlame(id)
                            .send({
                              from: this.userWallet,
                            })
                            .then(() => {
                              alert("silindi");
                            });
                        }
                      );
                    }
                  );
                }
              );
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
          }else{
            --i;
         
          }
        });
    }

    //if user already connected
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
      this.tokenContract.methods
        .allowance(this.tokenContractOwner, this.userWallet)
        .call()
        .then(() => {
          this.isApproved = true;
        });
    }
  },
}).mount("#app");
