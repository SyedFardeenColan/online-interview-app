import './QuestionConatiner.css'
import QuestionImage from '../../images/ques-img.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function QuestionConatiner(){
    return(
        <div className='question-box'>
            <div className='question-header'>
                <div className='question-left'>
                    <div className='question-topic'>History Quiz</div>
                    <span>Answer the question below</span>
                </div>
                
                <div className='question-timer'>Timer:29:09Mins</div>
            </div>
            <div className='question-body'>

                <div className='question-info'>
                        <img src={QuestionImage} alt=''/>
                        <div className='question-details'>
                            <span className='question-counter'>Question 1/5</span>
                            <div className='question-msg'>Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, as part of a protest against a bus company that refused to employ black and Asian drivers in which UK city?</div>
                        </div>
                </div>

                <div className='answer'>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Choose answer</FormLabel>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="London" />
                            <FormControlLabel value="male" control={<Radio />} label="Edinburgh" />
                            <FormControlLabel value="other" control={<Radio />} label="Liverpool" />
                            <FormControlLabel value="other" control={<Radio />} label="Canary Wharf" />

                        </RadioGroup>
                    </FormControl>

                    <div className='question-bottom'>
                        <div className='qus-sub-btn'>Submit</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}