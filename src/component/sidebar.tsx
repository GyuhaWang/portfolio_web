'use client';
import useCurrentComponent from '@/hook/useCurrentComponent';
import { useScroll } from '@/hook/useScroll';

const SideBar = () => {
	const scrollToComponet = useScroll();
	const currentComponent = useCurrentComponent();

	const index = ['skill', 'education', 'carrer', 'project'];
	return (
		<div className="sidebar">
			{index.map((idx, index) => (
				<div key={index}>
					<button
						style={{ border: 'none', backgroundColor: 'black' }}
						onClick={() => scrollToComponet(idx)}>
						<h1
							style={{
								color: `${idx == currentComponent ? '#66fcf1' : '#45a291'}`,
								textTransform: 'uppercase',
							}}>
							{idx}
						</h1>
					</button>
				</div>
			))}
		</div>
	);
};
//    #0b0c10
//    1f2833
export default SideBar;
