// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IPlusCalculator {
    // function plus(uint256, uint256) external pure returns (uint256);
}

contract PlusCalcaulator is IPlusCalculator {
    function plus(uint input1, uint input2) public pure returns (uint res){
        assembly {
            res := add(input1, input2)
            if lt(res, input1) { // check overflow
                mstore(0, "Panic(uint256)") // sig at p.0 
                mstore(32, keccak256(0, 14)) // selector at p.32 
                mstore(36, 0x11) // panic code at p.36
                revert(32, 36) // 4byte + 32byte
            }
        }
    }

    function panic() pure external returns(bytes32) {
        assembly {
            mstore(0, "Panic(uint256)")
            mstore(32, keccak256(0, 14))
            return(32, 32)
        }
    }

    // function plus(uint input1, uint input2) external pure returns (uint res) {
    //     res = input1 + input2;
    // }
}