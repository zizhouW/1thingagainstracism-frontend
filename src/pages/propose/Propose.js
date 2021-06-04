import React, { useState } from 'react';
import { NativeSelect, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './Propose.scss';

function Propose() {
  const [link, setLink] = useState('');
  const [type, setType] = useState(1);
  const [customType, setCustomType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="propose">
      <h2 className="propose__title">Propose Your Idea</h2>
      <div className="propose__subtitle">
        If you have a project, event, even a thought that need more people to help,
        propose them here and others will join force with you!
      </div>
      <div className="propose__section">
        <div className="propose__section__title">
          Location<span className="propose__section__title__required">*</span>
        </div>
        <NativeSelect
          defaultValue={1}
        >
          <option value={1}>Online</option>
        </NativeSelect>
        <TextField placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
      </div>
      <div className="propose__section">
        <div className="propose__section__title">
          Type<span className="propose__section__title__required">*</span>
        </div>
        <NativeSelect
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value={1}>Donation</option>
          <option value={2}>Sign Petition</option>
          <option value={3}>Emails & Calls</option>
          <option value={4}>Team Projects</option>
          <option value={5}>Other</option>
        </NativeSelect>
        {type === '5' && (
          <TextField placeholder="Please specify" value={customType} onChange={(e) => setCustomType(e.target.value)} />
        )}
      </div>
      <div className="propose__section">
        <div className="propose__section__title">Date</div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>
            <KeyboardDatePicker
              margin="normal"
              label="Start date"
              minDate={new Date()}
              format="MM/dd/yyyy"
              value={startDate}
              onChange={(date) => setStartDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change start date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              label="Time"
              value={startDate}
              onChange={(date) => setStartDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change start time',
              }}
            />
          </div>
          <div>
            <KeyboardDatePicker
              margin="normal"
              label="End date"
              format="MM/dd/yyyy"
              minDate={startDate || new Date()}
              value={endDate}
              onChange={(date) => setEndDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change end date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              label="Time"
              value={endDate}
              onChange={(date) => setEndDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change end time',
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
}

export default Propose;
