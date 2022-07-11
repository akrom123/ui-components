import React from 'react'
import { IIconProps } from './types';

export const iconsCache = {};

require.context('../../../../assets/icons', true, /\.svg$/)
  .keys()
  .forEach(key => {
    key = key.replace(/^\.\/(.*)\.svg$/, '$1');
    const name = key.replace('/', '-');
    try {
      iconsCache[name] = require(`!!react-svg-loader!../../../../assets/icons/${key}.svg`).default;
    } catch (e) {
      console.log(e)
    }
  });

export const Icon: React.FC<IIconProps> = ({ name = 'currency-usd', size = 24, ...props }) => {
  const Component = iconsCache[name];
  return (
    <Component width={size} height={size} {...props} />
  )
}