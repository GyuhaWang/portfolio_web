'use client'
import { skillSetData } from "@/data/skillData";
import useRegisterComponentRef from "@/hook/useRegisterComponent";
import ImageBox from "./ImageBox";

const Skill = ()=> {
    const ref = useRegisterComponentRef('skill') as React.RefObject<HTMLDivElement>;
    return   <section id='skill' ref={ref} >
    <div className="aboutMeLayout">
        <h1 style={{textTransform:'uppercase'}}>language</h1>
        <div style={{display:"flex",flexWrap:'wrap', flexDirection:"row", gap:'12px'}}>
        {skillSetData.language.map((skill, index)=> <ImageBox key={index} src={skill.src} title={skill.title}/>)}
        </div>
        <h1 style={{textTransform:'uppercase'}}>framework</h1>
        <div style={{display:"flex",flexWrap:'wrap', flexDirection:"row", gap:'12px'}}>
        {skillSetData.framework.map((item, index)=> <ImageBox key={index} src={item.src} title={item.title}/>)}
        </div>
        <h1 style={{textTransform:'uppercase'}}>colaborate & tools</h1>
        <div style={{display:"flex",flexWrap:'wrap', flexDirection:"row", gap:'12px'}}>
        {skillSetData["tools&collaborations"].map((item, index)=> <ImageBox key={index} src={item.src} title={item.title}/>)}
        </div>
        
    </div>
   

   </section>
}

export default Skill;