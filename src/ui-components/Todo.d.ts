/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodoInputValues = {
    name?: string;
    description?: string;
};
export declare type TodoValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoOverridesProps = {
    TodoGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoProps = React.PropsWithChildren<{
    overrides?: TodoOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TodoInputValues) => TodoInputValues;
    onSuccess?: (fields: TodoInputValues) => void;
    onError?: (fields: TodoInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoInputValues) => TodoInputValues;
    onValidate?: TodoValidationValues;
} & React.CSSProperties>;
export default function Todo(props: TodoProps): React.ReactElement;
