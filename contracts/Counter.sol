// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Counter {
    uint256 public count;

    // Function to get the current count
    function get() public view returns (uint256) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        require(count < 100, "Count has reached the maximum value of 100");
        count += 1;
    }

    // Function to decrement count by 1

    // Function to increment to 20 and then decrement to 0
    function incrementTo20AndDecrementTo0() public {
        // Increment to 20
        while (count < 100) {
            count += 1;
        }
    }
}
