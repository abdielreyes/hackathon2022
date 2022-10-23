var abi = [
  "constructor()",
  "event ApprovalForAll(address indexed,address indexed,bool)",
  "event OwnershipTransferred(address indexed,address indexed)",
  "event TransferBatch(address indexed,address indexed,address indexed,uint256[],uint256[])",
  "event TransferSingle(address indexed,address indexed,address indexed,uint256,uint256)",
  "event URI(string,uint256 indexed)",
  "function balanceOf(address,uint256) view returns (uint256)",
  "function balanceOfBatch(address[],uint256[]) view returns (uint256[])",
  "function isApprovedForAll(address,address) view returns (bool)",
  "function mint(address,uint256,uint256,bytes)",
  "function mintBatch(address,uint256[],uint256[],bytes)",
  "function owner() view returns (address)",
  "function renounceOwnership()",
  "function safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
  "function safeTransferFrom(address,address,uint256,uint256,bytes)",
  "function setApprovalForAll(address,bool)",
  "function setURI(string)",
  "function supportsInterface(bytes4) view returns (bool)",
  "function transferOwnership(address)",
  "function uri(uint256) view returns (string)"
]
module.exports = abi