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
  const validateProfile = (values) => {
    const errors = {}
    if (! values.cardNumber.test(/^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/)) {
      errors.cardNumber = 'invalid'
    }
    return errors
  }

  const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
      {...input}
      {...custom}
    />
  )

  return (
    <Form
      onSubmit = {onSubmit}
      validate = { (values) => {
          const errors = {}
          console.log(values.cardNumber)
          if (! values.cardNumber) {
            errors.cardNumber = 'required'
          }
          return errors
        }
      }
      render = { ({handleSubmit}) => (
              <form onSubmit={handleSubmit}>
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
                          <Field
                            type="text"
                            name="cardNumber"
                            label="Номер карты"
                            placeholder="0000 0000 0000 0000"
                            component={renderTextField}
                          ></Field>
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            type="text"
                            name="date"
                            label="Срок действия до"
                            placeholder="01/19"
                            component={renderTextField}
                          ></Field>
                        </Grid>
                      </Paper>
                    </Grid>
                    <Grid container item xs={6}>
                      <Paper>
                        <Grid item xs={12}>
                          <Field
                            type="text"
                            name="name"
                            label="Имя владельца"
                            placeholder="USER NAME"
                            component={renderTextField}
                          ></Field>
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            type="password"
                            name="cvc"
                            label="CVC"
                            placeholder="CVC"
                            component={renderTextField}
                          ></Field>
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
      )} />
  );
}

export default connect(state => {
  return { isLoggedIn: state.user.token !== null, token: state.user.token };
  },
  { upsertCardRequest })(Profile);
