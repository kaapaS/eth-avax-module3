# eth-avax-module3
// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract mytoken {

    // public variables here
    string public TokenName= "Ethereum";
    string public TokenAbbrv= "ETH";
    uint public TotalSupply=0;
    address owner;


    // mapping variable here
    mapping(address=>uint) public bal;
    constructor(){
        owner= msg.sender;
    }

    function getBal() external view returns(uint){
        return bal[msg.sender];
    }

    // mint function
    function mint (address _address, uint _value)public{
        require(msg.sender == owner, "token can only be mint by owner");
        TotalSupply += _value;
        bal[_address] += _value;

    }

    //transfer function
    function transfer (address _address, uint _value)public{
        require(bal[msg.sender] >= _value, "Balance is not sufficient !!");
        TotalSupply += _value;
        bal[_address] -= _value;

    }


    // burn function
    function burn(address _address, uint _value) public{
        require(bal[msg.sender] >= _value, "Balance is not sufficient !!");
        if (bal[_address] >= _value) {
        TotalSupply -= _value;
        bal[_address] -= _value;
        }
    }
}

for detailed explanation refer the link https://www.loom.com/share/c8e04e1ee1c74d338f8b489c08eeb

