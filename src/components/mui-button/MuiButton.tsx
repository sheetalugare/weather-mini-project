import Button from '@mui/material/Button';
import styles from './MuiButton.module.css'

export const MuiButton = (props: any) => {

    const { className } = props;

    return (
        <Button {...props} className={styles['dark-filled']} >
            {props.children}
        </Button>
    );
}