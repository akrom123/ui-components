import { styled } from "../../../theme";

export const StyledPortfolioActions = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
`

export const StyledPortfolioForm = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;
  > div:first-child {
    flex: 2;
  }
  > div:nth-child(2) {
    flex: 1;
  }
`

export const StyledPortfolioCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 370px));
  gap: ${({ theme }) => theme.spacing.md};
`

export const StyledPortfolioTables = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`