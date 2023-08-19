// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface ISumOfArray {
    function sum(uint[] calldata _a) external pure returns (uint);
    // function sum(uint[] memory _a) external pure returns (uint);
}

contract SumOfArray is ISumOfArray {
    // function sum(uint[] calldata) external pure returns (uint _sum) {
    //     // a.length == 100
    //         assembly { 
    //             for {
    //             _sum := calldataload(68)
    //             let offset := 100 // 100 -> _a.offset(68) + 32  
    //             } lt(offset, 3268) { // 3268 -> 68 + (100 * 32)
    //                 offset := add(offset, 32)
    //             }{
    //                 _sum := add(_sum, calldataload(offset))
    //             }
    //         }
    // }

    function sum(uint[] calldata) external pure returns (uint _sum) {
            assembly {
                _sum := add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(add(
                calldataload(68), 
                calldataload(100)),
                calldataload(132)),
                calldataload(164)),
                calldataload(196)),
                calldataload(228)),
                calldataload(260)),
                calldataload(292)),
                calldataload(324)),
                calldataload(356)),
                calldataload(388)),
                calldataload(420)),
                calldataload(452)),
                calldataload(484)),
                calldataload(516)),
                calldataload(548)),
                calldataload(580)),
                calldataload(612)),
                calldataload(644)),
                calldataload(676)),
                calldataload(708)),
                calldataload(740)),
                calldataload(772)),
                calldataload(804)),
                calldataload(836)),
                calldataload(868)),
                calldataload(900)),
                calldataload(932)),
                calldataload(964)),
                calldataload(996)),
                calldataload(1028)),
                calldataload(1060)),
                calldataload(1092)),
                calldataload(1124)),
                calldataload(1156)),
                calldataload(1188)),
                calldataload(1220)),
                calldataload(1252)),
                calldataload(1284)),
                calldataload(1316)),
                calldataload(1348)),
                calldataload(1380)),
                calldataload(1412)),
                calldataload(1444)),
                calldataload(1476)),
                calldataload(1508)),
                calldataload(1540)),
                calldataload(1572)),
                calldataload(1604)),
                calldataload(1636)),
                calldataload(1668)),
                calldataload(1700)),
                calldataload(1732)),
                calldataload(1764)),
                calldataload(1796)),
                calldataload(1828)),
                calldataload(1860)),
                calldataload(1892)),
                calldataload(1924)),
                calldataload(1956)),
                calldataload(1988)),
                calldataload(2020)),
                calldataload(2052)),
                calldataload(2084)),
                calldataload(2116)),
                calldataload(2148)),
                calldataload(2180)),
                calldataload(2212)),
                calldataload(2244)),
                calldataload(2276)),
                calldataload(2308)),
                calldataload(2340)),
                calldataload(2372)),
                calldataload(2404)),
                calldataload(2436)),
                calldataload(2468)),
                calldataload(2500)),
                calldataload(2532)),
                calldataload(2564)),
                calldataload(2596)),
                calldataload(2628)),
                calldataload(2660)),
                calldataload(2692)),
                calldataload(2724)),
                calldataload(2756)),
                calldataload(2788)),
                calldataload(2820)),
                calldataload(2852)),
                calldataload(2884)),
                calldataload(2916)),
                calldataload(2948)),
                calldataload(2980)),
                calldataload(3012)),
                calldataload(3044)),
                calldataload(3076)),
                calldataload(3108)),
                calldataload(3140)),
                calldataload(3172)),
                calldataload(3204)),
                calldataload(3236))
            }
    }
    
    // function sum(uint[] calldata _a) external pure returns (uint _sum) {
    //     unchecked {
    //         uint len = _a.length;
    //         for (uint i = 0; i < len; i++) {
    //             _sum += _a[i];
    //         }
    //     }
    // }
    
    // function sum(uint[] calldata _a) external pure returns (uint _sum) {
    //     assembly {
    //             let len := _a.length
    //             let end := add(_a.offset, mul(len, 0x20)) // _a.length == 100 -> mul(100, 0x20)
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
}

