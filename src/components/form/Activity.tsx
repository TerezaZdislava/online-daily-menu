import { FormDataInt, FormQuestionObj } from '../../pages/UserForm';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Activity({
  formData,
  setFormData,
  formquestions,
}: {
  formData: FormDataInt;
  setFormData: any;
  formquestions: FormQuestionObj[];
}) {
  const sportFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      sportFrequency: (event.target as HTMLInputElement).value,
    });
  };

  const jobActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      jobActivity: (event.target as HTMLInputElement).value,
    });
  };

  return (
    <form className="formPart">
      <section className="question">
        <h4>{formquestions[0].q}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.sportFrequency}
          value={formData.sportFrequency}
          onChange={sportFrequencyChange}
        >
          <FormControlLabel
            value={formquestions[0].a[0]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[0]}
          />
          <FormControlLabel
            value={formquestions[0].a[1]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[1]}
          />
          <FormControlLabel
            value={formquestions[0].a[2]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[2]}
          />
          <FormControlLabel
            value={formquestions[0].a[3]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[3]}
          />
        </RadioGroup>
      </section>
      <section className="question">
        <h4>{formquestions[1].q}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.jobActivity}
          value={formData.jobActivity}
          onChange={jobActivityChange}
        >
          <FormControlLabel
            value={formquestions[1].a[0]}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[0]}
          />
          <FormControlLabel
            value={formquestions[1].a[1]}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[1]}
          />
          <FormControlLabel
            value={formquestions[1].a[2]}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[2]}
          />
        </RadioGroup>
      </section>
    </form>
  );
}
export default Activity;