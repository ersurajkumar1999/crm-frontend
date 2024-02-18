import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import {MoreVert} from "@mui/icons-material";

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const Post = () => {
  
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [repostsCount, setRepostsCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleComment = () => {
    setCommentsCount(commentsCount + 1);
  };

  const handleRepost = () => {
    setRepostsCount(repostsCount + 1);
  };
  return (
    <Card sx={{ mt: 2 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
        subheader="September 14, 2022"
      />
      <CardMedia
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
          frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like" onClick={handleLike}>
          <ThumbUpAltOutlinedIcon sx={{ color: liked ? "primary.main" : "action.active" }} />
        </IconButton>
        <Typography variant="body2" color="text.secondary">{likesCount}</Typography>
        <IconButton aria-label="comment" onClick={handleComment}>
          <ChatOutlinedIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">{commentsCount}</Typography>
        <IconButton aria-label="share" onClick={handleRepost}>
          <ShareOutlinedIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">{repostsCount}</Typography>
        <Button size="small">See more reactions</Button>
      </CardActions>

    </Card>
  );
};

export default Post;
