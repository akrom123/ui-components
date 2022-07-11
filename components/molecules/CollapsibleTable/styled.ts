import { styled } from "../../../theme";
import { RowProps } from "./types";

export const StyledCollapsibleTable = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const StyledCollapsibleTableHeader = styled.div<RowProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ width }) => width.map(c => c || '1fr').join(' ')} 1fr;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
`

export const StyledCollapsibleTableHeaderCell = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  ${({ theme }) => theme.font.caption1}
`

export const StyledCollapsibleTableBody = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bg.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

export const StyledCollapsibleTableBodyRow = styled.div<RowProps>`
  display: grid;
  grid-template-columns: ${({ width }) => width.map(c => c || '1fr').join(' ')} 1fr;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  height: 60px;
`

export const StyledCollapsibleTableBodyContent = styled.div`
  padding: ${({ theme }) => `0 ${theme.spacing.md} ${theme.spacing.md}`};
`

export const StyledCollapsibleTableBodyCell = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  ${({ theme }) => theme.font.body2};
  &:last-child {
    justify-content: flex-end;
  }
`

export const StyledCollapsibleTableArrow = styled.div<{ open: boolean }>`
  transform: rotate(${open => open ? '180deg' : '0'});
  cursor: pointer;
  svg {
    display: block;
  }
`