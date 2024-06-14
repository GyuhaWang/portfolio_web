'use client';
import { Project } from '@/types/project';
import { useState } from 'react';
import SkillBox from './skillBox';

const ProjectBox = ({
	data,
	color = '#feae6f',
}: {
	data: Project;
	color?: string;
}) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className="projectBox"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<div className={`head  bg-secondary`} />
			<div className="flex flex-col p-4 gap-8 justify-start grow-[7]">
				<div className="flex flex-col gap-1">
					<div className="text-3xl font-semibold">{data.title}</div>
					<div className="text-sm font-medium"> {data.projectDetail}</div>
					<div className="text-base font-medium">@{data.role}</div>
				</div>

				<div className="flex flex-col gap-1">
					{data.content.map((content, index) => (
						<div key={index}>
							<div className="text-base font-semibold">- {content}</div>
						</div>
					))}
				</div>
			</div>
			<div className="stackLayout">
				{data.stack.map((content, index) => (
					<div key={index}>
						<SkillBox>{content}</SkillBox>
					</div>
				))}
			</div>

			<div className={`effect ${isHovered ? 'w-[100%]' : 'w-[0%]'}`}>
				<div className={`${isHovered ? 'visible' : 'invisible'}`}>
					{data.link && (
						<a
							className="projectLink"
							href={data.link}>
							자세히 보기
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectBox;
