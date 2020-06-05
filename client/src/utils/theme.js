import { css } from "@emotion/core";

export const variables = {
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
    },
};
