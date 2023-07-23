// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RunWithABI2Problem {
    bytes32 private privateKey;

    function setPrivateKey(address instanceCa) public {
        {
            (bool success, )= instanceCa.delegatecall(abi.encodeWithSelector(0xa6e5ca07));
            require(success, "delegatecall failed");
        }
    }

    // 채점을 위한 함수 입니다.
    function getPrivateKey() public view returns (bytes32) {
        return privateKey;
    }
}