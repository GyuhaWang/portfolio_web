'use client';

import BouncingButton from './bouncingButton';
import { useScroll } from '@/hook/useScroll';
import Image from '../../node_modules/next/image';
const ScrollDownButton = () => {
	const scrollController = useScroll();
	console.log('button');
	return (
		<div
			className="flex grow-[1] pt-4 pb-4 w-full bg-transparent justify-center items-center"
			onClick={() => {
				scrollController('skill');
			}}>
			<BouncingButton
				child={
					<Image
						src="/icon-downArrow.svg"
						height={40}
						width={40}
						alt="scrollToNext"
					/>
				}
				action={() => {
					scrollController('skill');
				}}
			/>
		</div>
	);
};

export default ScrollDownButton;
