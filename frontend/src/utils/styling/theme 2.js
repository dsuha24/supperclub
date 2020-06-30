import { css } from "@emotion/core";

export const variables = {
    color: {
        header: "#6B6E6F",
        border: "#F7F7F7",
        primary: "#22222b",
        secondary: "#B3B2B7",
        success: "#00c358",
        failure: "#F32535",
        brand: "#216CD9",
        secondaryBrand: "#DFEBFC",
    },
    radius: {
        rounded: "4px",
        oval: "18px",
    },
    fontSize: {
        tiny: "10px", // 8px
        small: "12px", // 12px
        medium: "14px", // 14px
        base: "16px", // 16px
        large: "24px", // 24px
        huge: "36px", // 36px
    },
    fontWeight: {
        bold: "800",
        semiBold: "500",
    },
    font: {
        header: "Futura",
        // base: `Montserrat`,
        // header: "'Roboto Slab', serif",
    },
    media: {
        desktop: "1200px",
        medium: "1005px",
        tablet: "768px",
        mobile: "576px",
        tiny: "340px",
    },
    spacing: {
        smallest: "3px",
        tiny: "8px",
        small: "12px",
        medium: "24px",
        large: "36px",
        huge: "48px",
        largest: "70px",
    },
    zIndex: {
        modal: 10000,
        mainMenu: 2500,
        popover: 3000,
        sticky: 1000,
        elevated: 100,
        defined: 1,
        behind: -1,
    },
    helpers: {
        flexCenter: css`
            display: flex;
            justify-content: center;
            align-items: center;
        `,
        boxShadow: css`
            box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
                0 15px 40px rgba(166, 173, 201, 0.2);
        `,
    },
};
