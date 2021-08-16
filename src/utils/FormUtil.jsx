import React from 'react'
import { Label,FormGroup,Input, Alert } from 'reactstrap'
export default function FormUtil({...props}) {
    return (
        <div>

            <FormGroup>
                <Label> {props.Label}</Label>
                <Input onChange = {props.onChange} type = {props.type}
                name = {props.name}
                
                />
                
            </FormGroup>
            
        </div>
    )
}
