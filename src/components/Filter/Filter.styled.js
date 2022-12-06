import styled from 'styled-components';

export const FilterTitle = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-weight: bold;
  color: ${p => p.theme.colors.textAccent};
 
  font-size: ${p => p.theme.sizes.l}; ;
`;

export const FilterInput = styled.input`
  font-size: ${p => p.theme.fontSizes.l};
  background: ${p => p.theme.colors.bgLight};
  min-width: ${p => p.theme.sizes.xxl};
  
`;