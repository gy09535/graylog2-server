import { css } from 'styled-components';

import { util } from 'theme';

const defaultOptions = {
  sibiling: false,
};
const menuItemStyles = (options = defaultOptions) => css(({ theme }) => css`
  ${options.sibling ? '& ~' : '&'} .dropdown-menu {
    > li > a {
      color: ${theme.color.global.textDefault};
      font-size: 14px;

      :hover,
      :focus {
        color: ${util.contrastingColor(theme.color.gray[90])};
        background-color: ${theme.color.gray[90]};
      }
    }

    > .active > a {
      color: ${util.contrastingColor(theme.color.variant.light.info)};
      background-color: ${theme.color.variant.light.info};

      :hover,
      :focus {
        color: ${util.contrastingColor(theme.color.variant.info)};
        background-color: ${theme.color.variant.info};
      }
    }

    > .disabled > a {
      color: ${util.contrastingColor(theme.color.gray[90], 'AA')};
      background-color: ${theme.color.gray[90]};

      :hover,
      :focus {
        color: ${util.contrastingColor(theme.color.gray[90], 'AA')};
      }
    }
  }
`);

export default menuItemStyles;
