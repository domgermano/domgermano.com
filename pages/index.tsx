import * as React from "react";

import { Grid, HtmlHead, Text } from "components/shared";

const Index = () => (
  <>
    <HtmlHead />
    <Grid>
      <Text kind="display">Display</Text>
      <Text kind="label">Label</Text>
      <Text kind="paragraph">Paragraph</Text>
      <Text kind="hand">Hand</Text>
      <Text kind="system">System</Text>
    </Grid>
  </>
);

export default Index;
