'use client';
import useRegisterComponentRef from '@/hook/useRegisterComponent';
import DurationBox from './durationBox';

const Education = () => {
	const ref = useRegisterComponentRef(
		'education'
	) as React.RefObject<HTMLDivElement>;
	return (
		<section
			id="education"
			ref={ref}>
			<div className="aboutMeLayout gap-3">
				<DurationBox>2018 -2024</DurationBox>
				<div className="educationDiv ">
					<div>
						<h1 className="educationTitle">한국외국어대학교</h1>

						<ul className="educationList">
							<li>
								<h3>GlobalBusiness&Technology (경영학사)</h3>
							</li>
							<li>
								<h3>컴퓨터.전자시스템 (공학사)</h3>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="educationTitle">수상내역</h1>

						<ul className="educationList">
							<li>
								<h3>제6회 한국외국어대학교 경상대 학술제</h3>
							</li>
							<li>
								<h3>2023년 도시형소상공인 직접지구 캡스톤 경진대회</h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
