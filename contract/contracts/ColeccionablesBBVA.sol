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
        bool reedemed;
        bool onSale;
    }

    Collectible [] public collectibles;

    constructor() ERC721("ColleccionablesBBVA", "cBBVA") {}
    
    event NewCollectible (address indexed owner, uint256 id);

    function createCollectible(uint256 _promoID, address _owner) external {
        Collectible memory collectible = Collectible(COUNTER, _promoID, false, false);
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

    // The following functions are overrides required by Solidity.
    function _baseURI() internal pure override returns (string memory) {
        return "URI.url";
    }
    

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
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