// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract LockProblem {
    function unlock(address instanceCa) external {
        (bool success, )= instanceCa.call(abi.encodeWithSignature("unlock()"));
        require(success, "unlock failed");
    }
}
