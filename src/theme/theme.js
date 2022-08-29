import { createTheme } from '@mui/material/styles'
import { primaryColor, secondaryColor } from './colors'

const theme = createTheme({

    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#000000'
        },

        secondary: {
            main: secondaryColor,
            contrastText: '#000000'
        },
    },
    components:{
        MuiButton:{
          variants: [
            {
              props: { variant: 'primary' },
              style: {
                background: primaryColor,
                padding: '12px'
              },
            },
            {
                props: { variant: 'secondary' },
                style: {
                  background: secondaryColor,
                  padding: '12px',
                  color:'black'
                },
              }
          ]
          
        }
    }
})


export default theme