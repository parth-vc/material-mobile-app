import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const items = [
  {
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2019/10/Chocolate-Peanut-Butter-Shakes_EXPS_FT19_245766_F_1008_1.jpg",
    Name: "Chocolate PenutButter Shakes"
  },
  {
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_900x675%2Fpublic%2Fstrawberry-shortcake-shake-mr.jpg%3Fitok%3D4RVkDU2-",
    Name: "Strawberry Shortcake shake"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS2zkKqn7wk3yWozzAK44OjcUhceeiBJHqSxoZUQgMauaeQqMh&usqp=CAU",
    Name: "Triple Barry Smoothie"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSxtClybeXsUpnohZ12dMUvL9lCulnNAfZr8ZMleeC5lARCZzp&usqp=CAU",
    Name: "Chocolate Banana Thick Shake"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq-MQEqggK0Anl99fSEkWvgh4kyKfWRQ6wxeTO8ecirAPrNfJ3&usqp=CAU",
    Name: "Choco Cookies"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgEPrj1_ti5WXFApZLASaCgOoy58W5J9Oem2Eibg7WVswTVDls&usqp=CAU",
    Name: "Oreo Shake"
  }
];
const theme = createMuiTheme({
  palette: {
    secondary: yellow
  }
});
const useStyles = makeStyles(theme => ({
  cardroot: {
    marginTop: theme.spacing(0.5)
  },
  CardContent: {
    minHeight: 100,
    maxHeight: 100

    // maxHight:50
  },
  grow: {
    flexGrow: 1
  }
}));

function CardItem(name) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        {items.map(item => (
          <Grid item xs={6} sm={6} lg={3}>
            <Card className={classes.cardroot}>
              <CardActionArea className={classes.CardActionArea}>
                <CardMedia
                  component="img"
                  alt="Shoes"
                  height="150"
                  image={item.image}
                  title={item.Name}
                  radius="200"
                />
                <CardContent className={classes.CardContent}>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h6"
                    component="h2"
                  >
                    {item.Name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Trainer's White
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <ThemeProvider theme={theme}>
                  <Typography
                    className={classes.cardroot}
                    color="primary"
                    justifyContent="flex-end"
                  >
                    $ 80
                  </Typography>
                  <div className={classes.grow} />

                  <Typography
                    className={classes.cardroot}
                    color="secondary"
                    justifyContent="flex-end"
                  >
                    4.8 <StarIcon color="secondary" />
                  </Typography>
                </ThemeProvider>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default function Product() {
  return <CardItem />;
}

// return (
//   <div>
//     {items.map(item => (
//       <h1 key={item.Name}>{item.Name}</h1>
//     ))}
//   </div>
// );

{
  /*  */
}
