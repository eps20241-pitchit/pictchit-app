import React from "react";
import "./createdPitch.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import pitchImage from "../../assets/pitch-image.svg";

const CreatedPitch: React.FC = () => {
  return (
    <div>
      <h1 style={{ fontSize: '3rem' }}>Pitchs Gerados</h1> {/* Inline style added here */}

      <div className="created-pitch-container">
        <div className="cards-wrapper">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={pitchImage}
                alt="Pitch info"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pitch It!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pitch gerado por IA da equipe Pitch It!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={pitchImage}
                alt="Pitch info"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CryptoBot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pitch gerado por IA da equipe CryptoBot
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={pitchImage}
                alt="Pitch info"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Agenday
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pitch gerado por IA da equipe Agenday
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreatedPitch;
