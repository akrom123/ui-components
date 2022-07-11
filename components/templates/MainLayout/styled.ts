import { styled } from "../../../theme";

export const StyledMainLayout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const StyledMainLayoutContent = styled.div`
  flex: 1;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => `0 ${theme.spacing.xxl}`};
  display: flex;
  flex-direction: column;
`

export const StyledMainLayoutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`