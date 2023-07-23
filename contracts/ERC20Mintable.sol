// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IERC20Mintable {
    function mint(address to, uint256 amount) external;
}

contract ERC20Mintabl is IERC20Mintable, ERC20{
    mapping(address => bool) public mintables;

    constructor(address instanceCreator) ERC20("TempToken", "TTK") {
        mintables[msg.sender] = true;
        mintables[instanceCreator] = true;
    }
    
    modifier onlyMintables {
        require(mintables[msg.sender], "not mintable");
        _;
    }

    function mint(address to, uint amount) external onlyMintables {
        _mint(to, amount);
    }
}