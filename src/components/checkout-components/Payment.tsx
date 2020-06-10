import React from 'react';
import ReactDOM from 'react-dom'
import { useForm } from "react-hook-form";
import { Button, Card, Label, MenuItem, Menu, FormGroup, InputGroup, RadioGroup, Radio, Checkbox } from "@blueprintjs/core"
import VisaForm from './paymentForms/visaForm'
import SwishForm from './paymentForms/swishForm'
import PaypalForm from './paymentForms/paypalForm'

interface State {
    isVisaSelected: boolean
    isSwishSelected: boolean
    isPaypalSelected: boolean
    forms: any
}

interface Props { }

export default class Payment extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.visaHandleClick = this.visaHandleClick.bind(this)
        this.swishHandleClick = this.swishHandleClick.bind(this)
        this.paypalHandleClick = this.paypalHandleClick.bind(this)
        this.state = {
            isVisaSelected: false,
            isSwishSelected: false,
            isPaypalSelected: false,
            forms: ""
        }
    }

    visaHandleClick = () => {
        this.setState({ isVisaSelected: true, isSwishSelected: false, isPaypalSelected: false })
    }

    swishHandleClick = () => {
        this.setState({ isSwishSelected: true, isVisaSelected: false, isPaypalSelected: false })
    }

    paypalHandleClick = () => {
        this.setState({ isPaypalSelected: true, isVisaSelected: false, isSwishSelected: false })
    }

    form = (form: any) => {
        let formToFill = this.state.forms
        formToFill.push(form)
        this.setState({
            forms: formToFill
        }, () => {
            console.log(this.state.forms)
        })
    }

    render() {
        return (
            <div>
                <h2>Payment</h2>
                <Menu>
                    <MenuItem text="chouse your method">
                        <MenuItem text="Visa Card" onClick={this.visaHandleClick} />
                        <MenuItem text="Swish" onClick={this.swishHandleClick} />
                        <MenuItem text="PayPal" onClick={this.paypalHandleClick} />
                    </MenuItem>
                </Menu>
                <div>
                    {this.state.isVisaSelected && <VisaForm form={this.form} />}
                    {this.state.isSwishSelected && <SwishForm form={this.form} />}
                    {this.state.isPaypalSelected && <PaypalForm form={this.form} />}
                </div>
            </div>
        )
    }
}
