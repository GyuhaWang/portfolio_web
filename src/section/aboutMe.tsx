import Carrer from '@/component/carrer';
import Education from '@/component/education';
import Projecct from '@/component/project';
import SideBar from '@/component/sidebar';
import Skill from '@/component/skill';

const AboutMe = () => {
	return (
		<section className="aboutMeSectionLayout">
			<SideBar />
			<div className="w-full">
				<Skill />
				<Education />
				<Carrer/>
				<Projecct />
			</div>
			{/* <SideBar/>
       <div style={{width:'100%'}}>
        <Skill/>
        <Education/>
        <Carrer/>
        <Projecct/>
       </div> */}
		</section>
	);
};

export default AboutMe;
