import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  ChakraProvider,
  Center,
  theme
} from '@chakra-ui/react';
import Hero from "./components/sections/Hero";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useWalletSelector } from "./utils/walletSelector";

export default function Landing() {
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const [stateLogin, setStateLogin] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      setStateLogin(accountId !=null ? true : false);
      setLoad(true);
    })();
  }, []);

  if (stateLogin && load) {
    return (
      <ChakraProvider theme={theme}>
        <Center>
          <>
            <div style={{width:'100%'}}>
              <div style={{width:'100%', position:'sticky', top:'0px', zIndex:'10'}}>
                <Header />
              </div>
              <div style={{width:'100%', marginBottom:'64px'}}>
                <Routes>
                  {/* <Route path="/myruta" exact element={<MyComponent/>} /> */}
                  <Route path="/*" exact element={<Home/>} />
                </Routes>
              </div>
              <div style={{width:'100%', position:'fixed', bottom:'0px', right:'0px', left:'0px'}}>
                <Footer/>
              </div>
            </div>
          </>
        </Center>
      </ChakraProvider>
    );
  } if (!stateLogin && load) {
      return (
        <ChakraProvider theme={theme}>
          <Center>
          <>
            <div style={{width:'100%'}}>
              <Hero
                title="Swapti intercambia algo que sabes, por algo que te gustaría aprender."
                subtitle="Swapti es una plataforma que te permite intercambiar media hora de tu tiempo con otros usuarios de la Web3 para resolver algo nuevo."
                ctaText="¿Cómo funciona?"
              />
              <div style={{width:'100%', position:'fixed', bottom:'0px', right:'0px', left:'0px'}}>
                <Footer/>
              </div>
            </div>
          </>
          </Center>
        </ChakraProvider>
      );
    
  }

  
}