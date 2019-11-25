import React, { useContext, PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { TextField, Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { Form, Field } from "react-final-form";

import { upsertCardRequest } from "./actions"

function Profile(props) {
  // return props.isLoggedIn ? <div>user profile</div> : <Redirect to="/login" />;
  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    props.upsertCardRequest({
      cardNumber: data.get("cardnumber"),
      expiryDate: data.get("date"),
      cardName: data.get("name"),
      cvc: data.get("cvc"),
      token: props.token,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Paper>
          <Grid item container>
            <Grid item xs={12} >
              <p>Профиль</p>
            </Grid>
            <Grid item xs={12}>
              <p>способ оплаты</p>
            </Grid>
            <Grid container item xs={6}>
              <Paper>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="cardnumber"
                    label="Номер карты"
                    placeholder="0000 0000 0000 0000"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="date"
                    label="Срок действия до"
                    placeholder="01/19"
                  ></TextField>
                </Grid>
              </Paper>
            </Grid>
            <Grid container item xs={6}>
              <Paper>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="name"
                    label="Имя владельца"
                    placeholder="USER NAME"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="cvc"
                    label="CVC"
                    placeholder="CVC"
                  ></TextField>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit">Сохранить</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </form>
  );
}

export default connect(state => {
  return { isLoggedIn: state.user.token !== null, token: state.user.token };
  },
  { upsertCardRequest })(Profile);
