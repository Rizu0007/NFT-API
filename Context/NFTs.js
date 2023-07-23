import { createContext, useContext, useEffect, useState } from 'react';
import {
    useAddress,
    useContract,
    useMetamask,
    useDisconnect,
    useSigner,
} from "@thirdweb-dev/react";
import { ethers } from 'ethers';


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
          setLoading(false);
          window.location.reload();
    } catch (err) {
        console.error("Contract call failure " , err)
    }

 }
 // __get contract data

const getUploadImages=async()=>{
const images=await contract.call("getAllNFTs");

//total Upload
const totalUpload=await contract.call("imagesCount");
const listingPrice=await contract.call("listingPrice");
const allImages=images.map((images , i)=>({
    owner: images.creator,
    title:images.title,
    description:images.description,
    email:images.email,
    category:images.category,
    fundraised:images.fundraised,
   images:images.image,
   imageID:images.id.toNumber(),
    createdAt:images.timestamp.toNumber(),
    listedAmount:ethers.utils.formatEther(listingPrice.toString()),
    totalUpload:totalUpload.toNumber(),
}));
return allImages;
}
//Get single image
const singleImage=async (id)=>{
    try {

        const data =await contract.call("getImages" , [id]);
         const image={
            title:data[0],
            description:data[1],
            email:data[2],
            category:data[1],
            fundRaised:ethers.utils.formatEther(data[4].toString()),
            creator:data[5],
            imageURL:data[6],
            createdAt:data[7].toNumber(),
            imageId:data[8].toNumber(),
            description:data[1],
            description:data[1],

         }
         return image;
        
    } catch (error) {
         
        console.log("Contract call failure " , error)

        
    }
}

const donateFund=async({amount , Id})=>{
 try {
    console.log(amount ,Id);
    const transaction =await contract.call("donateToImages", [Id],{
        value:amount.toString(),

    })
    console.log(transaction);
    window.location.reload();

 } catch (error) {
    console.log(error);
 }   
}

//get api dat

const getAllNFTsAPI=async()=>{
    const response=await axios({
        method:"GET",
        url:"/api/v1/NFTs",

    });
    console.log(response);

}

const getSingleNftsAPI= async (id)=>{
    const response=await axios({
        method:"GET",
        url:`/api/v1/NFTs${id}`,
    });
    console.log(response);


}
return(
    <StateContext.Provider value={{
        address,
        contract,
        connect,
        disconnect,
        userBlance,
        setLoading,
        loading,
        UploadImage,
        getUploadImages,
        donateFund,
        singleImage,


        getAllNFTsAPI,
        getSingleNftsAPI


    }}
    >
    {children}

    </StateContext.Provider>
)



}

export const useStateContext=()=>useContext(StateContext)

