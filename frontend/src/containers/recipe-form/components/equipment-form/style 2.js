// @flow
import styled from "@emotion/styled";

const EquipmentForm = styled("div")`
    display: flex;

    & .equipment-form {
        &__equipment {
            border: 1px solid rgba(0, 0, 0, 0.26);
            width: 100%;
            height: 40px;
            align-self: center;
            margin-top: 7px;
            display: flex;
            align-items: center;
            padding: 0 ${(props) => props.theme.spacing.tiny};
            overflow-x: scroll;
        }

        &__bubble {
            background: ${(props) => props.theme.color.secondaryBrand};
            color: ${(props) => props.theme.color.brand};
            padding: 3px ${(props) => props.theme.spacing.tiny} 3px
                ${(props) => props.theme.spacing.medium};
            border-radius: ${(props) => props.theme.radius.oval};
            align-items: center;
            display: flex;
            font-size: ${(props) => props.theme.fontSize.small};
            margin: 0 ${(props) => props.theme.spacing.smallest};
        }

        &__x {
            margin-left: ${(props) => props.theme.spacing.small};
            max-height: ${(props) => props.theme.fontSize.base};
            border-radius: 50%;
            cursor: pointer;
        }

        &__x:hover {
            opacity: 0.8;
        }
    }
`;

export default EquipmentForm;
