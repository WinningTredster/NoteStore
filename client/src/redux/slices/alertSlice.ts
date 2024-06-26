import { ComponentType } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertColor, Slide } from "@mui/material";
import { SnackbarOrigin } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

export interface AlertState {
  open: boolean;
  vertical: SnackbarOrigin["vertical"];
  horizontal: SnackbarOrigin["horizontal"];
  severe: AlertColor | undefined;
  title: string;
  message: string;
  duration: number;
  transition: React.ComponentType<
    TransitionProps & {
      children: React.ReactElement<any, any>;
    }
  >;
}

const initialState: AlertState = {
  open: false,
  vertical: "top",
  horizontal: "center",
  severe: undefined,
  title: "",
  message: "",
  duration: 3000,
  transition: Slide,
};
export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenAlert(state, action: PayloadAction<Partial<AlertState>>) {
      return { ...state, open: true, ...action.payload };
    },
    setCloseAlert() {
      return { ...initialState };
    },
  },
});

export const { setOpenAlert, setCloseAlert } = modal.actions;
export default modal.reducer;
