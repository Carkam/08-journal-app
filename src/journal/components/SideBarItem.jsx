/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    Grid,
    ListItemText
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";


export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({ id, title, body, date, imageUrls }))
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title])

    return (
        <ListItem disablePadding>
            <ListItemButton  onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
