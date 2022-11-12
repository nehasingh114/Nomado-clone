import React ,{useState}from 'react'
import { Text,Tabs, TabList,InputGroup,Button, TabPanels, Tab, TabPanel,Input } from '@chakra-ui/react'
import style from "./searchbar.module.css"
import { Hotels } from '../../Pages/Hotels'
import {HiLocationMarker} from "react-icons/hi"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [Children,setChildren]=useState(1);
    const[Travelers,setTravelers]=useState(2);
    const[data,setData]=useState([])
    const[text,setText]=useState('')
const [check,setCheck]=useState(false)
const navigate=useNavigate();

    const checked=()=>{
setCheck(!check)
    }


    // seach section 

    let id;
const  myInput=()=>{
    debounce(main,500)
}

    function debounce(func, delay) {
        if (id) clearTimeout(id);
        id = setTimeout(function () {
          func();
        }, delay);
      }
      
    async function main() {
     searchCity();
    }
    async function searchCity() {  
        try {

           if(text.length>1){
       const url=`https://venomous-plough-7848.vercel.app/api/search/stays?q=${text}`;
       let res=await fetch(url);
        res=await res.json();
        console.log(res);
setData(res.sr);
           }     else{
            setData([]);

           }   
        } catch (err) {
          console.log(err);
        }
      }

      const onClick=(id)=>{
        let value=document.getElementById(id).innerText;
        let input=document.getElementById("query");
        input.value=value;
        // console.log(input,value,id)
        setText(value);       
        setData([])
      }

const onSubmit=async(e)=>{
    e.preventDefault();
      Hotels(text);
    navigate("/hotels");
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
        <div style={{display:"block"}}>
    <Input className={style.myinput}  id="query" onChange={(e)=>{setText(e.target.value)}} onInput={myInput} placeholder='Going to'/>
<div className={style.suggestions}>
    {data?.map((el)=>(
    <div style={{border:"1px solid",gap:"10px",height:"30px",overflow:"auto"}}  id={`${el.index}`} onClick={()=>onClick(`${el.index}`)}  >
        
        <div>{el.regionNames.fullName}</div>
        
    </div>
))}</div>
</div>
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

<br />
<div className={style.flightdiv}>

<div><Input type={"checkbox"} onClick={checked}/>Add Flight</div>
<div><Input type={"checkbox"}/>Add car</div>

    {check? <Input className={style.myinput} placeholder='Leaving from '/>:""}
<Button className={style.Button} onClick={onSubmit}>Search</Button>
</div>
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

<br />
<div className={style.flightdiv}>

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
</div>

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
<br />
<div className={style.flightdiv}>



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
</div>

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

<br />
<div className={style.flightdiv}>

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
</div>

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

<br />
<div className={style.flightdiv}>

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
</div>
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

<br />
<div className={style.flightdiv}>
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
</div>

    </TabPanel>
  </TabPanels>
</Tabs>
      

        </div>
        
 

    </div>
  )
}

export default SearchBar