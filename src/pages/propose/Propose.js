import React, { useState } from 'react';
import { NativeSelect, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { bulkUpload } from '../../api/upload';
import {createProject} from '../../api/project';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './Propose.scss';
import MButton from '../../components/m-button/MButton';

function Propose() {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [type, setType] = useState(1);
  const [customType, setCustomType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [about, setAbout] = useState('');
  const [who, setWho] = useState('');
  const [needs, setNeeds] = useState('');
  const [image, setImage] = useState(null);

  const imagesSelectedHandler = (e) => {
    if (e.target.files.length > 1) {
      alert('Please choose 1 image only');
      return;
    }
    setImage(e.target.files[0]);
  };
  const callCreateProject = (imageIds) => {
    const project = {
      name: name,
      start_time: startDate,
      end_time: endDate,
      description: about,
      who_can_help: who,
      type: {
        type_id: type,
        customType: customType
      },
      needs: needs,
      images: imageIds,
    };
    createProject(project, (result) => {
      if (result.projectId) {
        alert("Thank you for proposing your idea!\n");
      } else {
        alert("Failed to propose your project, please try again later!");
      }
    });
  };
  const handleSubmit = () => {
    if (image) {
      bulkUpload([image], (imageIds) => {
        //imageIds has list of image ids that was uploaded successfully
        if (imageIds.length === 0) {
          alert("Failed to upload project image, please try again later!");
          return;
        }
        callCreateProject(imageIds)
      });
      return;
    }
    callCreateProject([]);
  }

  return (
    <div className="propose">
      <h2 className="propose__title">Propose Your Idea</h2>
      <div className="propose__subtitle">
        If you have a project, event, even a thought that need more people to help,
        propose them here and others will join force with you!
      </div>
      <div className="propose__section">
        <div className="propose__section__title">
          Name<span className="propose__section__title__required">*</span>
        </div>
        <TextField
          placeholder="Name of your idea"
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 128))}
        />
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
        <TextField placeholder="website" value={link} onChange={(e) => setLink(e.target.value)} />
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
          <div className="date-time-picker">
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
              label="Start time"
              value={startDate}
              onChange={(date) => setStartDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change start time',
              }}
            />
          </div>
          <div className="date-time-picker">
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
              label="End time"
              value={endDate}
              onChange={(date) => setEndDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change end time',
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
      <div className="propose__section">
        <div className="propose__section__title">
          About<span className="propose__section__title__required">*</span>
        </div>
        <TextField
          placeholder="What is your idea about?"
          multiline
          variant="outlined"
          rows={4}
          value={about}
          onChange={(e) => setAbout(e.target.value.slice(0, 500))}
        />
      </div>
      <div className="propose__section">
        <div className="propose__section__title">
          Who can help<span className="propose__section__title__required">*</span>
        </div>
        <TextField
          variant="outlined"
          value={who}
          onChange={(e) => setWho(e.target.value.slice(0, 500))}
        />
      </div>
      <div className="propose__section">
        <div className="propose__section__title">
          What we need<span className="propose__section__title__required">*</span>
        </div>
        <div>What kinds of talent do you need to take this project?</div>
        <TextField
          variant="outlined"
          value={needs}
          onChange={(e) => setNeeds(e.target.value.slice(0, 500))}
        />
      </div>
      <div className="propose__section">
        <div className="propose__section__title">Upload a picture</div>
        {image && (
          <img className="project-preview-image" src={URL.createObjectURL(image)} alt="project-preview" style={{width:'80%'}}/>
        )}
        <label htmlFor="project-image-upload"><div className="fake-button">Select</div></label>
        <input type="file" id="project-image-upload" name="image-upload" multiple onChange={imagesSelectedHandler} accept="image/*" />
      </div>
      <MButton className="propose__share" variant="contained" color="primary" onClick={handleSubmit}>Share</MButton>
    </div>
  );
}

export default Propose;
