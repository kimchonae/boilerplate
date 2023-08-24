import Button from "@/components/commons/Button/Button";
import HomeTitle from "@/components/commons/parts/Home/HomeTitle/HomeTitle";
import { usePersistValue } from "@/hooks/common";
import { setDecrease, setIncrease } from "@/store/exampleSlice";
import { RootState } from "@/store/store";
import { bounceAnimation } from "@/styles/animations";
import { breakPoints } from "@/styles/breakPoints";
import { centerAlignment, horizontalAlignment } from "@/styles/flexModules";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.count);
    return (
        <>
            <Head>
                <title>My Boilerplate</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* redux toolkit & persist example */}
            <StyledHome>
                <HomeTitle />
                <Image
                    alt="react_logo"
                    src="/images/react.png"
                    width={200}
                    height={200}
                />
                <div>
                    <p>가져온 리덕스 현재 카운트: {count.count}</p>
                    <Button
                        onClick={() => {
                            dispatch(setIncrease(1));
                        }}
                        label={"+"}
                    />
                    <Button
                        onClick={() => {
                            dispatch(setDecrease(1));
                        }}
                        label={"-"}
                    />
                </div>
                <p>
                    가져온 로컬스토리지 리덕스 퍼시스트 카운트 값:{" "}
                    {usePersistValue("count")}
                </p>
                {/* 글로벌 스타일 테스트 */}
                <GlobalTest>테스트</GlobalTest>
            </StyledHome>
        </>
    );
}

const StyledHome = styled.div`
    > div {
        display: flex;
    }
`;

const GlobalTest = styled.div`
    position: relative;
    ${centerAlignment};
    color: black;
    background-color: ${theme.color.light.bodyColor};
    width: 100px;
    height: 100px;
    border-radius: 50px;

    animation: ${bounceAnimation} 1s ease-in Infinite Alternate;

    @media (${breakPoints.mobile}) {
        background-color: blue;
    }
`;
