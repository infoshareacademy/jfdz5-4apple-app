import React from 'react'
import {FormGroup, Radio} from "react-bootstrap";


class categories extends React.Component {
    render() {
        return (
            <div>
                <FormGroup>
                    <Radio name="radioGroup" block>
                        Ksiazki
                    </Radio>
                    {' '}
                    <Radio name="radioGroup" block>
                        RTV
                    </Radio>
                    {' '}
                    <Radio name="radioGroup" block>
                        Obuwie
                    </Radio>
                    {' '}
                    <Radio name="radioGroup" block>
                        Uroda
                    </Radio>
                </FormGroup>
            </div>
        )
    }
}

export default categories