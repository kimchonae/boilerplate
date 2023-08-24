/*
PC: 1200px
Tablet: 768px ~1199px
Mobile: 360px ~767px
*/

export const breakPoints = {
    pc: "min-width: 1200px",
    tablet: "max-width: 1199px",
    mobile: "max-width: 767px",
};

export type breakPointsType = typeof breakPoints;
