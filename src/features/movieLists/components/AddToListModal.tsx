import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { addMovieToList } from "../store/movieListsSlice";
import { Modal, Box, Typography, Button, List, ListItem } from "@mui/material";
import { Movie } from "../../movies/types/movieTypes";
import {toast } from "react-toastify";
import { Link } from "react-router-dom";

interface AddToListModalProps {
  movie: Movie;
  open: boolean;
  onClose: () => void;
}

const AddToListModal: React.FC<AddToListModalProps> = ({ movie, open, onClose }) => {
  const lists = useSelector((state: RootState) => state.movieLists.lists);
  const dispatch = useDispatch();

  const handleAddMovie = (listId: string) => {
    dispatch(addMovieToList({ listId, movie }));
    toast.success(`${movie.title} added to list!`)
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="add-to-list-modal-title" style={{display:"flex"}}>
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 2,

      }}>
        <Box display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}>
        <Typography id="add-to-list-modal-title" variant="h6" >
          Select a List
        </Typography>
        <Button variant="contained"
        style={{display:"flex"}}
        component={Link}
        to="/movie-lists"
         >Create list
         </Button>
         </Box>
        <List>
          {lists.map((list) => (
            <ListItem key={list.id}>
              <Button variant="contained" fullWidth onClick={() => handleAddMovie(list.id)}>
                {list.name}
              </Button>
            </ListItem>
          ))}
        </List>
        <Button onClick={onClose} sx={{ mt: 2 }} fullWidth variant="outlined">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default AddToListModal;