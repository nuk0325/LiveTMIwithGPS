import { css } from 'styled-components';

// 1. 폰트 두께 정의
export const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

// 2. 폰트 스케일 및 타이포그래피 스타일 정의
export const FONT_STYLE = {
    // Logo
    logo: css`
        font-size: 48px;
        font-weight: ${FONT_WEIGHT.regular}
        line-height: 150%;
        letter-spacing: -0.02em;
    `,

    // Headings
    header1: css`
        font-size: 28px;
        font-weight: ${FONT_WEIGHT.regular};
        line-height: 150%;
        letter-spacing: -0.02em;
    `,
    header2: css`
        font-size: 22px;
        font-weight: ${FONT_WEIGHT.bold};
        line-height: 150%;
        letter-spacing: -0.01em;
    `,
    header3: css`
        font-size: 18px;
        font-weight: ${FONT_WEIGHT.semiBold};
        line-height: 150%;
    `,

    // Body Texts
    body1: css`
        font-size: 16px;
        font-weight: ${FONT_WEIGHT.regular};
        line-height: 150%;
    `,
    body2: css`
        font-size: 14px;
        font-weight: ${FONT_WEIGHT.regular};
        line-height: 150%;
    `,
    body3: css`
        font-size: 12px;
        font-weight: ${FONT_WEIGHT.regular};
        line-height: 150%;
    `,

    // Caption / Small Labels (예: 몇 분 전, 댓글 수 등)
    caption: css`
        font-size: 10px;
        font-weight: ${FONT_WEIGHT.regular};
        line-height: 150%;
    `,
} as const;