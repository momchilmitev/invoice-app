import './DeleteModal.scss'

const DeleteModal = ({ invoiceId }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <h3 className="modal__title">Confirm Deletion</h3>
        <p className="modal__content">
          Are you sure you want to delete invoice #{invoiceId}? This action
          cannot be undone.
        </p>
        <div className="modal__actions">
          <button className="btn btn--white">cancel</button>
          <button className="btn btn--red">delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
