/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HeroLayout3Props } from "./HeroLayout3";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestCollectionOverridesProps = {
    TestCollection?: PrimitiveOverrideProps<CollectionProps>;
    HeroLayout3?: HeroLayout3Props;
} & EscapeHatchProps;
export declare type TestCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HeroLayout3Props;
} & {
    overrides?: TestCollectionOverridesProps | undefined | null;
}>;
export default function TestCollection(props: TestCollectionProps): React.ReactElement;
