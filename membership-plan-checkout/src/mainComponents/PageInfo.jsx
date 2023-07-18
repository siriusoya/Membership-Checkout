import React from "react";

import {
    PageContainer,
    PageNumber,
    PageName,
    PageDisplay,
    PageContent,
    TheNumber,
    RightSymbol,
  } from "../stylingComponents/Page";

function PageInfo(props) {
    const { page } = props;

    return(
    <>
    <PageContainer>
          <PageContent>
            <PageDisplay pageNumber={1} page={page}>
              <PageNumber pageNumber={1} page={page}>
                <TheNumber>1</TheNumber>
              </PageNumber>
              <PageName>Profile</PageName>
              <RightSymbol>
                <span className="material-symbols-outlined">chevron_right</span>
              </RightSymbol>
            </PageDisplay>
            <PageDisplay pageNumber={2} page={page}>
              <PageNumber pageNumber={2} page={page}>
                <TheNumber>2</TheNumber>
              </PageNumber>
              <PageName>Payment</PageName>
              <RightSymbol>
                <span className="material-symbols-outlined">chevron_right</span>
              </RightSymbol>
            </PageDisplay>
            <PageDisplay pageNumber={3} page={page}>
              <PageNumber pageNumber={3} page={page}>
                <TheNumber>3</TheNumber>
              </PageNumber>
              <PageName>Finish</PageName>
            </PageDisplay>
          </PageContent>
        </PageContainer>
    </>
    )
}

export default PageInfo;