// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


import "hardhat/console.sol";
interface IInstance {
    function txBegin() external;
    function throwError() external;
    function setErrorData(uint _errorCode, string memory _errorMessage) external;
}

contract ErrorHandleProblem3 {
    bytes4 constant TX_BEGIN = bytes4(keccak256("txBegin()"));
    bytes4 constant TROW_ERROR = bytes4(keccak256("throwError"));
    bytes4 constant SET_ERROR_DATA = bytes4(keccak256("setErrorData(uint256,string)"));
    address instance;
    // bytes errData;

    event StringDebug(string message);
    event Debug(bytes data);

    constructor(address _instance){
        instance = _instance;
    }

    function txBegin() external {

    }

    function solve() external {
        {
            (bool success, ) = instance.call(abi.encodeWithSelector(TX_BEGIN));
            require(success, "failed at txBegin");
        }
        {
            uint256 errorCode;
            string memory errorMessage;

            try IInstance(instance).throwError() {
            }catch (bytes memory errData) {
                uint len = errData.length;
                bytes memory _errData = new bytes(len - 4);
                for (uint i = 0; i < len - 4; i++) {
                    _errData[i] = errData[i + 4];
                }
                (errorCode, errorMessage) = abi.decode(_errData, (uint256, string));
                // abi decode는 encode를 기준으로 하는데
                // encode 는 모든(동적배열)제외한 타입들을 32바이트에 맞게 padd 하기 때문에
                // decode 32바이트씩 끊어서 디코딩을 한다
                // 근데 funcSelector는 4바이트로 나오기때문에 그대로 들어가있으면 오류나기떄문에 제거를 해줘야한다
                // https://github.com/ethereum/solidity/issues/9439#issuecomment-660039240
            }
            (bool success, ) = instance.call(abi.encodeWithSelector(SET_ERROR_DATA, errorCode, errorMessage));
            require(success, "failed at setErrorData");
        }

    }

    function decodeRevertData(bytes calldata revertData) internal pure returns (uint256, string memory){
        return abi.decode(revertData[4:],(uint256, string));
    }
}