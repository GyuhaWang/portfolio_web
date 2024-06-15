'use client'
import DurationBox from "@/component/durationBox";
import ProjectBox from "@/component/projectBox";
import { carrerData } from "@/data/carrerData";
import useRegisterComponentRef from "@/hook/useRegisterComponent";


const Carrer = () => {
    const ref = useRegisterComponentRef('carrer') as React.RefObject<HTMLDivElement>;
    return <section id="carrer" ref={ref} >
        <div className="aboutMeLayout">
            <div className="w-full ">
        {carrerData.map((carrer, index)=>
            <div key={index} className="flex grow-[1] flex-col gap-2" > 
            <DurationBox>{`${carrer.startDate} - ${carrer.endDate}`}</DurationBox>
            <h2 className="text-2xl font-bold">{carrer.companyName}</h2>
            <h2 className="uppercase text-xl font-semibold" >{carrer.role}</h2>
            <div className="carrerLayout"
         
            >
           {carrer.project.map((project,index)=>
           <ProjectBox key={index} data={project}/>
           )} </div>
           </div>
        )}</div>
        </div>
        
    </section>

}

export default Carrer;