import { useDispatch, useSelector } from "react-redux";
import { JournalLayout } from "../layout/JournalLayout";
import { Typography, IconButton } from "@mui/material";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {

  const { isSaving, active } = useSelector(state => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>

      {/* <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque cupiditate provident numquam totam voluptatibus fuga voluptas ipsa doloremque exercitationem, beatae asperiores perferendis impedit corporis dolorem quae assumenda corrupti nesciunt odit.
        </Typography> */}

      {
        (!!active)
          ?
          <NoteView />
          :
          <NothingSelectedView />
      }

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={onClickNewNote}
        disabled={isSaving}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
