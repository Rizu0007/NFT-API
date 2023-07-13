import React , {useState , useEffect , useContext, createContext} from 'react';
import axios from 'axios';
import {
    useAddress,
    useContract,
    useMetamask,
    useDisconnect,
    useSigner,
} from "@thirdweb-dev/react";
import { ethers } from 'ethers';
import { response } from 'express';
const StateContext=createContext();

export const StateContextProvider=({children})=>{
 const {contract}  =useContract(
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
 ) ;
 const address=useAddress();
 const connect=useMetamask();


 const disconnect=useDisconnect();
 const Signer=useSigner();
 const [userBlance ,setUerBlance ]=useState();
 const [loading , setLoading]=useState(false);

 const fetchData=async ()=>{
    try {
        const balance=await Signer ?.getBalance( );
        const userBalance=address
        ?ethers.utils.formatEther(balance?.toString())
        :"";
setUerBlance(userBalance);

        
    } catch (error) {
 console.log(error)       
    }
 };
 useEffect(()=>{
    fetchData();

 }, []);

 const UploadImage=async(imageInfo)=>{
    const {title , description , email , category , image}=imageInfo;
    try {
        const listingPrice=await contract.call("listingPrice");
        const createNFTS=await contract.call(
            "uploadIPFS",
            [address , image ,title ,description , email , category ],
            {
                value:listingPrice.toString(),
            }
        );
        //Api call
        const response=await axios({
            method:"POST",
            url:`/api/v1/NFTS`,
            data:{
                title:title,
                description:description,
                category:category,
                image:image,
                address:address,
                email:email,
            },
             
        });
        console.log(response);
             console.log("contract call success" , createNFTS);


    } catch (error) {
        
    }

 }
}