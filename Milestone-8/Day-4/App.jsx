import { useState } from 'react'


function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <h1>{('../public/data/')}</h1>
      
    </>
  )
}

export default App


/*
1. Tailwind,daisy,react router setup dilam
2.Root.jsx create korlam and <OUtlet> set korlam & main.jsx e router e path e Root ke set kore dilam
3.children set kore setar path e Home set kore dilam
4.Footer create korlam & eitake Root.jsx er <outlet> er niche set korlam jate sobgula page ei footer show kore 
5.Navbar create korlam, nav er man gula kivabe Dynamic kora jay seta dekhlam, router e navlink diye dynamic kora lage
6.Nav er link set kore dilam,ebar nav e click korle jeno oi page e jay tai page create korlam & router e set kore dilam
7.Error page set korlam
8.Home page ke parent page hisebe set kore er vitor Banner,categorylist dukay dilam
9.alada alada job dekhailam, pagination er samanno hisab ache , seta holo jokhon map use korbo tokhon slice diye use korle
prothom page e kom data jabe, ar pore button onclick e setData(totalData.length) diye dile full data jabe & sobgula job show korbe
10. jodi emon chai je sob data load hoye gele button ar show korbe na tahole 
css  use kore jookhon conditional kore dibo , tokhon apostrope na diye simply {} use korbo and operator(&&) use korbo
11.Dynamic route set korlam, mane ekta component er id er upor base kore ekta path banailam. prothome je button e click korle oi page e jabe 
setate Link boshay link set korlam
12.Onekgula job theke ekta job paite hoile find method use korbo, eita map er moto ekta parameter nibe & id er sathe match kore finded output 
khuje ber kore dibe
13.React-toastify use kora sikhlam
14.jobs gula localstorage e save korse & localstorage theke fetch korse
15.filter use kora sikhaise- usually amra ekta array theke map kore bakisob component dekhai, filter jkhn use korbo tokhon prothome 
useState use kore array banabo, tarpor button er onclick e event boshabo and parameter dibo,then oi parameter onujayi jobs gula useState er array te 
set hobe,& eventually ei array thekei jobs gula show hobe 

*/
