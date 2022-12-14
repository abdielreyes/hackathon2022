// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ColeccionablesBBVA is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    uint256 COUNTER;

    struct Collectible {
        uint256 id;
        uint256 promoID;
        string userID;
        bool reedemed;
        bool approved;
    }

    Collectible [] public collectibles;

    string private BASE_URI = 'http://52.188.108.125:8080/api/metadata/';

    constructor() ERC721("ColleccionablesBBVA", "cBBVA") {}
    
    event NewCollectible (address indexed owner, uint256 id);
    event ReedemedCollectible (uint256 id);
    event ApprovedReedemCollectible (uint256 id);

    function approveRedeem(uint256 _tokenId) external {
        Collectible storage collectible = collectibles[_tokenId];
        require(ownerOf(_tokenId)==msg.sender, "sender is not the owner of token");
        collectible.approved=true;
        emit ApprovedReedemCollectible(_tokenId);
    }

    function redeem(uint256 _tokenId) external onlyOwner{
        Collectible storage collectible = collectibles[_tokenId];
        require(!collectible.reedemed, "Collectible already reedemed");
        require(collectible.approved, "Collectible is not approved for reedem");
        collectible.reedemed=true;
        emit ReedemedCollectible(_tokenId);
    }

    function createCollectible(uint256 _promoID, string memory _userID, address _owner) external onlyOwner{
        Collectible memory collectible = Collectible(COUNTER, _promoID, _userID, false, false);
        collectibles.push(collectible);
        _safeMint(_owner, COUNTER);
        emit NewCollectible(_owner, COUNTER);
        COUNTER++;
    }
    
    function tokensOfOwner(address _owner) external view returns (Collectible[] memory) {
        uint256 tokenCount = balanceOf(_owner);
        Collectible [] memory result = new Collectible[](tokenCount);
        if (tokenCount == 0) {
            return result;
        } else {
            uint256 counter_owner = 0;
            for (uint256 index = 0; index < collectibles.length; index++) {
                if (ownerOf(index) == _owner){
                    result[counter_owner] = collectibles[index];
                    counter_owner++;
                }
            }
            return result;
        }
    }

    function getCollectibles() external view returns (Collectible[] memory) {
        return collectibles;
    }

    function getCollectible(uint256 tokenId) external view returns (Collectible memory) {
        return collectibles[tokenId];
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return BASE_URI;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        BASE_URI = _newBaseURI;
    }
    function getBaseURI() public view returns (string memory) {
        return _baseURI();
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}