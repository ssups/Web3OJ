// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract DormantAccount {
    function destory(address to) external {
        selfdestruct(payable(to));
    }

    receive() payable external {}
}