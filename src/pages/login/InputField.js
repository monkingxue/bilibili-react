/**
 * Created by xueyingchen.
 * @flow
 */
import React from "react";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";

type PropsType = {
  floatingLabelText: string,
  type: string,
  onChange(content: string): void,
  toggle?: Function
};

export default function InputField({floatingLabelText, icon, type, toggle, onChange}: PropsType) {

  return (
    <div className="input-item">
      <IconButton onTouchTap={toggle}>
        <icon.type {...icon.props}/>
      </IconButton>
      <TextField type={type} onChange={onChange}
                 floatingLabelText={floatingLabelText}
      />
    </div>
  );
}
