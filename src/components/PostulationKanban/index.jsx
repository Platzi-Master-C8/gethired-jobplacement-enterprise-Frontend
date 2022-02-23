import React from 'react';
import { Grid, Container } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Data } from './data';
import { KanbanColumn } from './KanbanColumn';

export const PostulationKanban = () => {
    const kanbanList = Data.map((props) => (
        <Grid item xs={12} sm={6} md={3} key={uuidv4()}>
            <KanbanColumn columnData={props} />
        </Grid>
    ));

    return (
        <Container
            sx={{
                pt: 2,
            }}
        >
            <Grid container spacing={2}>
                {kanbanList}
            </Grid>
        </Container>
    );
};
