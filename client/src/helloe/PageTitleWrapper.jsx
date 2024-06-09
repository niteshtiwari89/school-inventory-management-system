// import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, styled } from '@mui/material';

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
`
);

const PageTitleWrapper = ({ children }) => {
  return (
    <PageTitle className="MuiPageTitle-wrapper" sx={{padding:"20px"}}>
      <Container maxWidth="lg" sx={{padding:"", minWidth:"1285px"}}>{children}</Container>
    </PageTitle>
  );
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitleWrapper;
