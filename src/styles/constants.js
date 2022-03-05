const COLORS = {
  PRIMARY: '#F39945',
  LIGHT_GRAY: '#F5F5F7',
  GRAY: 'rgba(0,0,0,0.2)',
  DARK_GRAY: '#686868',
  BLACK: '#252525',
  PRIMARY2: '#F3DAC2',
  WHITE: '#FFFFFF',
  BEIGE: '#FBF7F2;',
};

const MODALS = {
  CONFIRM: 'CONFIRM',
  ALERT: 'ALERT',
};

const SIZES = {
  MIN_WIDTH: '320px',
  SMALL_WIDTH: '450px',
  MIDDLE_WIDTH: '650px',
  MAIN_MAX_WIDTH: '800px',

  HEADER_HEIGHT_LARGE: '82px',
  HEADER_HEIGHT_MIDDLE: '62px',
  HEADER_HEIGHT_SMALL: '52px',
};

const HOVER_CURSOR_PONTER = '&:hover{cursor: pointer}';

const SCROLL_PRIMARY = `  
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY};
  }
  &::-webkit-scrollbar-track {
    background-color: ${COLORS.GRAY};
  }
`;

const PARTY_COLORS = ['#FFA978', '#FAC05E', '#F79D5C', '#F4AC45'];

export { COLORS, SIZES, HOVER_CURSOR_PONTER, SCROLL_PRIMARY, MODALS, PARTY_COLORS };
