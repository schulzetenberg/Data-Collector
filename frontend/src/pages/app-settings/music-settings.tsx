import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

import { Button, Form, TextField, SwitchForm } from '@schulzetenberg/component-library';

const useStyles = makeStyles((theme: Theme) => ({
  textCenter: { textAlign: 'center' },
}));

type FormData = {
  active: boolean;
  schedule: string;
  spotifySecret: string;
  spotifyId: string;
  lastFmKey: string;
  lastFmUsername: string;
  cloudinaryUpload: boolean;
};

const MusicSettings: React.FC<{ data: FormData; isLoading: boolean; submit: any }> = ({ data, isLoading, submit }) => {
  const classes = useStyles();

  const { handleSubmit, register, setValue, errors, reset } = useForm<FormData>();

  const formProps = { disabled: isLoading, errors, register, setValue, fullWidth: true };

  useEffect(() => {
    if (data) {
      const { active, schedule, spotifySecret, spotifyId, lastFmKey, lastFmUsername, cloudinaryUpload } = data;

      reset({
        active,
        schedule,
        spotifySecret,
        spotifyId,
        lastFmKey,
        lastFmUsername,
        cloudinaryUpload,
      });
    }
  }, [data, reset]);

  return (
    <Form disabled={formProps.disabled} onSubmit={handleSubmit(submit)}>
      <div className={classes.textCenter}>
        <SwitchForm {...formProps} name="active" label="Active" />
      </div>
      <TextField {...formProps} name="schedule" label="Schedule" type="text" autoFocus />
      <TextField {...formProps} name="spotifySecret" label="Spotify Secret" type="text" />
      <TextField {...formProps} name="spotifyId" label="Spotify ID" type="text" />
      <TextField {...formProps} name="lastFmKey" label="LastFM Key" type="text" />
      <TextField {...formProps} name="lastFmUsername" label="LastFM Username" type="text" />
      <div className={classes.textCenter}>
        <SwitchForm {...formProps} name="cloudinaryUpload" label="Upload Images to Cloudinary" />
      </div>
      <Button {...formProps} type="submit">
        Save
      </Button>
    </Form>
  );
};

export default MusicSettings;
