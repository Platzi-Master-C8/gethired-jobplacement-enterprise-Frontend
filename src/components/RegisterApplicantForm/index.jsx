/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { registerApplicant } from '../../api/Applicants';
import SendForm from './SendForm';
import RegisterApplicantModal from './RegisterApplicantModal';

const initialState = {
    vacancy_id: null,
    name: '',
    paternal_last_name: '',
    maternal_last_name: '',
    email: '',
    cellphone: null,
    country: null,
    city: null,
    cv_file: null,
    motivation_letter_file: '',
    job_title: '',
    company: '',
    linkedin_url: '',
};

const RegisterApplicantForm = ({ open, setOpen, id }) => {
    const [applicantData, setApplicantData] = useState({ ...initialState, vacancy_id: id });
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

        const {
            vacancy_id,
            name,
            paternal_last_name,
            maternal_last_name,
            email,
            cellphone,
            country,
            city,
            cv_file,
            motivation_letter_file,
            job_title,
            company,
            linkedin_url,
        } = applicantData;

        const data = new FormData();
        data.append('vacancy_id', vacancy_id);
        data.append('name', name);
        data.append('paternal_last_name', paternal_last_name);
        data.append('maternal_last_name', maternal_last_name);
        data.append('email', email);
        data.append('cellphone', cellphone);
        data.append('country', country?.country);
        data.append('city', city?.name);
        data.append('cv_file', cv_file);
        data.append('motivation_letter_file', motivation_letter_file);
        data.append('job_title', job_title);
        data.append('company', company);
        data.append('linkedin_url', linkedin_url);

        setSended(true);
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
    id: PropTypes.number.isRequired,
};

export default RegisterApplicantForm;
