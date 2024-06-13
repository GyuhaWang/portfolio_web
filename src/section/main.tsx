import BouncingButton from '@/component/bouncingButton';
import ScrollDownButton from '@/component/scrollDownButton';
import { useScroll } from '@/hook/useScroll';

const Main = () => {
	console.log('main page loaded');
	return (
		<section className="mainSectionLayout">
			<div className="background" />
			<div className="contentLayout">
				<div className="content">
					<div className="text-gray items-start justify-start pl-4">
						<h1 className="uppercase text-[3rem]">
							Frontend
							<br />
							Developer
						</h1>
					</div>
					<div className="flex-col justify-end items-end text-black pr-4 text-[1.2rem] text-right">
						<h1 className="text-[2rem]">왕규하</h1>
						<h3 className="text-[1.3rem]">문제를 정의하고 해결하는 개발자</h3>
					</div>
				</div>
				<div className="scrollDown">
					<ScrollDownButton />
				</div>
			</div>
		</section>
	);
};

export default Main;
