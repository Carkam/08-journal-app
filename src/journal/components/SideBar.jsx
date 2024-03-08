/* eslint-disable react/prop-types */
import { TurnedInNot } from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    List,
    Toolbar,
    Typography,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Grid,
    ListItemText
} from "@mui/material";

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component={'nav'}
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component={'div'}
                    >
                        Carlos laib
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'jksdjksd sdj ksdjk sjk ddkljs '}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
