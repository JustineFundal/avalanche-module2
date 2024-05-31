// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract LongRidesKillsBoredom{

    function Gear2(uint RPM) public pure{
        require(RPM <= 20, "Shift your gear!!!");
    }

    function Gear3(uint RPM) public pure{
        if(RPM >= 60){
            revert("Shift your gear!!!");
        }
    }

    function Gear4(uint RPM) public pure{
        assert(RPM >= 100);
    }

   function Gear5(uint RPM) public pure{
        assert(RPM >= 120);
    }
}
