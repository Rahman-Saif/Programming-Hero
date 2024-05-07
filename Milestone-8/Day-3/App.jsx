
import './App.css'
import GrandPa from './components/Grandpa/GrandPa'
import HookForm from './components/hookform/HookForm'
import RefForm from './components/refForm/RefForm'
import ReusableForm from './components/reusableForm/ReusableForm'
import SimpleForm from './components/simpleform/SimpleForm'
import StatefulForm from './components/statefulForm/StatefulForm'

function App() {

  const handleSignupSubmit=data=>{
    console.log(`sign up data`,data);
  }

  const handleUpdateProfile=data=>{
    console.log(`update profile`,data)
  }
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'signUp'} handleSubmit={handleSignupSubmit}></ReusableForm>
      <ReusableForm formTitle={'Profile update'} submitBtnText='update' handleSubmit={handleUpdateProfile}></ReusableForm> */}
      <GrandPa></GrandPa>
    </>
  )
}

export default App

/*
1. simpleForm create korlam,simple dom er jinishpati diye event theke ki type korsi segulai result e ansi
2. state diye form er jinishpati control kora start korlam
3.useRef use kore form banailam ( uncontrolled components)
4.custom hook banailam
5.reusable form component banaisi
6.Prop drilling kore components send kora
7.context api 



*/
