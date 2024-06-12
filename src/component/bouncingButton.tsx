import { ReactElement } from 'react';

const BouncingButton = ({
	child,
	action,
}: {
	child: ReactElement;
	action: () => void;
}) => {
	return (
		<div
			className="cursor-pointer animate-bounce"
			onClick={action}>
			{child}
		</div>
	);
};

export default BouncingButton;
