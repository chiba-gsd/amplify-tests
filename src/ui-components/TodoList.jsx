/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CheckboxField, Flex, Text } from "@aws-amplify/ui-react";
export default function TodoList(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="320px"
      height="150px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TodoList")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="76px"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ItemCard")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 418")}
        >
          <CheckboxField
            width="unset"
            height="unset"
            padding="0px 12px 0px 12px"
            shrink="0"
            size="large"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "CheckboxField")}
          ></CheckboxField>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 417")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="space-between"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 419")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="text"
              {...getOverrideProps(overrides, "text40661135")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="space-between"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 10px 0px 10px"
            {...getOverrideProps(overrides, "Frame 420")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="text"
              {...getOverrideProps(overrides, "text40661138")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
