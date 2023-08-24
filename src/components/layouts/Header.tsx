import styled from "@emotion/styled"

export default function Header() {
	return (
		<StyledHeader>
			<p>header</p>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	display: flex;
	align-items: center;

	max-width: 100vw;
	width: 100%;
	height: 100px;
	border-bottom: 1px solid white;

	> p {
		padding-left: 30px;
	}
`
