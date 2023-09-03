import React from 'react';
import { HookAPI, RoutesX } from './Settings';
import { Header } from './Pages';

const App = () => {
  const url ="https://islomapi.uz/api/present/day?"
  const {data,loading,error}=HookAPI(url,"Fargona")
  console.log(data);
  return (
  <>
 <Header/>
 <RoutesX/>
  </>
  );
};

export default App;
