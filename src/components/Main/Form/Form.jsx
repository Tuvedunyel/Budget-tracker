import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useSpeechContext } from "@speechly/react-client";

import formatDate from "../../../utils/formatDate";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./style";
import CustomizedSnackbar from "../../Snackbar/Snackbar";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const { segment } = useSpeechContext();
  const [open, setOpen] = useState(false);

  const createTransaction = () => {
      if (Number.isNaN(Number(formData.amount)) || !formData.date.includes("-"))
        return;
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    setOpen(true);
    addTransaction(transaction);
    setFormData(initialState);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setFormData({ ...formData, type: "Expense" });
      } else if (segment.intent.intent === "add_income") {
        setFormData({ ...formData, type: "Income" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        return createTransaction();
      } else if (
        semgnet.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setFormData(initialState);
      }

      segment.entities.forEach(e => {
        const category = `${e.value.charAt(0)}${s.value
          .slice(1)
          .toLowerCase()}`;
        switch (e.type) {
          case "amount":
            setFormData({ ...formData, amount: e.value });
            break;
          case "category":
            if (incomeCategories.map(iC => iC.type).includes(category)) {
              setFormData({ ...formData, type: "Income", category });
            } else if (
              expenseCategories.map(eC => eC.type).includes(category)
            ) {
              setFormData({ ...formData, type: "Expense", category });
            }
            break;
          case "date":
            setFormData({ ...formData, date: e.value });
            break;
          default:
            break;
        }
      });

      if (segment.isFinal && formData.data.amount && formData.data.category && formData.data.date && formData.data.type) {
        createTransaction();
      }
    }
  }, [segment]);

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
        <CustomizedSnackbar open={open} setOpen={setOpen} />
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          {segment && <>{segment.words.map(w => w.value).join(" ")}</>}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={event =>
              setFormData({ ...formData, type: event.target.value })
            }
          >
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={event =>
              setFormData({ ...formData, category: event.target.value })
            }
          >
            {selectedCategories.map(category => (
              <MenuItem key={category.type} value={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='number'
          label='Amount'
          fullWidth
          value={formData.amount}
          onChange={event =>
            setFormData({ ...formData, amount: event.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='date'
          label='date'
          fullWidth
          value={formData.date}
          onChange={event =>
            setFormData({ ...formData, date: formatDate(event.target.value) })
          }
        />
      </Grid>
      <Button
        className={classes.button}
        variant='outlined'
        color='primary'
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
