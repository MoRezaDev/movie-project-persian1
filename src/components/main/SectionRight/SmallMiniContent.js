import React from "react";

//importing icons....
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";


import { Typography } from "@mui/material";

const SmallMiniContent = ({ postData }) => {
  return (
    <div>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "15px" }}>
        <MovieFilterOutlinedIcon fontSize="xs" />
        <Typography color="silver" fontSize={12}>
          ژانر :
        </Typography>
        <Typography fontSize={12}>{postData.genre}</Typography>
      </div>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "15px" }}>
        <MovieFilterOutlinedIcon fontSize="xs" />
        <Typography color="silver" fontSize={12}>
          محصول :
        </Typography>
        <Typography fontSize={12}>{postData.productCountry}</Typography>
      </div>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "15px" }}>
        <MovieFilterOutlinedIcon fontSize="xs" />
        <Typography color="silver" fontSize={12}>
          زمان :
        </Typography>
        <Typography fontSize={12}>{postData.timeDuration}</Typography>
      </div>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "15px" }}>
        <MovieFilterOutlinedIcon fontSize="xs" />
        <Typography color="silver" fontSize={12}>
          کیفیت :
        </Typography>
        <Typography fontSize={12}>{postData.quality}</Typography>
      </div>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "15px" }}>
        <MovieFilterOutlinedIcon fontSize="xs" />
        <Typography color="silver" fontSize={12}>
          تاریخ انتشار :
        </Typography>
        <Typography fontSize={12}>{postData.productDate}</Typography>
      </div>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "15px" }}>
        <MovieFilterOutlinedIcon fontSize="xs" />
        <Typography color="silver" fontSize={12}>
          زبان :
        </Typography>
        <Typography fontSize={12}>{postData.language}</Typography>
      </div>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "15px" }}>
        <MovieFilterOutlinedIcon fontSize="xs" />
        <Typography color="silver" fontSize={12}>
          کارگردان :
        </Typography>
        <Typography fontSize={12}>{postData.director}</Typography>
      </div>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "15px" }}>
        <MovieFilterOutlinedIcon fontSize="xs" />
        <Typography color="silver" fontSize={12}>
          ستارگان :
        </Typography>
        <Typography fontSize={12}>{postData.stars}</Typography>
      </div>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "15px" }}>
        <MovieFilterOutlinedIcon fontSize="xs" />
        <Typography color="silver" fontSize={12}>
          رتبه :
        </Typography>
        <Typography fontSize={12}>{postData.imdbRating}</Typography>
      </div>
    </div>
  );
};

export default SmallMiniContent;
