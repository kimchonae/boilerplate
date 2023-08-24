import styled from "@emotion/styled"

export default function Footer() {
	return (
		<StyledFooter>
			<p>footer</p>
		</StyledFooter>
	)
}

const StyledFooter = styled.header`
	display: flex;
	align-items: center;

	max-width: 100vw;
	width: 100%;
	height: 175px;
	border-top: 1px solid white;

	> p {
		padding-left: 30px;
	}
`
