import React from 'react';
import { ReactComponent as SearchSVG } from 'assets/icons/search.svg';
import { SSearchBarWrapper, SInput, SSearchBarButton } from './SearchBar.styles';

type Ref = HTMLInputElement;
type InputProps = JSX.IntrinsicElements['input'];

const SearchBar = React.forwardRef<Ref, InputProps>((props, ref) => {
  return (
    <SSearchBarWrapper>
      <SInput {...props} ref={ref} />
      <SSearchBarButton type="submit">
        <SearchSVG />
      </SSearchBarButton>
    </SSearchBarWrapper>
  );
});

export default SearchBar;
