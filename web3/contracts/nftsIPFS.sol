// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract nftsIPFS {
  address payable contractOwner=payable(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC);

  uint256 public listingPrice=0.025 ether;
  struct NFTS {
    string title;
    string description;
    string email;
    string category;
    uint  fundraised;
    address creator;
    string image;
    uint256 timestamp;
    uint256 id;
  }
mapping (uint =>NFTS)public nftIamges;
uint256 public imagesCount=0;

function uploadIPFS(address _creator , string memory _iamge , string memory _title ,
string memory _description , string memory _email , string memory _category) public payable returns(
  string memory,
    string memory,
  string memory,
 address,
  string memory,

)


}