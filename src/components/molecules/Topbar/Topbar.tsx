import React from 'react';

import StyledTopbar from 'components/molecules/Topbar/Topbar.styled';
import Search from 'components/atoms/Search/Search';

const Topbar: React.FC = () => {
  return (
    <StyledTopbar>
      <Search />
    </StyledTopbar>
  );
};

export default Topbar;
