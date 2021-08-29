import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { shortText } from '../../utils/validation';

const initialFrmDt = {
    subject: "",
    issueDate: "",
    detail: "",
};
//handles minimum or max length messages
const initialFrmError = {
    subject: false,
    issueDate: false,
    detail: false,
};

export const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);
    useEffect(() => {}, [frmData, frmDataError]);

    //handleOnChange function
    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setFrmData({
            ...frmData,
            [name]: value,
        });
    };

    //handleOnSubmit function
    const handleOnSubmit = async (e) => {
        e.preventDefault(initialFrmError);

        //Check validation of subject.length
        setFrmDataError(initialFrmError);
        const isSubjectValid = await shortText(frmData.subject);

        setFrmDataError({
            ...initialFrmError,
            subject: !isSubjectValid,
        });

        console.log('Form submit request received', frmData);
    }


    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    frmDt = {frmData}
                    frmDataError={frmDataError}
                    />
                </Col>
            </Row>
        </Container>
    )
}
