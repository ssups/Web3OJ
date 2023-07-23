// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IMultiplicationCalculator {
    function multiply(uint256, uint256) external pure returns (uint256);
}

contract MultiplicationCalculator is IMultiplicationCalculator {
    function multiply(uint256 input1, uint256 input2) external pure returns (uint256 res){
        assembly {
            if eq(input1, 0) {
                res := 0
            }
            res := mul(input1, input2)
            if iszero(eq(div(res, input1), input2)) {
                mstore(0, "Panic(uint256)") // sig at p.0 
                mstore(32, keccak256(0, 14)) // selector at p.32 
                mstore(36, 0x11) // panic code at p.36
                revert(32, 36) // 4byte + 32byte
            }
        }
    }
}
