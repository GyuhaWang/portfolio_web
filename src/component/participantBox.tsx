const ParticipantBox = ({ children }: { children: number }) => {
	return (
		<div className="participantBox">
			{children > 1 ? `팀 ${children}명` : '개인'}
		</div>
	);
};
export default ParticipantBox;
