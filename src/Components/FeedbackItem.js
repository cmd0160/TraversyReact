import Card from "./Shared/Card";
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'


function FeedbackItem({ item, handleDelete }) {

    // const handleClick = (id) => {
    //     console.log(id)
    // }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;
