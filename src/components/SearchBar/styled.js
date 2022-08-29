import styled from "styled-components";
// import AppBar from "@mui/material/AppBar";
// import InputBase from "@mui/material/InputBase";

export const Icon = styled.div`
position: relative;
display: flex;
    svg{
        position: absolute;
        align-self: center;
        margin-left: 17px;
        width: 24px;
        height: 24px;
    }
`

export const SearchContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2.1% 0;
input{
    width: 91%;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    padding-left: 56.3px;
}
`


// export const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     width: "95vw",
//     margin: "2vw",
//     height: "56px",
//     alignItems: "center",
//     border: "1px solid  #b8b8b8",
//     marginTop: "-9px",
//   }));
//   export const AppBarr = styled(AppBar)`
//     background-color: #ffffff;
//     border-top: 1px solid #b8b8b8;
//     box-shadow: none;
//   `;
  
//   export const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     color: "GrayText",
//     justifyContent: "center",
//   }));
  
//   export const StyledInputBase = styled(InputBase)(({ theme }) => ({}));