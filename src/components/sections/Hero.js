import React, { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { login } from '../../utils';
import { useWalletSelector } from "../../utils/walletSelector";
import swaptiHome from "../../assets/img/swapti-3x2.png";
import swaptiHw from "../../assets/img/swapti-hw.png";
import elipseazul from "../../assets/img/Ellipse azul.png";
import elipserosa from "../../assets/img/Ellipse rosa.png";
import logo from "../../assets/img/logo.png";
import { Grid, GridItem } from '@chakra-ui/react'


import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  ChakraProvider
} from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  ctaLink,
  ctaText,
  howbtn,
  communitybtn,
  directoriobtn,
  ...rest
}) {

  const { selector, modal, accounts, accountId, logged } = useWalletSelector();
  const [signIn, setSignIn] = useState(false);
  const [section, setSection] = useState(1);

  useEffect(() => {
    if (signIn) {
      window.location.reload();
    }
  }, [accountId]);

  const handleSignIn = () => {
    modal.show();
    setSignIn(true);
  }
  const howwork = (s) => {
    setSection(s);
  }

  const community = (s) => {
    setSection(s);
  }

  const directorio = (s) => {
    setSection(s);
  }

  if (section == 1) {
    return (
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        mb={16}
        {...rest}
      >
        <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >

          <Image src={logo} boxSize='50' />

          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}

          >
            {title}
          </Heading>

          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            {subtitle}
          </Heading>
          <Button
            bg='tomato'
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            onClick={handleSignIn}
            position="fixed"
            top="1rem"
            right="1rem"
          >
            {ctaText}
          </Button>

          <Image src={swaptiHome} boxSize='350' borderRadius='full' style={{ position: "absolute", top: 120, right: 0 }} />



          <Button
            bg='tomato'
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            onClick={() => howwork(2)}
          >

            {howbtn}
          </Button>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        </Box>
      </Flex>
    )
  }
  if (section == 2) {
    return (
      <  >
        <div>
          <h1 style={{ position: "absolute", top: 85, left: 440 }}>¿Comó Funciona?</h1>
          <Image src={swaptiHw} boxSize='350' borderRadius='full' style={{ position: "absolute", top: 30, left: 0 }} />
          <Button
            bg='tomato'
            colorScheme="primary"
            py="4"
            px="4"
            position="absolute"
            top="400"
            left="130"
            borderRadius="full"
            lineHeight="1"
            size="md"
            onClick={() => community(3)}
          >

            {communitybtn}
          </Button>
        </div>
        <div style={{ width: "30%", height: 66, float: "left", backgroundColor: "#0569ff", position: "absolute", top: 120, right: 450 }}>
          <div><p style={{ marginLeft: 10 }}>1-Conecta tu wallet y crea tu perfil para recibir tu primer token de $SWAPTI</p></div>

        </div>

        <div style={{ width: "30%", height: 66, backgroundColor: "#0569ff", position: "absolute", top: 200, right: 450 }}>
          <div><p style={{ marginLeft: 10 }}>2-Cuéntanos qué te gustaría aprender o resolver y cómo podrías ayudar a otros.</p></div>

        </div>

        <div style={{ width: "30%", height: 66, backgroundColor: "#0569ff", position: "absolute", top: 280, right: 450 }}>
          <div><p style={{ marginLeft: 10 }}>3-Cuéntanos qué te gustaría aprender o resolver y cómo podrías ayudar a otros.</p></div>

        </div>

        <div style={{ width: "30%", height: 66, backgroundColor: "#0569ff", position: "absolute", top: 120, right: 30 }}>
          <div><p style={{ marginLeft: 10 }}>4-Conecta tu wallet y crea tu perfil para recibir tu primer token de $SWAPTI</p></div>

        </div>

        <div style={{ width: "30%", height: 66, backgroundColor: "#0569ff", position: "absolute", top: 200, right: 30 }}>
          <div><p style={{ marginLeft: 10 }}>5-Cuéntanos qué te gustaría aprender o resolver y cómo podrías ayudar a otros.</p></div>

        </div>

        <div style={{ width: "30%", height: 66, backgroundColor: "#0569ff", position: "absolute", top: 280, right: 30 }}>
          <div><p style={{ marginLeft: 10 }}>6-Cuéntanos qué te gustaría aprender o resolver y cómo podrías ayudar a otros.</p></div>

        </div>



      </>
    );
  }
  if (section == 3) {
    return (
      <  >
        <h1 style={{ fontFamily: "roboto", fontWeight: "bold", textAlign: "center", position: "absolute", top: 50, right: 200, marginLeft: 300 }}>Comienza a ayudar a otras personas en Swapty. Con cada intercambio de media hora en el que ayudes a alguien más, recibirás el token de $SWAPTI, que podrás utilizar para obtener la ayuda que necesitas.</h1>
        <div style={{ width: "30%", height: 66, float: "left", backgroundColor: "#ff2c84", position: "absolute", top: 120, right: 450 }}>
          <div><Image src={elipseazul} boxSize='12' borderRadius='full' style={{ position: "absolute", top: 5, left: 0, marginLeft: 5 }} />
            <p style={{ marginLeft: 60 }}>necesito configurar un bot para discord</p> <p style={{ marginLeft: 60 }}>Ver detalles</p></div>

        </div>

        <div style={{ width: "30%", height: 66, float: "left", backgroundColor: "#0569ff", position: "absolute", top: 200, right: 450 }}>
          <div><Image src={elipserosa} boxSize='12' borderRadius='full' style={{ position: "absolute", top: 5, left: 0, marginLeft: 5 }} />
            <p style={{ marginLeft: 60 }}>Quiero mejorar el código de un smart contract</p> <p style={{ marginLeft: 60 }}>Ver detalles</p></div>

        </div>


        <div style={{ width: "30%", height: 66, float: "left", backgroundColor: "#ff2c84", position: "absolute", top: 280, right: 450 }}>
          <div><Image src={elipseazul} boxSize='12' borderRadius='full' style={{ position: "absolute", top: 5, left: 0, marginLeft: 5 }} />
            <p style={{ marginLeft: 60 }}>Quiero crear mi primer NFT en NATIVO</p> <p style={{ marginLeft: 60 }}>Ver detalles</p></div>

        </div>

        <div style={{ width: "30%", height: 66, float: "left", backgroundColor: "#0569ff", position: "absolute", top: 360, right: 450 }}>
          <div><Image src={elipserosa} boxSize='12' borderRadius='full' style={{ position: "absolute", top: 5, left: 0, marginLeft: 5 }} />
            <p style={{ marginLeft: 60 }}>Ayúdame a mejorar el logo de mi negocio.</p> <p style={{ marginLeft: 60 }}>Ver detalles</p></div>




          <Button
            bg='tomato'
            colorScheme="primary"
            py="4"
            px="4"
            position="absolute"
            top="20"
            left="0"
            borderRadius="full"
            lineHeight="1"
            size="md"
            onClick={() => directorio(3)}
          >

            {directoriobtn}
          </Button>
        </div>

      </>
    )
  }

}


Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};
