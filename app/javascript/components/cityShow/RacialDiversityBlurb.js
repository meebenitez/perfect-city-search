import React from 'react';
import {diversity} from '../utils/CityFormat'
import Aux from '../Aux'



const RacialDiversityBlurb = props => {
    
    
    return (
            <Aux>
                <h7>Racial Diversity</h7><br></br>
                    <p>The racial demographic of {props.city.name}, {props.city.short_state} is 
                        <strong> {props.city.pop_white_perc}% White</strong>, 
                        <strong> {props.city.pop_black_perc}% Black</strong>,
                        <strong> {props.city.pop_native_perc}% Native-American</strong>,
                        <strong> {props.city.pop_asian_perc}% Asian</strong>,
                        <strong> {props.city.pop_pacific_perc}% Pacific / Islander</strong>,
                        <strong> {props.city.pop_latin_hispanic_perc}% Latin or Hispanic</strong>*,
                        and <strong>{props.city.pop_mixed_race_perc}% Mixed</strong>. This data was sourced from the US Census Bureau 2016 American Community Survey</p>

                    <p>We would consider {props.city.name} {
                        diversity([props.city.pop_white_perc, props.city.pop_native_perc, props.city.pop_pacific_perc, 
                            props.city.pop_latin_hispanic_perc, 
                            props.city.pop_asian_perc, props.city.pop_black_perc, 
                            props.city.pop_other_race_perc]).length !== 1 ? <span>to be <strong>racially diverse.</strong></span> : <span>to <strong>not be</strong> racially diverse.</span>
                    } </p>

                    <p><span className="asterisk">The "Latin / Hispanic" dataset includes hispanics and latinos of any race, including those who identify as White.</span></p>
                                       
            </Aux>
    )
    
} 





export default RacialDiversityBlurb;