import hre from "hardhat";
import { readFileSync } from 'fs';
import { join } from 'path';
import { ethers } from 'ethers';

// Define an interface for FacetCut
interface FacetCut {
    facetAddress: string;
    functionSelectors: string[];
}

export async function deployDiamond(cut: FacetCut[]): Promise<void> {
    console.log("Starting Diamond deployment...");

    // Validate the cut parameter
    if (!Array.isArray(cut) || cut.length === 0) {
        throw new Error("Invalid cut parameter. Expected an array of FacetCut objects.");
    }

    // Assuming you have a signer or provider set up in your Hardhat environment
    const signer = await hre.ethers.provider.getSigner();
    const contractOwner = await signer.getAddress();

    // Deploy DiamondCutFacet
    const DiamondCutFacet = await hre.ethers.getContractFactory("DiamondCutFacet");
    const diamondCutFacet = await DiamondCutFacet.deploy();
    await diamondCutFacet.deployed();
    console.log("DiamondCutFacet deployed:", diamondCutFacet.address);

    // Deploy DiamondInit
    const DiamondInit = await hre.ethers.getContractFactory("DiamondInit");
    const diamondInit = await DiamondInit.deploy();
    await diamondInit.deployed();
    console.log("DiamondInit deployed:", diamondInit.address);

    // Deploy Diamond
    const Diamond = await hre.ethers.getContractFactory("Diamond");
    const diamond = await Diamond.deploy(
        contractOwner,
        diamondCutFacet.address,
        cut[0].facetAddress, // Assuming this is the ERC20Facet address
        "0xe4476Ca098Fa209ea457c390BB24A8cfe90FCac4" // Replaced placeholder with actual value
    );
    await diamond.deployed();
    console.log("Diamond deployed:", diamond.address);
    const contractAddress = diamond.address; // Corrected line
    
    // Load ABIs
    const diamondCutAbi = JSON.parse(readFileSync(join(__dirname, '../artifacts/contracts/diamond/interfaces/IDiamondCut.sol/IDiamondCut.json'), 'utf8')).abi;  

    // Encode the initialization function call
    const iface = new ethers.Interface(diamondCutAbi);
    const functionCall = iface.encodeFunctionData("init");

    // Upgrade diamond with facets using writeContract
    for (const facetCut of cut) {
        if (!facetCut.facetAddress || !facetCut.functionSelectors || facetCut.functionSelectors.length === 0) {
            console.error("Invalid facet cut:", facetCut);
            continue;
        }

        try {
            const diamondCutTx = await diamond.diamondCut(
                [facetCut],
                diamondInit.address,
                functionCall
            );
            const diamondCutTxHash = diamondCutTx.hash;
            console.log("Diamond cut tx: ", diamondCutTxHash);
            await diamondCutTx.wait(); // Wait for the transaction to be mined
        } catch (error) {
            console.error("Failed to add facet:", error);
        }
    }

    console.log("Diamond deployment completed.");
    console.log(typeof diamond.address); // Should log 'string'
}