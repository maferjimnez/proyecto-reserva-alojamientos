import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import dateError from '../assets/images/no_result_date.png';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		outline: 'none'
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(98%, 98%, 98%)',
		border: 'none',
		borderRadius: '5px',
		boxShadow: theme.shadows[5],
		padding: '3rem 0'
	},
	button: {
		margin: '8px auto',
        padding: '12px',
		width: '30%',
		backgroundColor: 'rgb(8%, 18%, 30%, 0.8)',
        border: 'none',
        outline: 'none',
		color: '#fff',
		borderRadius: '5px',
		cursor: 'pointer'
    },
    img: {
        width: '30%'
    }
}));

export default function DateErrorModal({ handleClose, open }) {
	const classes = useStyles();
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
                        <img className={classes.img} src={dateError} alt="Ilustración de calendario"/>
                        <h2 id="transition-modal-title">Lo sentimos, Marty Mcfly</h2>
						<p id="transition-modal-description">
							La fecha de entrada debe ser igual o posterior al día de hoy. 
						</p>
						<button
							className={classes.button}
							onClick={handleClose}
						>
							Volver a filtrar
						</button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};