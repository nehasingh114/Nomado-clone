import React ,{useState}from 'react'
import { Text,Tabs, TabList,InputGroup,Button, TabPanels, Tab, TabPanel,Input } from '@chakra-ui/react'
import style from "./searchbar.module.css"
import {HiLocationMarker} from "react-icons/hi"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

const SearchBar = () => {
    const [Children,setChildren]=useState(1);
    const[Travelers,setTravelers]=useState(2);
const [check,setCheck]=useState(false)

    const checked=()=>{
setCheck(!check)
    }


  return (
    <div className={style.container}>
        <div>

        <Tabs className={style.tabbox}>
  <TabList className={style.TabList}>
    <Tab _selected={{ color:"#027e8f"}}  className={style.tab}>Stays</Tab>
    <Tab _selected={{ color:"#027e8f"}}  className={style.tab}>Flight</Tab>
    <Tab _selected={{ color:"#027e8f"}}  className={style.tab}>Cars</Tab>
    <Tab _selected={{ color:"#027e8f"}}  className={style.tab}>Package</Tab>
    <Tab _selected={{ color:"#027e8f"}}  className={style.tab}>Things to do</Tab>
    <Tab _selected={{ color:"#027e8f"}}  className={style.tab}>Cruise</Tab>
  </TabList>
<hr />
  <TabPanels>
    <TabPanel>
    <TabPanel className={style.TabPanel}>
    <Input className={style.myinput} placeholder='Going to'/>
    <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/><Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
<Input className={style.myinput}  placeholder='Travelers'/>
    
</TabPanel>



<Input type={"checkbox"} onClick={checked}/>Add Flight
<Input type={"checkbox"}/>Add car


    {check? <Input className={style.myinput} placeholder='Leaving from '/>:""}
<Button className={style.Button}>Search</Button>
    </TabPanel>

    <TabPanel>
    <TabPanel className={style.TabPanel}>
    <Input className={style.myinput} placeholder='Going to'/>
    <Input className={style.myinput} placeholder='Leaving from '/>
    <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/><Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    
</TabPanel>



<Input type={"checkbox"} onClick={checked}/>Add Flight
<Input type={"checkbox"}/>Add car


    {check? <div>
     check in   <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/>
check out<Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    </div>:""}
<Button className={style.Button}>Search</Button>
    </TabPanel>

    <TabPanel>
    <TabPanel className={style.TabPanel}>
    <Input className={style.myinput} placeholder='Going to'/>
    <Input className={style.myinput} placeholder='Leaving from '/>
    <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/><Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    
</TabPanel>



<Input type={"checkbox"} onClick={checked}/>Add Flight
<Input type={"checkbox"}/>Add car


    {check? <div>
     check in   <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/>
check out<Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    </div>:""}
<Button className={style.Button}>Search</Button>
    
    </TabPanel>
    <TabPanel>
    <TabPanel className={style.TabPanel}>
    <Input className={style.myinput} placeholder='Going to'/>
    <Input className={style.myinput} placeholder='Leaving from '/>
    <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/><Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    
</TabPanel>



<Input type={"checkbox"} onClick={checked}/>Add Flight
<Input type={"checkbox"}/>Add car


    {check? <div>
     check in   <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/>
check out<Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    </div>:""}
<Button className={style.Button}>Search</Button>
    </TabPanel>
    <TabPanel>
    <TabPanel className={style.TabPanel}>
    <Input className={style.myinput} placeholder='Going to'/>
    <Input className={style.myinput} placeholder='Leaving from '/>
    <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/><Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    
</TabPanel>



<Input type={"checkbox"} onClick={checked}/>Add Flight
<Input type={"checkbox"}/>Add car


    {check? <div>
     check in   <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/>
check out<Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    </div>:""}
<Button className={style.Button}>Search</Button>
    </TabPanel>
    <TabPanel>
    <TabPanel className={style.TabPanel}>
    <Input className={style.myinput} placeholder='Going to'/>
    <Input className={style.myinput} placeholder='Leaving from '/>
    <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/><Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    
</TabPanel>



<Input type={"checkbox"} onClick={checked}/>Add Flight
<Input type={"checkbox"}/>Add car


    {check? <div>
     check in   <Input
    className={style.mydate} 
 placeholder="Check in"
 size="md"
 type="datetime-local"
/>
check out<Input
className={style.mydate} 
 placeholder="Check out"
 size="md"
 type="datetime-local"
/>
    </div>:""}
<Button className={style.Button}>Search</Button>
    </TabPanel>
  </TabPanels>
</Tabs>
      

        </div>
        
 

    </div>
  )
}

export default SearchBar