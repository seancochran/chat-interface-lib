interface DefaultTheme {
    text: {
      fontFamily: string;
      fontSize: number;
      fontWeight: string | number;
      color: string;
    };
    suggestionChip: {
        backgroundColor: string;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
        boxShadow: string;
        padding: string;
        fontSize: number;
        color: string;
        hoverBackgroundColor?: string;
        hoverTextColor?: string;
        hoverBorderColor?: string;
        hoverBorderRadius?: number;
        hoverBorderWidth?: number;
        hoverBoxShadow?: string;
        hoverPadding?: string;
        hoverScale?: number;
      };
  }
  
  interface CustomTheme extends Partial<DefaultTheme> {
    // This makes all DefaultTheme properties optional in CustomTheme
    // Add any additional custom theme properties here if needed
  }