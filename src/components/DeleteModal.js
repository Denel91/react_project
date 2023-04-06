import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteModal({message, onDelete, onCancel}) {
    return (
        <div className="modal show" style={{display: 'block', position: 'initial'}}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Attenzione...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onCancel}>
                        Annulla
                    </Button>
                    <Button variant="danger" onClick={onDelete}>
                        Elimina
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}