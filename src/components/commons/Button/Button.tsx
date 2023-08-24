import { ButtonTypes } from "@/components/types/commons"
import styled from "@emotion/styled"

export default function Button(props: ButtonTypes) {
	const { onClick, label } = props
	return <StyledButton onClick={onClick}>{label}</StyledButton>
}

const StyledButton = styled.button`
	padding: 8px;
	padding-top: 5px;
	padding-bottom: 5px;

	margin-left: 5px;

	border: 1px solid white;
	border-radius: 4px;
`
