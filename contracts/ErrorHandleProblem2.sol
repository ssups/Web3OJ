// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ErrorHandleProblem2 {
    uint public errorCode;

    function throwError() public {
        // 여기에 에러를 내는 함수가 작성되어 있습니다.
    }

    function setErrorCode(uint _errorCode) public {
        errorCode = _errorCode;
    }
}

contract Solve_ErrorHandleProblem2 {
    function solve(address _instance) external {
        ErrorHandleProblem2 instance = ErrorHandleProblem2(_instance);

        try  instance.throwError() {
        } catch (bytes memory _errData) {
            uint errCode;
            assembly {
                errCode := mload(add(_errData, 36))
            }
            instance.setErrorCode(errCode);
        }
    }
}