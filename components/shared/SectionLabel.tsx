import * as React from "react";

import styled from "styled-components";

import { Text } from "./Text";

export const SectionLabel = (props: { label: string }) => (
  <Container>
    <Label kind="label">{props.label}</Label>
    <Divider />
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

const Label = styled(Text)`
  white-space: nowrap;
  margin-right: 20px;
`;

const Divider = styled.hr`
  width: 100px;
`;
