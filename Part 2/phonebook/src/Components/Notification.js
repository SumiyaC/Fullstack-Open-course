const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='msg'>
        {message}
      </div>
    )
  }
  export default Notification