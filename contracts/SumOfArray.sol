// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface ISumOfArray {
    function sum(uint[] memory _a) external pure returns (uint);
}

contract SumOfArray is ISumOfArray {
    // function sum(uint[] memory _a) external pure returns (uint){
    //     return 48660;
    // }
    function sum(uint[] calldata _a) external pure returns (uint _sum) {
        // a.length == 100
        assembly {
            for {
                let each := 68 // _a.offset
            } lt(each, 3268) { // 68 + (100 * 32)
                each := add(each, 32)
            } {
                _sum := add(_sum, calldataload(each))
            }
        }
    }
    // function sum(uint[] calldata _a) external pure returns (uint _sum) {
    //     assembly {
    //             let len := _a.length
    //             let end := add(_a.offset, mul(_a.offset, len)) // _a.length == 100 -> mul(100, 0x20)
    //         for {
    //             let each := _a.offset
    //         } lt(each, end) {
    //             each := add(each, 0x20)
    //         } {
    //             _sum := add(_sum, calldataload(each))
    //         }
    //     }
    // }
    function offset(uint[] calldata _a) external pure returns(bytes32 _offset){
        assembly{
            _offset := _a.offset
        }
    }
    // function sum(uint[] memory _a) public pure returns (uint _sum) {
    //     assembly {
    //         let len := mload(_a)
    //         let each := add(_a, 0x20)
    //         for {
    //             let end := add(each, mul(len, 0x20))
    //         } lt(each, end) {
    //             each := add(each, 0x20)
    //         } {
    //             _sum := add(_sum, mload(each))
    //         }
    //     }
    // }
    // function sum(uint[] memory _a) external pure returns (uint _sum) {
    //     assembly {
    //         _sum := add(add(_sum, add(_a, 32)), add(_a, 64))
    //     }
    // }
    // function sum(uint[] calldata _a) external pure returns (uint _sum) {
    //     assembly {
    //         let len := _a.length
    //         let each := add(_a.offset, 0x20)
    //         for {
    //             let end := add(each, mul(len, 0x20))
    //         } lt(each, end) {
    //             each := add(each, 0x20)
    //         } {
    //             _sum := add(_sum, mload(each))
    //         }
    //     }
    // }
    // function sum(uint[] memory _a) external pure returns (uint _sum) {
    //     _sum =
    //         _a[0] +
    //         _a[10] +
    //         _a[11] +
    //         _a[12] +
    //         _a[13] +
    //         _a[14] +
    //         _a[15] +
    //         _a[16] +
    //         _a[17] +
    //         _a[18] +
    //         _a[19] +
    //         _a[20] +
    //         _a[21] +
    //         _a[22] +
    //         _a[23] +
    //         _a[24] +
    //         _a[25] +
    //         _a[26] +
    //         _a[27] +
    //         _a[28] +
    //         _a[29] +
    //         _a[30] +
    //         _a[31] +
    //         _a[32] +
    //         _a[33] +
    //         _a[34] +
    //         _a[35] +
    //         _a[36] +
    //         _a[37] +
    //         _a[38] +
    //         _a[39] +
    //         _a[40] +
    //         _a[41] +
    //         _a[42] +
    //         _a[43] +
    //         _a[44] +
    //         _a[45] +
    //         _a[46] +
    //         _a[47] +
    //         _a[48] +
    //         _a[49] +
    //         _a[50];
    //     {
    //         _sum +
    //             _a[51] +
    //             _a[52] +
    //             _a[53] +
    //             _a[54] +
    //             _a[55] +
    //             _a[56] +
    //             _a[57] +
    //             _a[58] +
    //             _a[59] +
    //             _a[60] +
    //             _a[61] +
    //             _a[62] +
    //             _a[63] +
    //             _a[64] +
    //             _a[65] +
    //             _a[66] +
    //             _a[67] +
    //             _a[68] +
    //             _a[69] +
    //             _a[70] +
    //             _a[71] +
    //             _a[72] +
    //             _a[73] +
    //             _a[74] +
    //             _a[75] +
    //             _a[76] +
    //             _a[77] +
    //             _a[78] +
    //             _a[79] +
    //             _a[80] +
    //             _a[81] +
    //             _a[82] +
    //             _a[83] +
    //             _a[84] +
    //             _a[85] +
    //             _a[86] +
    //             _a[87] +
    //             _a[88] +
    //             _a[89] +
    //             _a[90] +
    //             _a[91] +
    //             _a[92] +
    //             _a[93] +
    //             _a[94] +
    //             _a[95] +
    //             _a[96] +
    //             _a[97] +
    //             _a[98] +
    //             _a[99];
    //     }
    // }
}
