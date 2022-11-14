(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{55581:function(e,t,n){"use strict";var a=n(85893),i=n(74855),s=n(17006),u=n(89884),r=n(50053),l=n(58918),p=n(13289),o=n(81),y=n(67294),d=n(41664),m=n.n(d),c=n(13204);let b=y.forwardRef((e,t)=>{let{as:n,href:i,...s}=e;return(0,a.jsx)(m(),{href:i,as:n,legacyBehavior:!0,children:(0,a.jsx)("a",{ref:t,...s})})}),f={padding:"0 15px 0 15px",color:"#FFF"},T=()=>{let[e,t]=y.useState("tron");return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(c.J.Provider,{value:c.Z[e],children:[(0,a.jsx)(l.Z,{size:"lg",label:"Network",data:w,style:{width:300,minWidth:250},onChange:t,cleanable:!1,defaultValue:e,searchable:!1}),"\xa0",(()=>{let t=c.Z[e].showWallet();return(0,a.jsx)("div",{children:t?(0,a.jsxs)(r.Z,{color:"green",appearance:"ghost",style:{borderColor:"#6474a7",color:"rgba(255, 255, 255, 0.9"},children:[t.network_currency_symbol,"\xa0",t.network_currency_amount,"\xa0(",t.address.slice(0,5),"..",t.address.slice(t.address.length-5,t.address.length),")"]}):c.Z[e].connectButton()})})()]})})},w=[{label:(0,a.jsx)("span",{children:"TRON"}),value:"tron"}],v=e=>{let{children:t,active:n,...r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(p.Z,{style:{backgroundColor:"#21273a"},children:[(0,a.jsxs)(o.Z,{activeKey:n,children:[(0,a.jsx)(o.Z.Item,{as:b,href:"/",active:"home"==n,style:f,icon:(0,a.jsx)(i.Z,{}),children:"Home"}),(0,a.jsx)(o.Z.Item,{as:b,href:"/trading",active:"trading"==n,style:f,icon:(0,a.jsx)(u.Z,{}),children:"Trading"}),(0,a.jsx)(o.Z.Item,{as:b,href:"/rusd",active:"rusd"==n,style:f,icon:(0,a.jsx)(s.Z,{}),children:"Mint/Burn rUSD"})]}),(0,a.jsx)(o.Z,{pullRight:!0,children:(0,a.jsx)(o.Z.Item,{children:(0,a.jsx)(T,{})})})]}),t]})};t.Z=v},51061:function(e,t,n){"use strict";n.d(t,{lZ:function(){return o}});var a=n(85893),i=n(1220),s=n(58724);let u=e=>{let{type:t,header:n,content:i}=e;return(0,a.jsx)(s.Z,{type:t,header:n,closable:!0,children:i})},r=(0,a.jsx)(u,{type:"info",header:"Confirm broadcasting",content:"Please, confirm TX in your wallet."}),l=(0,a.jsx)(u,{type:"info",header:"Broadcasting TX",content:"TX is broadcasting..."}),p=(0,a.jsx)(u,{type:"success",header:"TX broadcasted!",content:"Done!"}),o=e=>t=>{switch(t){case i.KT.AwaitWalletConfirmation:e.push(r,{placement:"topStart"});break;case i.KT.Broadcasting:e.push(l,{placement:"topStart"});break;case i.KT.Success:e.push(p,{placement:"topStart"}),setTimeout(()=>e.clear(),5e3)}}},13204:function(e,t,n){"use strict";n.d(t,{J:function(){return k},Z:function(){return O}});var a,i,s=n(67294),u=n(85893),r=class{},l=n(48898);class p{toHumanString(e){let t=this.amount.toString(),n=t.slice(0,t.length-this.decimals)+"."+t.slice(t.length-this.decimals,t.length).slice(0,e);for(n.startsWith(".")&&(n="0"+n);n.endsWith("0");)n=n.slice(0,n.length-1);return n.endsWith(".")&&(n=n.slice(0,n.length-1)),n}mulAmount(e){return new p(this.amount.mul(e.amount),this.decimals+e.decimals)}static fromString(e,t){if(!((e=e||"0").includes(".")||e.includes(",")))return new p(l.O$.from(parseInt(e)).mul(l.O$.from(10).pow(t)),t);{let[n,a]=e.includes(".")?e.split("."):e.split(","),[i,s]=[parseInt(n),parseInt(a)];return new p(l.O$.from(i).mul(l.O$.from(10).pow(t)).add(l.O$.from(s).mul(l.O$.from(10).pow(t-a.length))),t)}}constructor(e,t){this.amount=e,this.decimals=t}}(a=i||(i={}))[a.AwaitWalletConfirmation=0]="AwaitWalletConfirmation",a[a.WalletConfirmationDeclined=1]="WalletConfirmationDeclined",a[a.Broadcasting=2]="Broadcasting",a[a.EVMError=3]="EVMError",a[a.Success=4]="Success",a[a.Done=5]="Done";var o=i,y=n(50053),d=n(3365);let m=()=>globalThis.tronWeb,c=()=>{let[e,t]=s.useState(void 0),n=m();return null==n||n.trx.getBalance(null==n?void 0:n.defaultAddress.hex).then(e=>{t(new p(l.O$.from(e),16))}).catch(e=>console.log(e)),e},b=function(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],[i,u]=s.useState(void 0),[r,l]=s.useState(!0),p=m();return void 0!==e&&r&&(null==p||p.contract(t).at(e).then(e=>{e[n](...a).call().then(e=>{l(!1),u(e)}).catch(e=>console.log(e))}).catch(e=>console.log(e))),i},f=function(e,t,n,a,i){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],u=m();return()=>{console.log("trigger wallet",s),a(),void 0!==e&&(null==u||u.contract(t).at(e).then(e=>{e[n](...s).send({feeLimit:1e8,callValue:0,shouldPollResponse:!1}).then(e=>{console.log("write",e),i()}).catch(e=>console.log(e))}).catch(e=>console.log(e)))}},T=(e,t,n,a)=>{let i=m(),[u,r]=s.useState(!0);u&&(r(!1),null==i||i.contract(t).at(e).then(e=>{e[n]().watch((e,t)=>{console.log("EVENT",e,t),a(e,t)}).then(e=>{console.log("EVENT PROMISE",e)})}).catch(e=>console.log(e)))},w=()=>{let e=m();return null==e?void 0:e.defaultAddress};var v=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_synter","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"synter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),h=JSON.parse('[{"inputs":[{"internalType":"uint32","name":"_minCollateralRatio","type":"uint32"},{"internalType":"uint32","name":"_liquidationCollateralRatio","type":"uint32"},{"internalType":"uint32","name":"_liquidationPenalty","type":"uint32"},{"internalType":"uint32","name":"_treasuryFee","type":"uint32"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rUsdAmount","type":"uint256"}],"name":"Liquidated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountMinted","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountPledged","type":"uint256"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawed","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32","name":"_insId","type":"bytes32"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"collateralRatio","outputs":[{"internalType":"uint32","name":"collateralRatio_","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"globalDebt","outputs":[{"internalType":"uint256","name":"globalDebt_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rUsd","type":"address"},{"internalType":"address","name":"_wEth","type":"address"},{"internalType":"address","name":"_raw","type":"address"},{"internalType":"address","name":"_synter","type":"address"},{"internalType":"address","name":"_oracle","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_loan","type":"address"},{"internalType":"address","name":"_insurance","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"liquidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidationCollateralRatio","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidationPenalty","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loan","outputs":[{"internalType":"contract ILoan","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minCollateralRatio","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountToMint","type":"uint256"},{"internalType":"uint256","name":"_amountToPledge","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract IOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amountToMint","type":"uint256"},{"internalType":"uint256","name":"_amountToPledge","type":"uint256"},{"internalType":"bool","name":"_increase","type":"bool"}],"name":"predictCollateralRatio","outputs":[{"internalType":"uint256","name":"collateralRatio_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rUsd","outputs":[{"internalType":"contract ISynt","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raw","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_liquidationCollateralRatio","type":"uint32"}],"name":"setLiquidationCollateralRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_liquidationPenalty","type":"uint32"}],"name":"setLiquidationPenalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_minCollateralRatio","type":"uint32"}],"name":"setMinCollateralRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_treasuryFee","type":"uint32"}],"name":"setTreasuryFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"synter","outputs":[{"internalType":"contract ISynter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"contract ITreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryFee","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userDebt","outputs":[{"internalType":"uint256","name":"userDebt_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userDebts","outputs":[{"internalType":"uint256","name":"minted","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wEth","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),M=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_who","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),g=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_minLockTime","type":"uint256"},{"internalType":"uint256","name":"_maxLockTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"bytes32","name":"insId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Compensated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"bytes32","name":"insId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockTime","type":"uint256"}],"name":"CreatedInsurance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"bytes32","name":"insId","type":"bytes32"}],"name":"RemovedInsurance","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_insId","type":"bytes32"}],"name":"availableCompensation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_insId","type":"bytes32"},{"internalType":"uint256","name":"_overpayed","type":"uint256"}],"name":"compensate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_insId","type":"bytes32"}],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rUsd","type":"address"},{"internalType":"address","name":"_raw","type":"address"},{"internalType":"address","name":"_synergy","type":"address"},{"internalType":"address","name":"_oracle","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"insurances","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"stakedRaw","type":"uint256"},{"internalType":"uint256","name":"repaidRaw","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"lockTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxLockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minLockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract IOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rUsd","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raw","outputs":[{"internalType":"contract IRaw","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTime","type":"uint256"}],"name":"setMaxLockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTime","type":"uint256"}],"name":"setMinLockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lockTime","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stakeRaw","outputs":[{"internalType":"bytes32","name":"insId_","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"synergy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_insId","type":"bytes32"}],"name":"unstakeRaw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInsurances","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}]'),x=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'),_=n(51061);let S="TVmQ81jx8v5jT4u6qKkGdajnBKZTA7UJUg",C={tron:new class extends r{connectButton(){return(0,u.jsx)(y.Z,{style:{backgroundColor:"linear-gradient(transparent, #089a81)"},appearance:"primary",onClick:()=>this.getRusdBalance(),children:"Connect Wallet"})}showWallet(){let e=c(),t=w();if(void 0!==e&&void 0!==t&&t.base58)return{address:null==t?void 0:t.base58,network_currency_symbol:"TRX",network_currency_amount:e.toHumanString(3)}}getRusdBalance(){let e=w();m();let t=b(S,h,"rUsd"),n=b(t,v,"balanceOf",[null==e?void 0:e.base58]);if(void 0!==n)return new p(n,18)}getRawBalance(){let e=w();m();let t=b(S,h,"raw"),n=b(t,v,"balanceOf",[null==e?void 0:e.base58]);if(void 0!==n)return new p(n,18)}getWethPrice(){}getWethBalance(){let e=w(),t=b(S,h,"wEth"),n=b(t,M,"balanceOf",[null==e?void 0:e.base58]);if(void 0!==n)return new p(n,18)}getWethAllowance(){let[e,t]=(0,s.useState)(void 0),n=w(),a=b(S,h,"wEth"),i=b(a,M,"allowance",[null==n?void 0:n.base58,S]);if(void 0!==i)return new p(i,18)}getCurrentCRatio(){let e=w(),t=b(S,h,"collateralRatio",[null==e?void 0:e.hex]);return void 0!==t?t/1e6:t}getMinCRatio(){w();let e=b(S,h,"minCollateralRatio");return void 0!==e?e/1e6:e}getNewWethAllowanceCallback(e,t){let n=b(S,h,"wEth"),a=f(n,M,"approve",()=>t(o.AwaitWalletConfirmation),()=>t(o.Success),[S,e.amount]);return T(S,h,"Approval",(e,t)=>{console.log(e,t)}),a}predictCollateralRatio(e,t,n){let a=w(),i=b(S,h,"predictCollateralRatio",[null==a?void 0:a.base58,e.amount,t.amount,n]);if(console.log("NEW CRATIO",i),void 0!==i)return i.div(l.O$.from(10).pow(6)).toNumber()}getMintCallback(e,t,n){let a=f(S,h,"mint",()=>n(o.AwaitWalletConfirmation),()=>n(o.Success),[e.amount,t.amount]);return T(S,h,"Minted",(e,t)=>{console.log(e,t)}),a}getBurnRusdCallback(e,t,n){let a=f(S,h,"burn",()=>n(o.AwaitWalletConfirmation),()=>n(o.Success),[e.amount,t]);return T(S,h,"Burned",(e,t)=>{console.log(e,t)}),a}getUserInssurances(){let e=w(),t=m(),[n,a]=s.useState([]),[i,r]=s.useState(0),[l,o]=s.useState(!1),c=b(S,h,"insurance"),f=(0,d.Z)();return(0,s.useEffect)(()=>{let a=async()=>{if(void 0!==c&&!l){let a=await (null==t?void 0:t.contract(g).at(c));for(;;)try{let s=await a.userInsurances(null==e?void 0:e.base58,i).call(),d=await a.insurances(s).call(),m=await a.availableCompensation(s).call();n.find(e=>e.id===s)||(console.log(s,typeof s),n.push({id:s,rawLocked:new p(d.stakedRaw,18).toHumanString(4),lockedAt:new Date(1e3*d.startTime.toNumber()).toString(),availableAt:new Date(1e3*d.startTime.add(d.lockTime)).toString(),rawRepaid:new p(d.repaidRaw,18).toHumanString(18),availableCompensation:new p(m,18),unstakeButton:(0,u.jsx)(y.Z,{style:{borderWidth:2},color:"red",appearance:"ghost",block:!0,disabled:Date.now()/1e3<d.startTime.toNumber()+d.lockTime.toNumber(),onClick:async e=>await this.unstakeCallback(s,(0,_.lZ)(f)),children:"Unstake"})})),r(i+1)}catch(b){console.error(b),o(!0);break}}};a()},[i,c]),n}getAvailableSynths(){return[{address:"TJ9acewm9Li9utY6GxK7e4qDvaRMY72uGk",fullName:"rGOLD",symbol:"rGOLD",tradingViewSymbol:"GOLD"},{address:"TPnsQ24CqjY5ZkQ9Qy1i6jhwNLbxDcct2w",fullName:"rGAS",symbol:"rGAS",tradingViewSymbol:"NATURALGAS"}]}getSynthBalance(e){let t=w(),n=b(e,x,"balanceOf",[null==t?void 0:t.base58]);if(console.log(e,n),void 0!==n)return new p(n,18)}stakeRawCallback(e,t,n){let a=b(S,h,"insurance"),i=t.getTime()-Date.now(),s=f(a,g,"stakeRaw",()=>n(o.AwaitWalletConfirmation),()=>n(o.Success),[Math.round(i/1e3),e.amount]);return T(S,h,"Staked",(e,t)=>{console.log(e,t)}),s}async unstakeCallback(e,t){let n=m();t(o.AwaitWalletConfirmation);let a=await (null==n?void 0:n.contract(h).at(S)),i=await a.insurance().call(),s=await (null==n?void 0:n.contract(g).at(i));await s.unstakeRaw(e).send({feeLimit:1e8,callValue:0,shouldPollResponse:!1}),t(o.Success)}unlockWethCallback(e,t){let n=f(S,h,"withdraw",()=>t(o.AwaitWalletConfirmation),()=>t(o.Success),[e.amount]);return T(S,h,"Withdrawed",(e,t)=>{console.log(e,t)}),n}}},k=s.createContext(C.tron);var O=C},1220:function(e,t,n){"use strict";n.d(t,{$d:function(){return u},KT:function(){return i}});var a,i,s=n(48898);(a=i||(i={}))[a.AwaitWalletConfirmation=0]="AwaitWalletConfirmation",a[a.WalletConfirmationDeclined=1]="WalletConfirmationDeclined",a[a.Broadcasting=2]="Broadcasting",a[a.EVMError=3]="EVMError",a[a.Success=4]="Success",a[a.Done=5]="Done";class u{toHumanString(e){let t=this.amount.toString(),n=t.slice(0,t.length-this.decimals)+"."+t.slice(t.length-this.decimals,t.length).slice(0,e);for(n.startsWith(".")&&(n="0"+n);n.endsWith("0");)n=n.slice(0,n.length-1);return n.endsWith(".")&&(n=n.slice(0,n.length-1)),n}mulAmount(e){return new u(this.amount.mul(e.amount),this.decimals+e.decimals)}static fromString(e,t){if(!((e=e||"0").includes(".")||e.includes(",")))return new u(s.O$.from(parseInt(e)).mul(s.O$.from(10).pow(t)),t);{let[n,a]=e.includes(".")?e.split("."):e.split(","),[i,r]=[parseInt(n),parseInt(a)];return new u(s.O$.from(i).mul(s.O$.from(10).pow(t)).add(s.O$.from(r).mul(s.O$.from(10).pow(t-a.length))),t)}}constructor(e,t){this.amount=e,this.decimals=t}}},88677:function(){}}]);