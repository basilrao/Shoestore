import React from 'react'
import CurrenyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import {getBasketTotal} from "./reducer.js";


function Subtotal() {
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      const classes = useStyles();
    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">
            <h1>Subtotal:</h1>
            <CurrenyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This Order Contains A Gift
                </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon></Icon>}
            >
                Proceed To Checkout
      </Button>

        </div>
    )
}

export default Subtotal
