import styled from "styled-components"
import { Container } from "@material-ui/core";


export const AppContainer = styled(Container)`
background-color:#fff;
max-width:1550px;
display:flex;
flex-direction:column;
padding-top:100px;


.MuiContainer-root{
  padding:0;
  margin:0;
}
@media (min-width: 600px){
  padding:0;
}

`