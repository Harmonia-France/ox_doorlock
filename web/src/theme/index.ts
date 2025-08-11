import { Button, MantineThemeOverride } from '@mantine/core';

const colors = {
  yellow: '#fccb18',
  orange: '#f68702',
  purple: '#8f7979',
  gray: '#666966',
  'dark-gray': '#232323',
  white: '#ffffff',
};


export const customTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Nunito, sans-serif',
  components: {
    Tooltip: {
      defaultProps: {
        transition: 'pop',
      },
    },

    Input: {
      styles: (theme) => ({
        input: {
          ...theme.fn.focusStyles(),
          backgroundColor: colors.yellow,
          borderColor: colors.orange,
          color: colors.white,
          '&:focus': {
            borderColor: colors.purple,
            boxShadow: `0 0 0 3px ${colors.orange}`,
          },
        },
      }),
    },

    // Pour styliser le label
    InputWrapper: {
      styles: {
        label: {
          color: colors.white,
          fontWeight: 600,
          fontSize: 14,
        },
      },
    },

    TextInput: {
      styles: {
        input: {
          borderColor: colors.orange,
          backgroundColor: colors.yellow,
          color: colors.white,
        },
      },
    },

    Button: {
      styles: (theme) => ({
        root: {
          // Styles généraux du bouton
          backgroundColor: '#FF9900', // Couleur de fond
          color: theme.colorScheme === 'dark' ? '#FFFFFF' : '#000000', // Couleur du texte
          borderRadius: '8px', // Bordure arrondie
          padding: '10px 20px', // Padding du bouton
          fontWeight: 600, // Poids de la police
          fontSize: '16px', // Taille de la police
          '&:hover': {
            backgroundColor: '#f68702', // Couleur de fond au survol
          },
          '&:active': {
            backgroundColor: '#ff8000', // Couleur de fond lorsqu'on clique
          },
        },
      }),
    },

    Switch: {
      styles: {
        track: {
          backgroundColor: colors['dark-gray'],
          borderColor: colors.orange,
        },
        thumb: {
          backgroundColor: colors.white,
          '&:checked + * > &': {
            backgroundColor: colors.yellow,
            borderColor: colors.orange,
          },
        },
        label: {
          color: colors.white,
        },
        input: {
          '&[data-checked]': {
            backgroundColor: colors.yellow,
            borderColor: colors.orange,
          },
          '&[data-checked] + .mantine-Switch-thumb': {
            backgroundColor: colors.orange,
          },
        },
      },
    },
  },
};
