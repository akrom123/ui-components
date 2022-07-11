import React from 'react';
import { StyledTippy, StyledTooltipWrap } from './styled';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { ITooltipProps } from './types';
import { Icon } from '../../atoms/Icon';

export const Tooltip: React.FC<ITooltipProps> = ({ content, children }) => {
  return <Tippy content={<StyledTippy>
    {content}
  </StyledTippy>}>
    <StyledTooltipWrap>{children || <Icon name='help' size={12} />}</StyledTooltipWrap>
  </Tippy>;
} 