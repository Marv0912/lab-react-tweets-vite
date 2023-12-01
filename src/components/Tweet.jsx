import Message from "./Message"
import User from "./User"
import ProfileImage from "./ProfileImage"
import Timestamp from "./Timestamp"
import Actions from "./Actions"

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User user={user} />

          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
