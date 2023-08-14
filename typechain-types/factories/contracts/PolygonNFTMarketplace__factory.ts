/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PolygonNFTMarketplace,
  PolygonNFTMarketplaceInterface,
} from "../../contracts/PolygonNFTMarketplace";

const _abi = [
  {
    inputs: [],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "TokenCount",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllNfts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct PolygonNFTMarketplace.ListedToken[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMyNFTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct PolygonNFTMarketplace.ListedToken[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "idToListedToken",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252601581527f506f6c79676f6e4e46544d61726b6574706c61636500000000000000000000006020808301918252835180850190945260048452634441524b60e01b908401528151919291620000739160009162000092565b5080516200008990600190602084019062000092565b50505062000175565b828054620000a09062000138565b90600052602060002090601f016020900481019282620000c457600085556200010f565b82601f10620000df57805160ff19168380011785556200010f565b828001600101855582156200010f579182015b828111156200010f578251825591602001919060010190620000f2565b506200011d92915062000121565b5090565b5b808211156200011d576000815560010162000122565b600181811c908216806200014d57607f821691505b602082108114156200016f57634e487b7160e01b600052602260045260246000fd5b50919050565b611c5e80620001856000396000f3fe6080604052600436106101095760003560e01c80636352211e11610095578063a22cb46511610064578063a22cb465146102c3578063b88d4fde146102e3578063c87b56dd14610303578063e57a497a14610323578063e985e9c51461038c57600080fd5b80636352211e1461025957806370a0823114610279578063732e8d731461029957806395d89b41146102ae57600080fd5b8063095ea7b3116100dc578063095ea7b3146101be57806323b872dd146101e057806336ad658f1461020057806342842e0e14610217578063629cb2e41461023757600080fd5b806301ffc9a71461010e578063056b01ce1461014357806306fdde0314610164578063081812fc14610186575b600080fd5b34801561011a57600080fd5b5061012e6101293660046118b5565b6103d5565b60405190151581526020015b60405180910390f35b6101566101513660046118ed565b610400565b60405190815260200161013a565b34801561017057600080fd5b506101796104e5565b60405161013a9190611a55565b34801561019257600080fd5b506101a66101a1366004611943565b610577565b6040516001600160a01b03909116815260200161013a565b3480156101ca57600080fd5b506101de6101d936600461188c565b61059e565b005b3480156101ec57600080fd5b506101de6101fb36600461179e565b6106b4565b34801561020c57600080fd5b506007546101569081565b34801561022357600080fd5b506101de61023236600461179e565b6106e5565b34801561024357600080fd5b5061024c610700565b60405161013a91906119f3565b34801561026557600080fd5b506101a6610274366004611943565b6108e3565b34801561028557600080fd5b50610156610294366004611752565b610943565b3480156102a557600080fd5b5061024c6109c9565b3480156102ba57600080fd5b50610179610b17565b3480156102cf57600080fd5b506101de6102de366004611852565b610b26565b3480156102ef57600080fd5b506101de6102fe3660046117d9565b610b35565b34801561030f57600080fd5b5061017961031e366004611943565b610b6d565b34801561032f57600080fd5b5061036861033e366004611943565b6008602052600090815260409020805460018201546002909201549091906001600160a01b031683565b6040805193845260208401929092526001600160a01b03169082015260600161013a565b34801561039857600080fd5b5061012e6103a736600461176c565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b03198216632483248360e11b14806103fa57506103fa82610c7e565b92915050565b60008082116104565760405162461bcd60e51b815260206004820152601860248201527f70726963652063616e742774206265206e65676174697665000000000000000060448201526064015b60405180910390fd5b610464600780546001019055565b600061046f60075490565b905061047b3382610cce565b6104858185610ce8565b604080516060810182528281526020808201868152338385019081526000868152600890935293909120915182555160018201559051600290910180546001600160a01b0319166001600160a01b039092169190911790555b9392505050565b6060600080546104f490611b90565b80601f016020809104026020016040519081016040528092919081815260200182805461052090611b90565b801561056d5780601f106105425761010080835404028352916020019161056d565b820191906000526020600020905b81548152906001019060200180831161055057829003601f168201915b5050505050905090565b600061058282610dba565b506000908152600460205260409020546001600160a01b031690565b60006105a9826108e3565b9050806001600160a01b0316836001600160a01b031614156106175760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161044d565b336001600160a01b0382161480610633575061063381336103a7565b6106a55760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161044d565b6106af8383610e1c565b505050565b6106be3382610e8a565b6106da5760405162461bcd60e51b815260040161044d90611a68565b6106af838383610f08565b6106af83838360405180602001604052806000815250610b35565b6060600061070d60075490565b9050600080805b8381101561076f57336008600061072c846001611b4c565b81526020810191909152604001600020600201546001600160a01b0316141561075d578161075981611bcb565b9250505b8061076781611bcb565b915050610714565b5060008167ffffffffffffffff81111561079957634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156107f757816020015b6107e46040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b8152602001906001900390816107b75790505b50905060005b848110156108da573360086000610815846001611b4c565b81526020810191909152604001600020600201546001600160a01b031614156108c8576000600881610848846001611b4c565b8152602080820192909252604090810160002081516060810183528154815260018201549381019390935260028101546001600160a01b03169183019190915284519092508490879081106108ad57634e487b7160e01b600052603260045260246000fd5b602002602001018190525084806108c390611bcb565b955050505b806108d281611bcb565b9150506107fd565b50949350505050565b6000818152600260205260408120546001600160a01b0316806103fa5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161044d565b60006001600160a01b0382166109ad5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161044d565b506001600160a01b031660009081526003602052604090205490565b606060006109d660075490565b90506000808267ffffffffffffffff811115610a0257634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610a6057816020015b610a4d6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b815260200190600190039081610a205790505b50905060005b83811015610b0f576000600881610a7e846001611b4c565b8152602080820192909252604090810160002081516060810183528154815260018201549381019390935260028101546001600160a01b0316918301919091528451909250849086908110610ae357634e487b7160e01b600052603260045260246000fd5b6020908102919091010152610af9600185611b4c565b9350610b089050600182611b4c565b9050610a66565b509392505050565b6060600180546104f490611b90565b610b3133838361106c565b5050565b610b3f3383610e8a565b610b5b5760405162461bcd60e51b815260040161044d90611a68565b610b678484848461113b565b50505050565b6060610b7882610dba565b60008281526006602052604081208054610b9190611b90565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbd90611b90565b8015610c0a5780601f10610bdf57610100808354040283529160200191610c0a565b820191906000526020600020905b815481529060010190602001808311610bed57829003601f168201915b505050505090506000610c2860408051602081019091526000815290565b9050805160001415610c3b575092915050565b815115610c6d578082604051602001610c55929190611987565b60405160208183030381529060405292505050919050565b610c768461116e565b949350505050565b60006001600160e01b031982166380ac58cd60e01b1480610caf57506001600160e01b03198216635b5e139f60e01b145b806103fa57506301ffc9a760e01b6001600160e01b03198316146103fa565b610b318282604051806020016040528060008152506111e1565b6000828152600260205260409020546001600160a01b0316610d635760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b606482015260840161044d565b60008281526006602090815260409091208251610d8292840190611627565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b6000818152600260205260409020546001600160a01b0316610e195760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161044d565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610e51826108e3565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610e96836108e3565b9050806001600160a01b0316846001600160a01b03161480610edd57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610c765750836001600160a01b0316610ef684610577565b6001600160a01b031614949350505050565b826001600160a01b0316610f1b826108e3565b6001600160a01b031614610f415760405162461bcd60e51b815260040161044d90611b07565b6001600160a01b038216610fa35760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161044d565b826001600160a01b0316610fb6826108e3565b6001600160a01b031614610fdc5760405162461bcd60e51b815260040161044d90611b07565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031614156110ce5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161044d565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611146848484610f08565b61115284848484611214565b610b675760405162461bcd60e51b815260040161044d90611ab5565b606061117982610dba565b600061119060408051602081019091526000815290565b905060008151116111b057604051806020016040528060008152506104de565b806111ba84611321565b6040516020016111cb929190611987565b6040516020818303038152906040529392505050565b6111eb83836113c4565b6111f86000848484611214565b6106af5760405162461bcd60e51b815260040161044d90611ab5565b60006001600160a01b0384163b1561131657604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906112589033908990889088906004016119b6565b602060405180830381600087803b15801561127257600080fd5b505af19250505080156112a2575060408051601f3d908101601f1916820190925261129f918101906118d1565b60015b6112fc573d8080156112d0576040519150601f19603f3d011682016040523d82523d6000602084013e6112d5565b606091505b5080516112f45760405162461bcd60e51b815260040161044d90611ab5565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c76565b506001949350505050565b6060600061132e8361154f565b600101905060008167ffffffffffffffff81111561135c57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611386576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846113bf57610b0f565b611390565b6001600160a01b03821661141a5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161044d565b6000818152600260205260409020546001600160a01b03161561147f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161044d565b6000818152600260205260409020546001600160a01b0316156114e45760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161044d565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061158e5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106115ba576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106115d857662386f26fc10000830492506010015b6305f5e10083106115f0576305f5e100830492506008015b612710831061160457612710830492506004015b60648310611616576064830492506002015b600a83106103fa5760010192915050565b82805461163390611b90565b90600052602060002090601f016020900481019282611655576000855561169b565b82601f1061166e57805160ff191683800117855561169b565b8280016001018555821561169b579182015b8281111561169b578251825591602001919060010190611680565b506116a79291506116ab565b5090565b5b808211156116a757600081556001016116ac565b600067ffffffffffffffff808411156116db576116db611bfc565b604051601f8501601f19908116603f0116810190828211818310171561170357611703611bfc565b8160405280935085815286868601111561171c57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b038116811461174d57600080fd5b919050565b600060208284031215611763578081fd5b6104de82611736565b6000806040838503121561177e578081fd5b61178783611736565b915061179560208401611736565b90509250929050565b6000806000606084860312156117b2578081fd5b6117bb84611736565b92506117c960208501611736565b9150604084013590509250925092565b600080600080608085870312156117ee578081fd5b6117f785611736565b935061180560208601611736565b925060408501359150606085013567ffffffffffffffff811115611827578182fd5b8501601f81018713611837578182fd5b611846878235602084016116c0565b91505092959194509250565b60008060408385031215611864578182fd5b61186d83611736565b915060208301358015158114611881578182fd5b809150509250929050565b6000806040838503121561189e578182fd5b6118a783611736565b946020939093013593505050565b6000602082840312156118c6578081fd5b81356104de81611c12565b6000602082840312156118e2578081fd5b81516104de81611c12565b600080604083850312156118ff578182fd5b823567ffffffffffffffff811115611915578283fd5b8301601f81018513611925578283fd5b611934858235602084016116c0565b95602094909401359450505050565b600060208284031215611954578081fd5b5035919050565b60008151808452611973816020860160208601611b64565b601f01601f19169290920160200192915050565b60008351611999818460208801611b64565b8351908301906119ad818360208801611b64565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906119e99083018461195b565b9695505050505050565b602080825282518282018190526000919060409081850190868401855b82811015611a485781518051855286810151878601528501516001600160a01b03168585015260609093019290850190600101611a10565b5091979650505050505050565b6020815260006104de602083018461195b565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60008219821115611b5f57611b5f611be6565b500190565b60005b83811015611b7f578181015183820152602001611b67565b83811115610b675750506000910152565b600181811c90821680611ba457607f821691505b60208210811415611bc557634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611bdf57611bdf611be6565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610e1957600080fdfea26469706673582212206ee66289648cec5fced79332f2024d4ee16422db48d4192bc48f496e1e87c2f064736f6c63430008040033";

type PolygonNFTMarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PolygonNFTMarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PolygonNFTMarketplace__factory extends ContractFactory {
  constructor(...args: PolygonNFTMarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PolygonNFTMarketplace> {
    return super.deploy(overrides || {}) as Promise<PolygonNFTMarketplace>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PolygonNFTMarketplace {
    return super.attach(address) as PolygonNFTMarketplace;
  }
  override connect(signer: Signer): PolygonNFTMarketplace__factory {
    return super.connect(signer) as PolygonNFTMarketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolygonNFTMarketplaceInterface {
    return new utils.Interface(_abi) as PolygonNFTMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PolygonNFTMarketplace {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PolygonNFTMarketplace;
  }
}
