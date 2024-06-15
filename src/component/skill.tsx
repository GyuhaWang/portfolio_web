'use client';
import { skillSetData } from '@/data/skillData';
import useRegisterComponentRef from '@/hook/useRegisterComponent';
import ImageBox from './ImageBox';

const Skill = () => {
	const ref = useRegisterComponentRef(
		'skill'
	) as React.RefObject<HTMLDivElement>;
	return (
		<section
			id="skill"
			ref={ref}>
			<div className="aboutMeLayout gap-2">
				<h1 className="skillHeader">language</h1>
				<div className="skillDiv">
					{skillSetData.language.map((skill, index) => (
						<ImageBox
							key={index}
							src={skill.src}
							title={skill.title}
						/>
					))}
				</div>
				<h1 className="skillHeader">framework</h1>
				<div className="skillDiv">
					{skillSetData.framework.map((item, index) => (
						<ImageBox
							key={index}
							src={item.src}
							title={item.title}
						/>
					))}
				</div>
				<h1 className="skillHeader">colaborate & tools</h1>
				<div className="skillDiv">
					{skillSetData['tools&collaborations'].map((item, index) => (
						<ImageBox
							key={index}
							src={item.src}
							title={item.title}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skill;
