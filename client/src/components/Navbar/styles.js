import { makeStyles } from "@material-ui/core"
import { deepPurple } from "@material-ui/core/colors"

export default makeStyles((theme)=>({
 
    appBar:{
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },

    brandContainer:{
        display: "flex",
        alignItems: "center",
    },

    heading:{
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },

    purple:{
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],

    },

    profile:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },

    userName:{
        display: 'flex',
        alignItems: 'center',
    },

    logout:{

    },


    toolbar:{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },

    image: {
        marginLeft: '15px',
    },


}))

