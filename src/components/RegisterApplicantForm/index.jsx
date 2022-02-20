import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { registerApplicant } from '../../api/Applicants';
import SendForm from './SendForm';
import RegisterApplicantModal from './RegisterApplicantModal';

const initialState = {
    vacancy_id: 1,
    name: '',
    paternal_last_name: '',
    maternal_last_name: '',
    email: '',
    cellphone: null,
    country: null,
    city: null,
    cv_file: null,
    motivation_letter_file: null,
    job_title: '',
    company: '',
    linkedin_url: '',
};

const RegisterApplicantForm = ({ open, setOpen }) => {
    const [applicantData, setApplicantData] = useState(initialState);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sended, setSended] = useState(false);

    const handleCloseSended = () => {
        setOpen(false);
        setSended(false);
    };

    const handleClose = () => setOpen(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setApplicantData({ ...applicantData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSended(true);

        const data = new FormData();
        data.append('vacancy_id', 1);
        data.append('name', applicantData.name);
        data.append('paternal_last_name', applicantData.paternal_last_name);
        data.append('maternal_last_name', applicantData.maternal_last_name);
        data.append('email', applicantData.email);
        data.append('cellphone', applicantData.cellphone);
        data.append('country', applicantData.country);
        data.append('city', applicantData.city);
        data.append('cv_file', applicantData.cv_file);
        data.append('motivation_letter_file', applicantData.motivation_letter_file);
        data.append('job_title', applicantData.job_title);
        data.append('company', applicantData.company);
        data.append('linkedin_url', applicantData.linkedin_url);

        setOpen(true);
        registerApplicant(data)
            .then((res) => {
                if (res.status === 201) {
                    setIsLoading(false);
                    setError(false);
                } else {
                    setIsLoading(false);
                    setError(true);
                }
                setApplicantData(initialState);
            })
            .catch(() => {
                setIsLoading(false);
                setError(true);
            });
    };

    return !sended ? (
        <RegisterApplicantModal
            open={open}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            setApplicantData={setApplicantData}
            applicantData={applicantData}
        />
    ) : (
        <SendForm open={open} loading={isLoading} error={error} handleClose={handleCloseSended} />
    );
};

RegisterApplicantForm.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default RegisterApplicantForm;
