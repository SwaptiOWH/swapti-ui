import React, {useEffect, useState } from "react";
import { useWalletSelector } from "../utils/walletSelector";
import { providers, utils } from "near-api-js";
import {
    Flex,
    Box,
    Image,
    Center,
    Badge,
    useColorModeValue,
    Grid,
    GridItem,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';

export default function Home() {
    const { selector, modal, accounts, accountId } = useWalletSelector();

    return (
        <h1>HOME</h1>
    );
}