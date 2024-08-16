import { animate, motion } from "framer-motion";
import { exit } from "process";

const stairAnimate={
    initial:{
        top:'0%',
    },
    animate:{
        top:'100%',
    },
    exit:{
        top:['100%','0%'],
    },
}
const reverseIndex =(index)=>{
 const totalSteps = 6;
 return totalSteps-index-1;
}
const Stairs = () => {
return(
{[...Array(6)].map((_,index)=>{
    <motion.div 
    key={index}
    varients={stairAnimate}
    
})}
)
}