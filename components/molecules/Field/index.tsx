import React from 'react'
import { StyledField, StyledFieldCaption, StyledFieldLabel } from './styled'
import { IFieldProps } from './types'

export const Field: React.FC<IFieldProps> = ({ label, caption, hasError, children, ...props }) => {
  return <StyledField {...props}>
    <StyledFieldLabel>{label}</StyledFieldLabel>
    {children}
    {caption && <StyledFieldCaption hasError={hasError}>{caption}</StyledFieldCaption>}
  </StyledField>
}