/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoListOverridesProps = {
    TodoList?: PrimitiveOverrideProps<FlexProps>;
    ItemCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    text40661135?: PrimitiveOverrideProps<TextProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    text40661138?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TodoListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TodoListOverridesProps | undefined | null;
}>;
export default function TodoList(props: TodoListProps): React.ReactElement;
