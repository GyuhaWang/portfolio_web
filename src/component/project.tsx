'use client';
import DurationBox from '@/component/durationBox';

import ProjectBox from '@/component/projectBox';
import { projectData } from '@/data/projectData';
import useRegisterComponentRef from '@/hook/useRegisterComponent';
import ParticipantBox from './participantBox';

const Projecct = () => {
	const ref = useRegisterComponentRef(
		'project'
	) as React.RefObject<HTMLDivElement>;
	return (
		<section
			id="project"
			ref={ref}>
			<div className="aboutMeLayout">
				<div className="projectLayout">
					{projectData.map((project, index) => (
						<div
							key={index}
							className="flex flex-col gap-4">
							<div className="flex gap-4">
								<DurationBox>{`${project.startDate} - ${project.endDate}`}</DurationBox>
								<ParticipantBox>{project.participantsNum}</ParticipantBox>
							</div>
							<ProjectBox
								data={project}
								color="#F6DCAC"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projecct;
