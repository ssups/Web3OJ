// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IMinusCalculator {
    function minus(uint256, uint256) external pure returns (uint256);
}

contract MinusCalculator is IMinusCalculator {
    function minus(uint input1, uint input2) external pure returns (uint) {
        return input1 - input2;
    }
}
